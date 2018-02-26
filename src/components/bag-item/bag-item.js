import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Checkmark from '../svg/checkmark';
import Cross from '../svg/cross';

import './bag-item.less';
import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';
import { putBagItem } from '../../api/bag-items';

class BagItem extends Component {
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
      newItem => this.setState(
        { isLoading: false, error: undefined },
        () => updateBagItem(newItem),
      ),
      error => this.setState({ isLoading: false, error }),
    ));
  };

  render() {
    const { item, itemName } = this.props;
    return (
      <div
        className={classnames(
          'bag-item',
          { 'bag-item--purchased': item.purchased },
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
                  ? <Checkmark fill={item.purchased ? 'grass' : 'white'} />
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
