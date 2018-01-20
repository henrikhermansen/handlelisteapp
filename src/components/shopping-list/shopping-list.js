import React from 'react';
import PropTypes from 'prop-types';

import ShoppingItem from './shopping-item';

const ShoppingList = ({ items }) => (
  <ul>
    {
      items.map(item => <ShoppingItem key={item}>{item}</ShoppingItem>)
    }
  </ul>
);

ShoppingList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ShoppingList;
