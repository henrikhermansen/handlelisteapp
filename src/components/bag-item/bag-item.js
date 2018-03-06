import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Checkmark from '../svg/checkmark';
import Cross from '../svg/cross';
import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';
import { putBagItem } from '../../api/bag-items';

import './bag-item.less';

class BagItem extends Component {
  static propTypes = {
    bagItem: PropTypes.object.isRequired,
    itemName: PropTypes.string.isRequired,
    updateBagItem: PropTypes.func.isRequired,
  };

  state = {
    isLoading: false,
    error: undefined,
  };

  togglePurchasedStatus = () => {
    const { bagItem, updateBagItem } = this.props;
    this.setState({
      isLoading: true,
    }, () => putBagItem({
      ...bagItem,
      purchased: bagItem.purchased ? false : new Date().toJSON(),
    }).then(
      updatedBagItem => this.setState(
        { isLoading: false, error: undefined },
        () => updateBagItem(updatedBagItem),
      ),
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
