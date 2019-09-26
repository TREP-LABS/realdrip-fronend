import { combineReducers } from "redux";

import createAdminReducer from "./createAdminUser";
import signAdminReducer from "./signinAdminUser";

export default combineReducers({
  createAdmin: createAdminReducer,
  loginAdmin: signAdminReducer
});
