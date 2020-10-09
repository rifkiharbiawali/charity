import { combineReducers } from "redux";
import postAdminReducer from "./dataPostAdmin";
import postEventReducer from "./dataPostEvent";

const AllRed = combineReducers({
  dataPostEvent: postEventReducer,
  postAdmin: postAdminReducer,
});

export default AllRed;
