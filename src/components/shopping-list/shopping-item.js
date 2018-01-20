import React from 'react';
import PropTypes from 'prop-types';

const ShoppingItem = ({ children }) => <li>{children}</li>;

ShoppingItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShoppingItem;
