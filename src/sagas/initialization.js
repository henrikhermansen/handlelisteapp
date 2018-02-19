import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import { INITIALIZE_REQUEST, initializeError, initializeSuccess } from '../actions/initialization';
import { fetchBagItems } from '../actions/bag-items';
import { fetchItems } from '../actions/items';
import { fetchPurchasedItems } from '../actions/purchased-items';

function* initializationRequest() {
  try {
    yield delay(2000);
    yield put(fetchBagItems());
    yield put(fetchItems());
    yield put(fetchPurchasedItems());
    yield put(initializeSuccess());
  } catch (e) {
    yield put(initializeError(e));
  }
}

export default function* watchInitilizationRequest() {
  yield takeEvery(INITIALIZE_REQUEST, initializationRequest);
}
