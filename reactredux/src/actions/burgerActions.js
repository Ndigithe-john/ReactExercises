import { ORDER_BURGER } from "../constants/PizzaConstants";

export const orderBurger = (number) => {
  console.log(number);
  return {
    type: ORDER_BURGER,
    payload: number,
  };
};
