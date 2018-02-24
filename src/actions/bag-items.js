export const FETCH_BAG_ITEMS = 'FETCH_BAG_ITEMS';
export const FETCH_BAG_ITEMS_SUCCESS = 'FETCH_BAG_ITEMS_SUCCESS';
export const FETCH_BAG_ITEMS_FAILED = 'FETCH_BAG_ITEMS_FAILED';

export const UPDATE_BAG_ITEM = 'UPDATE_BAG_ITEM';
export const UPDATE_BAG_ITEM_SUCCESS = 'UPDATE_BAG_ITEM_SUCCESS';
export const UPDATE_BAG_ITEM_FAILED = 'UPDATE_BAG_ITEM_FAILED';

export const fetchBagItems = () => ({ type: FETCH_BAG_ITEMS });

export const fetchBagItemsSuccess = items => ({ type: FETCH_BAG_ITEMS_SUCCESS, items });

export const fetchBagItemsFailed = error => ({ type: FETCH_BAG_ITEMS_FAILED, error });

export const updateBagItem = bagItem => ({ type: UPDATE_BAG_ITEM, bagItem });

export const updateBagItemSuccess = bagItem => ({ type: UPDATE_BAG_ITEM_SUCCESS, bagItem });

export const updateBagItemFailed = error => ({ type: UPDATE_BAG_ITEM_FAILED, error });
