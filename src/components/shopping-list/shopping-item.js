import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Checkmark from '../svg/checkmark';

import './shopping-item.less';

const ShoppingItem = ({ item, updateBagItem }) => (
  <div
    className={classnames(
      'shopping-item',
      { 'shopping-item--purchased': item.purchased },
    )}
  >
    <span>
      {item.name}
    </span>
    <span>
      <button onClick={() => updateBagItem(item)}>
        <Checkmark />
      </button>
    </span>
  </div>
);

ShoppingItem.propTypes = {
  item: PropTypes.object.isRequired,
  updateBagItem: PropTypes.func.isRequired,
};

export default ShoppingItem;
