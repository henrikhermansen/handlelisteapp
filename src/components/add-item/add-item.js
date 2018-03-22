import React from 'react';
import PropTypes from 'prop-types';

import ItemInput from '../item-input';
import { Plus } from '../svg';

import { pushSet } from '../../api/firebase/database';
import { ITEMS } from '../../api/firebase/refs';

import './add-item.less';

const AddItem = ({ items }) => {
  const onSubmit = (name) => {
    const nameAlreadyExists = items.find(item => item.name === name);
    if (nameAlreadyExists) {
      return new Promise((resolve, reject) => reject(new Error('Varenavnet er allerede i sortimentet')));
    }
    return pushSet(ITEMS, { name });
  };

  return (
    <div className="add-item">
      <ItemInput
        onSubmit={onSubmit}
        SubmitSvg={Plus}
        placeholder="Legg til en vare i vareutvalget"
      />
    </div>
  );
};

AddItem.propTypes = {
  items: PropTypes.array.isRequired,
};

export default AddItem;
