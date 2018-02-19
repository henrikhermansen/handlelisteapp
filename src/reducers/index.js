import { combineReducers } from 'redux';

import initialization from './initialization';
import bagItems from './bag-items';
import items from './items';
import purchasedItems from './purchased-items';

const rootReducer = combineReducers({
  initialization,
  bagItems,
  items,
  purchasedItems,
});

export default rootReducer;
