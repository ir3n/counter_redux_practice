import { combineReducers, createStore } from "redux";
import { operationReducer } from "./reducer";

const rootReducer = combineReducers({ operationReducer });
const store = createStore(rootReducer);
export default store;
