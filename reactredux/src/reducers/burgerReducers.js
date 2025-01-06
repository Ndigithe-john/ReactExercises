import { ORDER_BURGER } from "../constants/PizzaConstants";

const burgerInitialState = {
  burgerBase: 100,
};
export const burgerReducer = (state = burgerInitialState, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        ...state,
        burgerBase: state.burgerBase - action.payload,
      };
    default:
      return state;
  }
};
