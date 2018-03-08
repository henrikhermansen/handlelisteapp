import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Pencil from '../svg/pencil';
import Cross from '../svg/cross';
import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';
import Input from '../input/input';
import { putItem } from '../../api/items';

import './item.less';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    updateItem: PropTypes.func.isRequired,
  };

  state = {
    isLoading: false,
    isEditing: false,
    error: undefined,
  };

  notYetImplemented = () => {
    putItem();
    this.props.updateItem();
  };

  render() {
    const { item } = this.props;
    const { isEditing } = this.state;
    return (
      <div
        className={classnames(
          'item',
          { 'item--someModifier': item.someProp },
        )}
      >
        <span>
          {
            isEditing
              ? (
                <Input
                  value={item.name}
                  onChange={() => {}}
                  focusOnMount
                />
              )
              : item.name
          }
        </span>
        <span>
          <IsLoadingWrapper isLoading={this.state.isLoading} inline>
            <button onClick={() => this.setState({ isEditing: !isEditing })}>
              {
                !this.state.error
                  ? <Pencil fill={isEditing ? 'grass' : 'white'} />
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
