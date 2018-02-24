import { combineReducers } from 'redux';

import initialization from './initialization';
import bagItems from './bag-items';
import items from './items';

const rootReducer = combineReducers({
  initialization,
  bagItems,
  items,
});

export default rootReducer;
