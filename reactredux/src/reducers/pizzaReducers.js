import { ORDER_PIZZA } from "../constants/PizzaConstants";

const initialState = {
  pizzaBase: 1000,
};

export const pizzaReducer = (state = initialState, action) => {
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
