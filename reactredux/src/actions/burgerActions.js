import { ORDER_BURGER } from "../constants/PizzaConstants";

export const orderBurger = (number = 1) => {
  return {
    type: ORDER_BURGER,
    payload: number,
  };
};
