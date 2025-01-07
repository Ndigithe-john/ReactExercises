import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

import { pizzaReducer } from "./reducers/pizzaReducers";
import { burgerReducer } from "./reducers/burgerReducers";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
