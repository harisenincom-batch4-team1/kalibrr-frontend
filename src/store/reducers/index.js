import { combineReducers } from "redux";
import { savedJobListReducer } from "./savedJobList";
import userReducer from "./userReducer";
import userSettingReducer from "./userSettingReducer";

const rootReducer = combineReducers({
  savedJobListReducer: savedJobListReducer,
  user: userReducer,
  userSettingReducer: userSettingReducer
});

export default rootReducer;
