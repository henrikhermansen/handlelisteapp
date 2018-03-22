import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';
import { Checkmark, Cross } from '../svg';

import { set } from '../../api/firebase/database';
import { BAG_ITEMS } from '../../api/firebase/refs';

import './bag-item.less';

class BagItem extends Component {
  static propTypes = {
    bagItem: PropTypes.object.isRequired,
    itemName: PropTypes.string.isRequired,
  };

  state = {
    isLoading: false,
    error: undefined,
  };

  togglePurchasedStatus = () => {
    const { bagItem } = this.props;
    this.setState({
      isLoading: true,
    }, () => set(`${BAG_ITEMS}/${bagItem.key}`, {
      ...bagItem,
      purchased: bagItem.purchased ? false : new Date().toJSON(),
    }).then(
      () => this.setState({ isLoading: false, error: undefined }),
      error => this.setState({ isLoading: false, error }),
    ));
  };

  render() {
    const { bagItem, itemName } = this.props;
    return (
      <div
        className={classnames(
          'bag-item',
          { 'bag-item--purchased': bagItem.purchased },
        )}
      >
        <span>
          {itemName}
        </span>
        <span>
          <IsLoadingWrapper isLoading={this.state.isLoading} inline>
            <button onClick={this.togglePurchasedStatus}>
              {
                !this.state.error
                  ? <Checkmark fill={bagItem.purchased ? 'quick-silver' : 'white'} />
                  : <Cross fill="dark-red" />
              }
            </button>
          </IsLoadingWrapper>
        </span>
      </div>
    );
  }
}

export default BagItem;
