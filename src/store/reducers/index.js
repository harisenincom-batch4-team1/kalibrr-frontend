import { combineReducers } from "redux";
import { savedJobListReducer } from "./savedJobList";

const rootReducer = combineReducers({
  savedJobListReducer: savedJobListReducer,
});

export default rootReducer;
