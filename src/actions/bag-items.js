export const FETCH_BAG_ITEMS = 'FETCH_BAG_ITEMS';
export const FETCH_BAG_ITEMS_SUCCESS = 'FETCH_BAG_ITEMS_SUCCESS';
export const FETCH_BAG_ITEMS_FAILED = 'FETCH_BAG_ITEMS_FAILED';

export const UPDATE_BAG_ITEM = 'UPDATE_BAG_ITEM';
export const ADD_BAG_ITEM = 'ADD_BAG_ITEM';

export const fetchBagItems = dispatch => ({ type: FETCH_BAG_ITEMS, dispatch });

export const fetchBagItemsSuccess = bagItems => ({ type: FETCH_BAG_ITEMS_SUCCESS, bagItems });

export const fetchBagItemsFailed = error => ({ type: FETCH_BAG_ITEMS_FAILED, error });

export const updateBagItem = bagItem => ({ type: UPDATE_BAG_ITEM, bagItem });

export const addBagItem = bagItem => ({ type: ADD_BAG_ITEM, bagItem });