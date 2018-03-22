import React from 'react';

import Assortment from './assortment';

import FirebaseData from '../../api/components/firebase-data';
import { ITEMS } from '../../api/firebase/refs';
import { mapFirebaseObjectToArray } from '../../api/firebase/database';

const sortByName = (a, b) => a.name.localeCompare(b.name);

export default () => (
  <FirebaseData ref={ITEMS}>
    {
      data => (
        <Assortment
          items={
            mapFirebaseObjectToArray(data)
              .sort(sortByName)
          }
        />
      )
    }
  </FirebaseData>
);
