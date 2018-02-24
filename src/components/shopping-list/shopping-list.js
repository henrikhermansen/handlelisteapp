import React from 'react';
import PropTypes from 'prop-types';

import ShoppingItem from './shopping-item';
import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';

const ShoppingList = ({ isLoading, items, updateBagItem }) => (
  <IsLoadingWrapper isLoading={isLoading} large>
    {
      items.map(item => (
        <ShoppingItem key={item.id} item={item} updateBagItem={updateBagItem} />
      ))
    }
  </IsLoadingWrapper>
);

ShoppingList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  updateBagItem: PropTypes.func.isRequired,
};

export default ShoppingList;
