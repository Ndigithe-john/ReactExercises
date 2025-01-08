import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import productsReducer from "./reducers/productsReducer";

const store = createStore(
  productsReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
