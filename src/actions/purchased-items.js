export const FETCH_PURCHASED_ITEMS = 'FETCH_PURCHASED_ITEMS';
export const FETCH_PURCHASED_ITEMS_SUCCESS = 'FETCH_PURCHASED_ITEMS_SUCCESS';
export const FETCH_PURCHASED_ITEMS_FAILED = 'FETCH_PURCHASED_ITEMS_FAILED';

export const POST_PURCHASED_ITEM = 'POST_PURCHASED_ITEM';
export const POST_PURCHASED_ITEM_SUCCESS = 'POST_PURCHASED_ITEM_SUCCESS';
export const POST_PURCHASED_ITEM_FAILED = 'POST_PURCHASED_ITEM_FAILED';

export const fetchPurchasedItems = () => ({ type: FETCH_PURCHASED_ITEMS });

export const fetchPurchasedItemsSuccess = items => ({ type: FETCH_PURCHASED_ITEMS_SUCCESS, items });

export const fetchPurchasedItemsFailed = error => ({ type: FETCH_PURCHASED_ITEMS_FAILED, error });

export const postPurchasedItem = bagItemId => ({ type: POST_PURCHASED_ITEM, bagItemId });

export const postPurchasedItemSuccess = purchasedItem => ({
  type: POST_PURCHASED_ITEM_SUCCESS,
  purchasedItem,
});

export const postPurchasedItemFailed = error => ({ type: POST_PURCHASED_ITEM_FAILED, error });
