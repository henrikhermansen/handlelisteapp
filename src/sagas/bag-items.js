import { put, takeEvery, call } from 'redux-saga/effects';

import { getBagItems } from '../api/bag-items';
import {
  FETCH_BAG_ITEMS,
  fetchBagItemsFailed,
  fetchBagItemsSuccess,
} from '../actions/bag-items';

function* fetchBagItemsRequest() {
  try {
    const bagItems = yield call(getBagItems);
    yield put(fetchBagItemsSuccess(bagItems));
  } catch (e) {
    console.error(e);
    yield put(fetchBagItemsFailed(e));
  }
}

export default function* watchFetchBagItemsRequest() {
  yield takeEvery(FETCH_BAG_ITEMS, fetchBagItemsRequest);
}
