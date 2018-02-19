import { FETCH_PURCHASED_ITEMS, FETCH_PURCHASED_ITEMS_FAILED, FETCH_PURCHASED_ITEMS_SUCCESS } from '../actions/purchased-items';

const defaultState = {
  items: [],
  isLoading: false,
  isFetched: false,
  error: undefined,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PURCHASED_ITEMS:
      return { ...state, isLoading: true, error: undefined };
    case FETCH_PURCHASED_ITEMS_SUCCESS:
      return {
        ...state, items: action.items, isLoading: false, isFetched: true,
      };
    case FETCH_PURCHASED_ITEMS_FAILED:
      return {
        ...state, isLoading: false, isFetched: true, error: action.error,
      };
    default:
      return state;
  }
};
