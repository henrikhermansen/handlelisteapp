import { put, takeEvery, call } from 'redux-saga/effects';

import { getPurchasedItems } from '../api/purchased-items';
import { FETCH_PURCHASED_ITEMS, fetchPurchasedItemsFailed, fetchPurchasedItemsSuccess } from '../actions/purchased-items';

function* fetchPurchasedItemsRequest() {
  try {
    const items = yield call(getPurchasedItems);
    yield put(fetchPurchasedItemsSuccess(items));
  } catch (e) {
    console.error(e);
    yield put(fetchPurchasedItemsFailed(e));
  }
}

export default function* watchFetchPurchasedItemsRequest() {
  yield takeEvery(FETCH_PURCHASED_ITEMS, fetchPurchasedItemsRequest);
}
