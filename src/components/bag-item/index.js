import React from 'react';
import { object } from 'prop-types';

import BagItem from './bag-item';

import FirebaseData from '../../api/components/firebase-data';
import { ITEMS } from '../../api/firebase/refs';

const RenderedComponent = ({ bagItem }) => (
  <FirebaseData dbRef={`${ITEMS}/${bagItem.itemKey}`}>
    {
      item => (
        <BagItem
          bagItem={bagItem}
          itemName={item.name}
        />
      )
    }
  </FirebaseData>
);

RenderedComponent.propTypes = {
  bagItem: object.isRequired,
};

export default RenderedComponent;
