import React from 'react';
import PropTypes from 'prop-types';

import BagItem from '../bag-item/bag-item';
import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';

const findItemFromItemId = (items, itemId) => {
  const item = items.find(_item => _item.id === itemId);
  return item ? item.name : 'Navn mangler';
};

const ShoppingBag = ({
  isLoading,
  items,
  bagItems,
  updateBagItem,
}) => (
  <IsLoadingWrapper isLoading={isLoading} large>
    {
      bagItems.map(bagItem => (
        <BagItem
          key={bagItem.id}
          item={bagItem}
          itemName={findItemFromItemId(items, bagItem.itemId)}
          updateBagItem={updateBagItem}
        />
      ))
    }
  </IsLoadingWrapper>
);

ShoppingBag.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  bagItems: PropTypes.array.isRequired,
  updateBagItem: PropTypes.func.isRequired,
};

export default ShoppingBag;
