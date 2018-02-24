import { fork, all, put, takeEvery, call } from 'redux-saga/effects';

import { getBagItems, putBagItem } from '../api/bag-items';
import {
  FETCH_BAG_ITEMS,
  UPDATE_BAG_ITEM,
  fetchBagItemsFailed,
  fetchBagItemsSuccess,
  updateBagItemFailed,
  updateBagItemSuccess,
} from '../actions/bag-items';

const mapJsonDateToJSDate = item => ({
  ...item,
  added: new Date(item.added),
  purchased: item.purchased && new Date(item.purchased),
});

function* fetchBagItemsRequest() {
  try {
    const items = yield call(getBagItems);
    yield put(fetchBagItemsSuccess(items.map(mapJsonDateToJSDate)));
  } catch (e) {
    console.error(e);
    yield put(fetchBagItemsFailed(e));
  }
}

function* watchFetchBagItemsRequest() {
  yield takeEvery(FETCH_BAG_ITEMS, fetchBagItemsRequest);
}

function* updateBagItemRequest(action) {
  try {
    const item = yield call(putBagItem, action.bagItem);
    yield put(updateBagItemSuccess(mapJsonDateToJSDate(item)));
  } catch (e) {
    console.error(e);
    yield put(updateBagItemFailed(e));
  }
}

function* watchUpdateBagItemRequest() {
  yield takeEvery(UPDATE_BAG_ITEM, updateBagItemRequest);
}

export default function* bagItemRoot() {
  yield all([
    fork(watchFetchBagItemsRequest),
    fork(watchUpdateBagItemRequest),
  ]);
}
