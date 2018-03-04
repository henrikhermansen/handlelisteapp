import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';
import Cross from '../svg/cross';
import Suggestions from '../suggestions/suggestions';
import Input from '../input/input';
import KeyCodes from '../../constants/key-codes';
import { postBagItem } from '../../api/bag-items';

import './add-bag-item.less';

class AddBagItem extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    addBagItem: PropTypes.func.isRequired,
  };

  state = {
    value: '',
    isLoading: false,
    error: undefined,
  };

  onKeyDown = (event) => {
    if (event.which === KeyCodes.ENTER) {
      this.addBagItem();
    }
  };

  addBagItem = () => {
    const item = this.itemFromValue();
    if (item) {
      this.setState({
        isLoading: true,
      }, () => postBagItem({
        added: new Date().toJSON(),
        itemId: item.id,
      }).then(
        newItem => this.setState({
          value: '', isLoading: false, error: undefined,
        }, () => this.props.addBagItem(newItem)),
        error => this.setState({ isLoading: false, error }),
      ));
    }
  };

  itemFromValue = () => this.props.items.find(item => item.name === this.state.value);

  render() {
    return (
      <IsLoadingWrapper isLoading={this.props.isLoading || this.state.isLoading}>
        <div className="add-bag-item">
          <span>
            <Input
              placeholder="Legg til en vare i listen"
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value, error: undefined })}
              onKeyDown={this.onKeyDown}
            />
          </span>
          <span>
            <button
              onClick={this.addBagItem}
              tabIndex={this.itemFromValue() ? '0' : '-1'}
            >
              <Cross
                fill={this.state.error ? 'dark-red' : 'dark-green'}
                className={classnames(
                    'add-bag-item__button',
                    { 'add-bag-item__button--rotated': !this.state.error },
                    { 'add-bag-item__button--disabled': !this.itemFromValue() },
                  )}
              />
            </button>
          </span>
          <Suggestions
            values={this.props.items.map(item => item.name)}
            input={this.state.value}
            onSelect={value => this.setState({ value })}
          />
        </div>
      </IsLoadingWrapper>
    );
  }
}

export default AddBagItem;
