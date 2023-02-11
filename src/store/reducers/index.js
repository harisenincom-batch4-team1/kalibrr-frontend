import { combineReducers } from "redux";
import { savedJobListReducer } from "./savedJobList";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  savedJobListReducer: savedJobListReducer,
  user: userReducer,
});

export default rootReducer;
