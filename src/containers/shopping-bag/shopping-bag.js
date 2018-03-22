import React from 'react';
import PropTypes from 'prop-types';

import BagItem from '../../components/bag-item';

import './shopping-bag.less';

const ShoppingBag = ({ bagItems }) => (
  <div className="shopping-bag">
    {
    bagItems.map(bagItem => (
      <BagItem
        key={bagItem.key}
        bagItem={bagItem}
      />
    ))
  }
  </div>
);

ShoppingBag.propTypes = {
  bagItems: PropTypes.array.isRequired,
};

export default ShoppingBag;
