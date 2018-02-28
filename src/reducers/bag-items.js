import {
  FETCH_BAG_ITEMS, FETCH_BAG_ITEMS_FAILED, FETCH_BAG_ITEMS_SUCCESS,
  UPDATE_BAG_ITEM, ADD_BAG_ITEM,
} from '../actions/bag-items';

const defaultState = {
  items: [],
  isLoading: false,
  isFetched: false,
  error: undefined,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_BAG_ITEMS:
      return { ...state, isLoading: true, error: undefined };
    case FETCH_BAG_ITEMS_SUCCESS:
      return {
        ...state, items: action.items, isLoading: false, isFetched: true,
      };
    case FETCH_BAG_ITEMS_FAILED:
      return {
        ...state, isLoading: false, isFetched: true, error: action.error,
      };
    case UPDATE_BAG_ITEM:
      return {
        ...state,
        items: state.items.map(item => (item.id === action.item.id ? action.item : item)),
      };
    case ADD_BAG_ITEM:
      return {
        ...state,
        items: [...state.items, action.bagItem],
      };
    default:
      return state;
  }
};
