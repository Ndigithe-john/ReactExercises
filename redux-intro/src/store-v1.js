import { createStore, combineReducers } from "redux";
import { customerAccountReducer } from "./reducers/accountsReducers";
import { customerReducer } from "./reducers/customerReducer";

const rootReducer = combineReducers({
  account: customerAccountReducer,
  customer: customerReducer,
});

const storeV1 = createStore(rootReducer);

export default storeV1;
