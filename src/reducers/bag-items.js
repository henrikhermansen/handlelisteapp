import {
  FETCH_BAG_ITEMS, FETCH_BAG_ITEMS_FAILED, FETCH_BAG_ITEMS_SUCCESS,
  UPDATE_BAG_ITEM, ADD_BAG_ITEM,
} from '../actions/bag-items';

const defaultState = {
  bagItems: [],
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
        ...state, bagItems: action.bagItems, isLoading: false, isFetched: true,
      };
    case FETCH_BAG_ITEMS_FAILED:
      return {
        ...state, isLoading: false, isFetched: true, error: action.error,
      };
    case UPDATE_BAG_ITEM:
      return {
        ...state,
        bagItems: state.bagItems.map(bagItem =>
          (bagItem.id === action.bagItem.id ? action.bagItem : bagItem)),
      };
    case ADD_BAG_ITEM:
      return {
        ...state,
        bagItems: [...state.bagItems, action.bagItem],
      };
    default:
      return state;
  }
};
