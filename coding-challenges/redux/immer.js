const redux = require("redux");
const reduxLogger = require("redux-logger");
const produce = require("immer").produce;
const createStore = redux.createStore;

const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const FILL_UPDATE = "FILL_UPDATE";

const initialState = {
  type: "veggie",
  ingredients: {
    bread: "Whole grain",
    filling: "lettuce and tomato",
    sauce: "Mustard",
  },
};

const updateFill = (filling) => {
  return {
    type: FILL_UPDATE,
    payload: filling,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_UPDATE:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          filling: action.payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger));
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(updateFill("Grilled Vegies and cheese"));

unsubscribe();
