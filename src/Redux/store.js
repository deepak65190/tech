import thunk from "redux-thunk";
import reducer from "./reducer";

import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
const rootReducer = combineReducers({ reducer });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
