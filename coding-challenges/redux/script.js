const redux = require("redux");
const createStore = redux.createStore;

const ORDER_PIZZA = "ORDER_PIZZA";

//action
const action = {
  type: ORDER_PIZZA,
  shop_name: "Pizza shop",
};

//Action creator
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shop_name: "Pizza shop",
  };
}

//reducer

const initialState = {
  pizzaBase: 100,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    default:
      return state;
  }
};

//STORE
// 1. Store needs to hold application state

const store = createStore(reducer);
// 2. It exposes a method called getState which gives your application access to the current state in the store

console.log(store.getState());
