import { combineReducers } from 'redux';

import initialization from './initialization';
import bagItems from './bag-items';

const rootReducer = combineReducers({
  initialization,
  bagItems,
});

export default rootReducer;
