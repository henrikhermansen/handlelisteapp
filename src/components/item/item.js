import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pencil from '../svg/pencil';
import ItemInput from '../item-input/item-input';
import { putItem } from '../../api/items';

import './item.less';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    updateItem: PropTypes.func.isRequired,
  };

  state = { isEditing: false };

  onSubmit = name => putItem({ ...this.props.item, name });

  onSuccess = item =>
    this.setState({ isEditing: !this.state.isEditing }, () =>
      this.props.updateItem(item));

  render() {
    const { item } = this.props;
    const { isEditing } = this.state;

    if (isEditing) {
      return (
        <ItemInput
          value={item.name}
          onSubmit={this.onSubmit}
          onSuccess={this.onSuccess}
          SubmitSvg={Pencil}
        />
      );
    }

    return (
      <div className="item">
        <span>
          {item.name}
        </span>
        <span>
          <button onClick={() => this.setState({ isEditing: !isEditing })}>
            <Pencil fill={isEditing ? 'grass' : 'white'} />
          </button>
        </span>
      </div>
    );
  }
}

export default Item;
