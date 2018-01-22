import { combineReducers } from 'redux';

import initialization from './initialization';
import shoppingList from './shopping-list';

const rootReducer = combineReducers({
  initialization,
  shoppingList,
});

export default rootReducer;
