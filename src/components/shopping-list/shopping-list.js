import React from 'react';
import PropTypes from 'prop-types';

import ShoppingItem from './shopping-item';
import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';

const ShoppingList = ({ isLoading, items }) => (
  <IsLoadingWrapper isLoading={isLoading}>
    <div>
      {
        items.map(item => <ShoppingItem key={item.id} item={item} />)
      }
    </div>
  </IsLoadingWrapper>
);

ShoppingList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
};

export default ShoppingList;
