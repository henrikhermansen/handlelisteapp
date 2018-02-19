export const FETCH_BAG_ITEMS = 'FETCH_BAG_ITEMS';
export const FETCH_BAG_ITEMS_SUCCESS = 'FETCH_BAG_ITEMS_SUCCESS';
export const FETCH_BAG_ITEMS_FAILED = 'FETCH_BAG_ITEMS_FAILED';

export const fetchBagItems = () => ({ type: FETCH_BAG_ITEMS });

export const fetchBagItemsSuccess = items => ({ type: FETCH_BAG_ITEMS_SUCCESS, items });

export const fetchBagItemsFailed = error => ({ type: FETCH_BAG_ITEMS_FAILED, error });
