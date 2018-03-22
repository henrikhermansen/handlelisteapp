import React from 'react';
import PropTypes from 'prop-types';

import BagItem from '../../components/bag-item/bag-item';
import IsLoadingWrapper from '../../components/is-loading-wrapper/is-loading-wrapper';

import './shopping-bag.less';

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
    <div className="shopping-bag">
      {
      bagItems.map(bagItem => (
        <BagItem
          key={bagItem.id}
          bagItem={bagItem}
          itemName={findItemFromItemId(items, bagItem.itemId)}
          updateBagItem={updateBagItem}
        />
      ))
    }
    </div>
  </IsLoadingWrapper>
);

ShoppingBag.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  bagItems: PropTypes.array.isRequired,
  updateBagItem: PropTypes.func.isRequired,
};

export default ShoppingBag;
