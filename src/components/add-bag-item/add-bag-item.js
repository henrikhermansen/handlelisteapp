import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';
import Cross from '../svg/cross';
import Suggestions from '../suggestions/suggestions';

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

  addBagItem = () => {
    if (this.state.value === 'not yet implemented') {
      this.props.addBagItem();
    }
  };

  render() {
    return (
      <IsLoadingWrapper isLoading={this.props.isLoading || this.state.isLoading}>
        <div className="add-bag-item">
          <div style={{ display: 'none' }}>{JSON.stringify(this.props.items)}</div>
          <input
            type="text"
            placeholder="Legg til en vare i listen"
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          />
          <button onClick={this.addBagItem}>
            <Cross
              fill="dark-red"
              className={classnames(
                'add-bag-item__button',
                { 'add-bag-item__button--rotated': !this.state.error },
              )}
            />
          </button>
        </div>
        <Suggestions
          values={this.props.items.map(item => item.name)}
          input={this.state.value}
          onSelect={value => this.setState({ value })}
        />
      </IsLoadingWrapper>
    );
  }
}

export default AddBagItem;
