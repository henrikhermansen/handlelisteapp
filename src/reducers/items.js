import {
  FETCH_ITEMS,
  FETCH_ITEMS_FAILED,
  FETCH_ITEMS_SUCCESS,
  UPDATE_ITEM,
  ADD_ITEM,
} from '../actions/items';

const defaultState = {
  items: [],
  isLoading: false,
  isFetched: false,
  error: undefined,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, isLoading: true, error: undefined };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state, items: action.items, isLoading: false, isFetched: true,
      };
    case FETCH_ITEMS_FAILED:
      return {
        ...state, isLoading: false, isFetched: true, error: action.error,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item => (item.id === action.item.id ? action.item : item)),
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    default:
      return state;
  }
};
