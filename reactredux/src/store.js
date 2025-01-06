import { createStore } from "redux";

import { pizzaReducer } from "./reducers/pizzaReducers";

const store = createStore(pizzaReducer);

export default store;
