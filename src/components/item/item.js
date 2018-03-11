import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Pencil } from '../svg';
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

    const Wrapper = ({ children }) => (
      <div className="item">
        {children}
      </div>
    );

    if (isEditing) {
      return (
        <Wrapper>
          <ItemInput
            value={item.name}
            onSubmit={this.onSubmit}
            onSuccess={this.onSuccess}
            SubmitSvg={Pencil}
            placeholder="Angi et navn for denne varen"
          />
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <span>
          {item.name}
        </span>
        <span>
          <button onClick={() => this.setState({ isEditing: !isEditing })}>
            <Pencil fill={isEditing ? 'grass' : 'white'} />
          </button>
        </span>
      </Wrapper>
    );
  }
}

export default Item;
