import React from 'react';

import ShoppingBag from './shopping-bag';

import FirebaseData from '../../api/components/firebase-data';
import { BAG_ITEMS } from '../../api/firebase/refs';
import { mapFirebaseObjectToArray } from '../../api/firebase/database';

const todayDateString = new Date().toLocaleDateString();
const filterNonPurchasedOrPurchasedToday = bagItem =>
  !bagItem.purchased || new Date(bagItem.purchased).toLocaleDateString() === todayDateString;

const sortByDateAdded = (a, b) => a.added.localeCompare(b.added);

export default () => (
  <FirebaseData dbRef={BAG_ITEMS}>
    {
      data => (
        <ShoppingBag
          bagItems={
            mapFirebaseObjectToArray(data)
              .filter(filterNonPurchasedOrPurchasedToday)
              .sort(sortByDateAdded)
          }
        />
      )
    }
  </FirebaseData>
);
