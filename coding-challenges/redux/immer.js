const redux = require("redux");
const reduxLogger = require("redux-logger");
const produce = require("immer").produce;
const createStore = redux.createStore;

const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const FILL_UPDATE = "FILL_UPDATE";
const SAUCE_UPDATE = "SAUCE_UPDATE";

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
const updateSauce = (sauce) => {
  return {
    type: SAUCE_UPDATE,
    payload: sauce,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_UPDATE:
      //   return {
      //     ...state,
      //     ingredients: {
      //       ...state.ingredients,
      //       filling: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.ingredients.filling = action.payload;
      });
    case SAUCE_UPDATE:
      return produce(state, (draft) => {
        draft.ingredients.sauce = action.payload;
      });
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
store.dispatch(updateSauce("chilli"));

unsubscribe();
