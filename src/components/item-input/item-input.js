import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from '../input/input';
import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';
import KeyCodes from '../../constants/key-codes';
import { Cross } from '../svg';

class ItemInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    SubmitSvg: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: '',
  };

  state = {
    value: this.props.value,
    isLoading: false,
    error: undefined,
  };

  onKeyDown = (event) => {
    if (event.which === KeyCodes.ENTER) {
      this.onSubmit(this.props.onSubmit);
    }
  };

  onSubmit = (onSubmit) => {
    const value = this.state.value.trim();
    if (value) {
      this.setState({
        isLoading: true,
      }, () => onSubmit(value));
    }
  };

  render() {
    const {
      onSubmit,
      SubmitSvg,
      ...props
    } = this.props;
    const { value, isLoading, error } = this.state;
    return (
      <div className="item">
        <span>
          <Input
            {...props}
            value={value}
            onChange={
              event => this.setState({ value: event.target.value, error: undefined })
            }
            onKeyDown={this.onKeyDown}
            focusOnMount
          />
        </span>
        <span>
          <IsLoadingWrapper isLoading={isLoading} inline>
            <button
              onClick={() => this.onSubmit(onSubmit)}
              disabled={!value.trim()}
              className={classnames(
                'item-input__button',
                { 'item-input__button--disabled': !value.trim() },
              )}
            >
              {
                !error
                  ? <SubmitSvg />
                  : <Cross fill="dark-red" />
              }
            </button>
          </IsLoadingWrapper>
        </span>
      </div>
    );
  }
}

export default ItemInput;
