import { combineReducers } from "redux";
import { savedJobListReducer } from "./savedJobList";
import userSettingReducer from "./userSettingReducer";

const rootReducer = combineReducers({
  savedJobListReducer: savedJobListReducer,
  userSettingReducer: userSettingReducer
});

export default rootReducer;
