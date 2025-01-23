import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarReducer";
import authReducer from "./authReducer";
// Import other reducers if you have more than one

const rootReducer = combineReducers({
  auth:authReducer,
  sidebar: sidebarReducer,
});

export default rootReducer;
