const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const ORDER_PIZZA = "ORDER_PIZZA";
const ORDER_BURGER = "ORDER_BURGER";

//action
const action = {
  type: ORDER_PIZZA,
  shop_name: "Pizza shop",
};

//Action creator
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    payload: 1,
  };
}

function orderBugger() {
  return { type: ORDER_BURGER, payload: 1 };
}

//reducer

const initialStateForPizza = {
  pizzaBase: 100,
};

const initialStateForBurger = {
  burgerBuns: 200,
};

const reducerPizza = (state = initialStateForPizza, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - action.payload,
      };

    default:
      return state;
  }
};

const reducerBurger = (state = initialStateForBurger, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        ...state,
        burgerBuns: state.burgerBuns - action.payload,
      };
    case ORDER_PIZZA:
      return {
        ...state,
        burgerBuns: state.burgerBuns - action.payload,
      };
    default:
      return state;
  }
};

//STORE
// 1. Store needs to hold application state

const rootReducer = combineReducers({
  pizza: reducerPizza,
  burger: reducerBurger,
});

const store = createStore(rootReducer, applyMiddleware(logger));
// 2. It exposes a method called getState which gives your application access to the current state in the store

console.log("Initial state", store.getState());

// 3 Register Listners via subscribe (listner)

const unsubscribe = store.subscribe(() => {});

// 4 It allows to update the state via dispatch(action)
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBugger());

// 5 Handles unregistering of listners via the function returned by subscribe(listner)
unsubscribe();
console.log("Unsubscribed");
store.dispatch(orderPizza());
store.dispatch(orderBugger());
console.log(store.getState());
