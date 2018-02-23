import { put, takeEvery, call } from 'redux-saga/effects';

import { getPurchasedItems, postPurchasedItem } from '../api/purchased-items';
import {
  FETCH_PURCHASED_ITEMS,
  POST_PURCHASED_ITEM,
  fetchPurchasedItemsFailed,
  fetchPurchasedItemsSuccess,
  postPurchasedItemFailed,
  postPurchasedItemSuccess,
} from '../actions/purchased-items';

const mapJsonDateToJSDate = items => items.map(item => ({
  ...item,
  purchased: new Date(item.purchased),
}));

function* fetchPurchasedItems() {
  try {
    const items = yield call(getPurchasedItems);
    yield put(fetchPurchasedItemsSuccess(mapJsonDateToJSDate(items)));
  } catch (e) {
    console.error(e);
    yield put(fetchPurchasedItemsFailed(e));
  }
}

export function* watchFetchPurchasedItems() {
  yield takeEvery(FETCH_PURCHASED_ITEMS, fetchPurchasedItems);
}

function* postPurchasedItemRequest(action) {
  try {
    const purchasedItem = yield call(postPurchasedItem, action.bagItemId);
    yield put(postPurchasedItemSuccess(purchasedItem));
  } catch (e) {
    console.error(e);
    yield put(postPurchasedItemFailed(e));
  }
}

export function* watchPostPurchasedItems() {
  yield takeEvery(POST_PURCHASED_ITEM, postPurchasedItemRequest);
}
