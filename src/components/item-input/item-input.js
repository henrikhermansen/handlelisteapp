import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from '../input/input';
import Cross from '../svg/cross';
import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';

class ItemInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
    SubmitSvg: PropTypes.func.isRequired,
  };

  static defaultProps = { value: '' };

  state = {
    value: this.props.value,
    isLoading: false,
    error: undefined,
  };

  onSubmit = (onSubmit, onSuccess) => {
    const value = this.state.value.trim();
    if (value) {
      this.setState({
        isLoading: true,
      }, () => onSubmit(value)
        .then(
          result =>
            this.setState({
              isLoading: false, error: undefined,
            }, () => onSuccess(result)),
          error => this.setState({ isLoading: false, error }),
        ));
    }
  };

  render() {
    const {
      onSubmit,
      onSuccess,
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
            focusOnMount
          />
        </span>
        <span>
          <IsLoadingWrapper isLoading={isLoading} inline>
            <button
              onClick={() => this.onSubmit(onSubmit, onSuccess)}
              disabled={!value.trim()}
              className={classnames(
                'item__button',
                { 'item__button--disabled': !value.trim() },
              )}
            >
              {
                !error
                  ? <SubmitSvg fill={isLoading ? 'grass' : 'white'} />
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
