import { combineReducers } from "redux";

//Import actions
import {
  LOG_IN_SENT,
  LOG_IN_SUCCESS,
  LOG_IN_FAILED,
  ADD_BOULDER_ROUTE
} from "./actions";

const merge = (prev, next) => Object.assign({}, prev, next);

const boulderReducer = (state = [], action) => {
  if (action.type === ADD_BOULDER_ROUTE) {
    return [...state, action.payload];
  }
  return state;
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN_SENT:
      // return state when sent
      break;
    case LOG_IN_SUCCESS:
      // return state when success and token
      break;
    case LOG_IN_FAILED:
      //return state when failed and error message
      break;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  boulderList: boulderReducer
});

export default rootReducer;
