import { fork, all } from 'redux-saga/effects';

import initialization from './initialization';
import bagItems from './bag-items';
import items from './items';
import purchasedItems from './purchased-items';

export default function* root() {
  yield all([
    fork(initialization),
    fork(bagItems),
    fork(items),
    fork(purchasedItems),
  ]);
}
