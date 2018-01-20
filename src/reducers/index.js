import { combineReducers } from 'redux';

import shoppingList from './shopping-list';

const rootReducer = combineReducers({
  shoppingList,
});

export default rootReducer;
