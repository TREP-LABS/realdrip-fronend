import { combineReducers } from 'redux';

import createAdminReducer from './createAdminUser';

export default combineReducers({
  createAdmin: createAdminReducer,
});
