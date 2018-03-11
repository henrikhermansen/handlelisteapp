import React from 'react';
import PropTypes from 'prop-types';

import ItemInput from '../item-input/item-input';
import { Plus } from '../svg';
import { postItem } from '../../api/items';

import './add-item.less';

const AddItem = ({ addItem, items }) => {
  const onSubmit = (name) => {
    const nameAlreadyExists = items.find(item => item.name === name);
    if (nameAlreadyExists) {
      return new Promise((resolve, reject) => reject(new Error('Varenavnet er allerede i sortimentet')));
    }
    return postItem({ name });
  };

  const onSuccess = item => addItem(item);

  return (
    <div className="add-item">
      <ItemInput
        onSubmit={onSubmit}
        onSuccess={onSuccess}
        SubmitSvg={Plus}
        placeholder="Legg til en vare i vareutvalget"
      />
    </div>
  );
};

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default AddItem;
