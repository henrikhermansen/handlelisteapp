import { delay } from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';

import { INITIALIZE_REQUEST, initializeError, initializeSuccess } from '../actions/initialization';
import { getBagItems } from '../api/bag-items';

function* initializationRequest() {
  try {
    yield delay(2000);
    const bagItems = yield call(getBagItems);
    yield put({ type: 'NOT_YET_IMPLEMENTED', bagItems });
    yield put(initializeSuccess());
  } catch (e) {
    console.error('error', e);
    yield put(initializeError(e));
  }
}

export default function* watchInitilizationRequest() {
  yield takeEvery(INITIALIZE_REQUEST, initializationRequest);
}
