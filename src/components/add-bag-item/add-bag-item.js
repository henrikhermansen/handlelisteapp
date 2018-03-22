import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';
import Suggestions from '../suggestions/suggestions';
import Input from '../input/input';
import KeyCodes from '../../constants/key-codes';
import { Plus, Cross } from '../svg';

import { pushSet } from '../../api/firebase/database';
import { BAG_ITEMS } from '../../api/firebase/refs';

import './add-bag-item.less';

class AddBagItem extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
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
      }, () => pushSet(BAG_ITEMS, {
        added: new Date().toJSON(),
        itemKey: item.key,
      }).then(
        () => this.setState({ value: '', isLoading: false, error: undefined }),
        error => this.setState({ isLoading: false, error }),
      ));
    }
  };

  itemFromValue = () =>
    this.props.items.find(item => item.name.toLowerCase() === this.state.value.toLowerCase());

  render() {
    const { error } = this.state;
    return (
      <IsLoadingWrapper isLoading={this.state.isLoading}>
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
              className={classnames(
                'add-bag-item__button',
                { 'add-bag-item__button--disabled': !this.itemFromValue() },
              )}
            >
              {
                !error
                  ? <Plus fill="dark-green" />
                  : <Cross fill="dark-red" />
              }
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
