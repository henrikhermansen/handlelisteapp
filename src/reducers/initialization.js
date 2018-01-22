import { INITIALIZE_REQUEST, INITIALIZE_SUCCESS, INITIALIZE_ERROR } from '../actions/initialization';

const defaultState = {
  isInitialized: false,
  isInitializing: false,
  error: undefined,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZE_REQUEST:
      return { ...state, isInitializing: true };
    case INITIALIZE_SUCCESS:
      return { ...state, isInitializing: false, isInitialized: true };
    case INITIALIZE_ERROR:
      return {
        ...state, isInitializing: false, isInitialized: false, error: action.error,
      };
    default:
      return state;
  }
};
