import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import AllRed from "../reducer";

const store = createStore(AllRed, applyMiddleware(thunk));

export default store;
