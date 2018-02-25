import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Checkmark from '../svg/checkmark';
import Cross from '../svg/cross';

import './shopping-item.less';
import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';
import { putBagItem } from '../../api/bag-items';

class ShoppingItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    itemName: PropTypes.string.isRequired,
    updateBagItem: PropTypes.func.isRequired,
  };

  state = {
    isLoading: false,
    error: undefined,
  };

  togglePurchasedStatus = () => {
    const { item, updateBagItem } = this.props;
    this.setState({
      isLoading: true,
    }, () => putBagItem({
      ...item,
      purchased: item.purchased ? false : new Date().toJSON(),
    }).then(
      newItem => this.setState({ isLoading: false }, () => updateBagItem(newItem)),
      error => this.setState({ isLoading: false, error }),
    ));
  };

  render() {
    const { item, itemName } = this.props;
    return (
      <div
        className={classnames(
          'shopping-item',
          { 'shopping-item--purchased': item.purchased },
        )}
      >
        <span>
          {itemName}
        </span>
        <span>
          <IsLoadingWrapper isLoading={this.state.isLoading} inline>
            {
              !this.state.error
                ? (
                  <button onClick={this.togglePurchasedStatus}>
                    <Checkmark />
                  </button>
                )
                : (
                  <Cross />
                )
            }
          </IsLoadingWrapper>
        </span>
      </div>
    );
  }
}

export default ShoppingItem;
