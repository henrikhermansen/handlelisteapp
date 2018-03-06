import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Checkmark from '../svg/checkmark';
import Cross from '../svg/cross';
import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';
import { putItem } from '../../api/items';

import './item.less';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    updateItem: PropTypes.func.isRequired,
  };

  state = {
    isLoading: false,
    error: undefined,
  };

  notYetImplemented = () => {
    putItem();
    this.props.updateItem();
  };

  render() {
    const { item } = this.props;
    return (
      <div
        className={classnames(
          'item',
          { 'item--someModifier': item.someProp },
        )}
      >
        <span>
          {item.name}
        </span>
        <span>
          <IsLoadingWrapper isLoading={this.state.isLoading} inline>
            <button onClick={() => {}}>
              {
                !this.state.error
                  ? <Checkmark fill={item.someProp ? 'quick-silver' : 'white'} />
                  : <Cross fill="dark-red" />
              }
            </button>
          </IsLoadingWrapper>
        </span>
      </div>
    );
  }
}

export default Item;
