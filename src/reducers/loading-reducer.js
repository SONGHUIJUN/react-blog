import {CHANGE_LOADING} from "../actions/loading-actions";

const initialState = {
  payload: false
};

const loadingReducer = function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOADING: {
      return {
        ...state,
        payload: action.payload
      };
    }
    default:
      return state;
  }
}

export default loadingReducer;
