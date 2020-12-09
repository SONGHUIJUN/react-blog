import {combineReducers} from "redux";
import tabReducer from "./tabs-reducer";
import loadingReducer from "./loading-reducer";

const reducerGroup = {
    tabs: tabReducer,
    loading: loadingReducer
};

const allReducer = combineReducers(reducerGroup);

export default allReducer;
