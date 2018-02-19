export const FETCH_PURCHASED_ITEMS = 'FETCH_PURCHASED_ITEMS';
export const FETCH_PURCHASED_ITEMS_SUCCESS = 'FETCH_PURCHASED_ITEMS_SUCCESS';
export const FETCH_PURCHASED_ITEMS_FAILED = 'FETCH_PURCHASED_ITEMS_FAILED';

export const fetchPurchasedItems = () => ({ type: FETCH_PURCHASED_ITEMS });

export const fetchPurchasedItemsSuccess = items => ({ type: FETCH_PURCHASED_ITEMS_SUCCESS, items });

export const fetchPurchasedItemsFailed = error => ({ type: FETCH_PURCHASED_ITEMS_FAILED, error });
