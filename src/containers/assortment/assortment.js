import React, { Fragment } from 'react';
import { array } from 'prop-types';

import Item from '../../components/item';
import AddItem from '../../components/add-item';

import './assortment.less';

const Assortment = ({ items }) => (
  <Fragment>
    <AddItem
      items={items}
    />
    <div className="assortment">
      {
      items.map(item => (
        <Item
          key={item.key}
          item={item}
        />
      ))
    }
    </div>
  </Fragment>
);

Assortment.propTypes = {
  items: array.isRequired,
};

export default Assortment;
