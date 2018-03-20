export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILED = 'FETCH_ITEMS_FAILED';

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

export const fetchItems = dispatch => ({ type: FETCH_ITEMS, dispatch });

export const fetchItemsSuccess = items => ({ type: FETCH_ITEMS_SUCCESS, items });

export const fetchItemsFailed = error => ({ type: FETCH_ITEMS_FAILED, error });

export const updateItem = item => ({ type: UPDATE_ITEM, item });

export const addItem = item => ({ type: ADD_ITEM, item });
