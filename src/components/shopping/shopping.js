import React, { Fragment } from 'react';

import ShoppingBag from '../shopping-bag';
import AddBagItem from '../add-bag-item';

export default () => (
  <Fragment>
    <AddBagItem />
    <ShoppingBag />
  </Fragment>
);
