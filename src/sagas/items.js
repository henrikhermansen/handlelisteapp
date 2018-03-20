import { put, takeEvery, call } from 'redux-saga/effects';

import { getItems } from '../api/items';
import { FETCH_ITEMS, fetchItemsFailed, fetchItemsSuccess } from '../actions/items';
import { mapFirebaseObjectToArray } from './index';

function* fetchItemsRequest({ dispatch }) {
  try {
    const firebaseCallback = items =>
      dispatch(fetchItemsSuccess(mapFirebaseObjectToArray(items)));

    const items = yield call(getItems, firebaseCallback);
    if (Array.isArray(items)) {
      yield put(fetchItemsSuccess(items));
    }
  } catch (e) {
    console.error(e);
    yield put(fetchItemsFailed(e));
  }
}

export default function* watchFetchItemsRequest() {
  yield takeEvery(FETCH_ITEMS, fetchItemsRequest);
}
