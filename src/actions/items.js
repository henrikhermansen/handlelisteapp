export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILED = 'FETCH_ITEMS_FAILED';

export const fetchItems = () => ({ type: FETCH_ITEMS });

export const fetchItemsSuccess = items => ({ type: FETCH_ITEMS_SUCCESS, items });

export const fetchItemsFailed = error => ({ type: FETCH_ITEMS_FAILED, error });
