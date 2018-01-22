import { fork } from 'redux-saga/effects';

import initialization from './initialization';

export default function* root() {
  yield [
    fork(initialization),
  ];
}
