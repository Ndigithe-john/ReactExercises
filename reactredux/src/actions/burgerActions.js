import { ORDER_BURGER } from "../constants/PizzaConstants";

export const orderBurger = () => {
  return {
    type: ORDER_BURGER,
    payload: 2,
  };
};
