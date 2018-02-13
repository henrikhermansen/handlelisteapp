import { fork, all } from 'redux-saga/effects';

import initialization from './initialization';

export default function* root() {
  yield all([
    fork(initialization),
  ]);
}
