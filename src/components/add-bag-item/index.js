import React from 'react';

import AddBagItem from './add-bag-item';

import FirebaseData from '../../api/components/firebase-data';
import { ITEMS } from '../../api/firebase/refs';
import { mapFirebaseObjectToArray } from '../../api/firebase/database';

const sortByName = (a, b) => a.name.localeCompare(b.name);

export default () => (
  <FirebaseData ref={ITEMS}>
    {
      data => (
        <AddBagItem
          items={
            mapFirebaseObjectToArray(data)
              .sort(sortByName)
          }
        />
      )
    }
  </FirebaseData>
);
