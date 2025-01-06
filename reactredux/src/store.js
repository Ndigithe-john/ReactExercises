import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import { pizzaReducer } from "./reducers/pizzaReducers";
import { burgerReducer } from "./reducers/burgerReducers";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
