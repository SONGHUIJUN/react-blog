import {CHANGE_TAB} from "../actions/tabs-actions";

const initialState = {
    payload: "home"
};

const tabsReducer = function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB: {
      return {
        ...state,
        payload: action.payload
      };
    }
    default:
      return state;
  }
}

export default tabsReducer;
