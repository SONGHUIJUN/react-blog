import { createStore } from "redux";
import allReducer from "./reducers/index";
let store = createStore(allReducer);
export default store;
