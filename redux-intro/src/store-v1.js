import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";

import { customerAccountReducer } from "./reducers/accountsReducers";
import { customerReducer } from "./reducers/customerReducer";

const rootReducer = combineReducers({
  account: customerAccountReducer,
  customer: customerReducer,
});

const storeV1 = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default storeV1;
