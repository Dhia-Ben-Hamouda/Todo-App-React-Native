import { combineReducers } from "redux";
import profileReducer from "./reducers/profileReducer.js";

export const rootReducer = combineReducers({
  profile:profileReducer
})