import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import github from "./github";
import auth from "./auth";

const rootReducer = combineReducers({
  github,
  auth,
  routing: routerReducer
});

export default rootReducer;
