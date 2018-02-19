import { fork, all } from 'redux-saga/effects';

import initialization from './initialization';
import bagItems from './bag-items';

export default function* root() {
  yield all([
    fork(initialization),
    fork(bagItems),
  ]);
}
