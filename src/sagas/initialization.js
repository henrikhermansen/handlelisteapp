import { put, takeEvery } from 'redux-saga/effects';

import { INITIALIZE_REQUEST, initializeError, initializeSuccess } from '../actions/initialization';
import { fetchBagItems } from '../actions/bag-items';
import { fetchItems } from '../actions/items';

function* initializationRequest({ dispatch }) {
  try {
    yield put(fetchBagItems(dispatch));
    yield put(fetchItems(dispatch));
    yield put(initializeSuccess());
  } catch (e) {
    yield put(initializeError(e));
  }
}

export default function* watchInitilizationRequest() {
  yield takeEvery(INITIALIZE_REQUEST, initializationRequest);
}
