import React from 'react';
import PropTypes from 'prop-types';

import Item from '../item/item';
import IsLoadingWrapper from '../is-loading-wrapper/is-loading-wrapper';

import './assortment.less';

const Assortment = ({
  isLoading,
  items,
  updateItem,
}) => (
  <IsLoadingWrapper isLoading={isLoading} large>
    <div className="assortment">
      {
      items.map(item => (
        <Item
          key={item.id}
          item={item}
          updateItem={updateItem}
        />
      ))
    }
    </div>
  </IsLoadingWrapper>
);

Assortment.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default Assortment;
