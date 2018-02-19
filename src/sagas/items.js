import { put, takeEvery, call } from 'redux-saga/effects';

import { getItems } from '../api/items';
import { FETCH_ITEMS, fetchItemsFailed, fetchItemsSuccess } from '../actions/items';

function* fetchItemsRequest() {
  try {
    const items = yield call(getItems);
    yield put(fetchItemsSuccess(items));
  } catch (e) {
    console.error(e);
    yield put(fetchItemsFailed(e));
  }
}

export default function* watchFetchItemsRequest() {
  yield takeEvery(FETCH_ITEMS, fetchItemsRequest);
}
