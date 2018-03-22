import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Pencil } from '../svg';
import ItemInput from '../item-input/item-input';

import { set } from '../../api/firebase/database';
import { ITEMS } from '../../api/firebase/refs';

import './item.less';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  state = { isEditing: false };

  onSubmit = name => set(`${ITEMS}/${this.props.item.key}`, { ...this.props.item, name });

  onSuccess = () => this.setState({ isEditing: !this.state.isEditing });

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
