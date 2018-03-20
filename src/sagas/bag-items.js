import { put, takeEvery, call } from 'redux-saga/effects';

import { getBagItems } from '../api/bag-items';
import {
  FETCH_BAG_ITEMS,
  fetchBagItemsFailed,
  fetchBagItemsSuccess,
} from '../actions/bag-items';
import { mapFirebaseObjectToArray } from './index';

function* fetchBagItemsRequest({ dispatch }) {
  try {
    const firebaseCallback = bagItems =>
      dispatch(fetchBagItemsSuccess(mapFirebaseObjectToArray(bagItems)));

    const bagItems = yield call(getBagItems, firebaseCallback);
    if (Array.isArray(bagItems)) {
      yield put(fetchBagItemsSuccess(bagItems));
    }
  } catch (e) {
    console.error(e);
    yield put(fetchBagItemsFailed(e));
  }
}

export default function* watchFetchBagItemsRequest() {
  yield takeEvery(FETCH_BAG_ITEMS, fetchBagItemsRequest);
}
