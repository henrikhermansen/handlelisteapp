import { delay } from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';

import { getBagItems } from '../api/bag-items';
import { FETCH_BAG_ITEMS, fetchBagItemsFailed, fetchBagItemsSuccess } from '../actions/bag-items';

function* fetchBagItemsRequest() {
  try {
    yield delay(1000);
    const items = yield call(getBagItems);
    yield put(fetchBagItemsSuccess(items));
  } catch (e) {
    console.error(e);
    yield put(fetchBagItemsFailed(e));
  }
}

export default function* watchFetchBagItemsRequest() {
  yield takeEvery(FETCH_BAG_ITEMS, fetchBagItemsRequest);
}
