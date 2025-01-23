import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarReducer";
// Import other reducers if you have more than one

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export default rootReducer;
