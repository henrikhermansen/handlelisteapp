import React from 'react';
import PropTypes from 'prop-types';

import './shopping-item.less';

const ShoppingItem = ({ item }) => (
  <div className="shopping-item">
    <span>{item.name}</span>
    <span>{item.id}</span>
    <span>{item.id}</span>
  </div>
);

ShoppingItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ShoppingItem;
