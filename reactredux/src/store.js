import { createStore, combineReducers } from "redux";

import { pizzaReducer } from "./reducers/pizzaReducers";
import { burgerReducer } from "./reducers/burgerReducers";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
});

const store = createStore(rootReducer);

export default store;
