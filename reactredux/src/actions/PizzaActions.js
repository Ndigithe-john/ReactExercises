import { ORDER_PIZZA } from "../constants/PizzaConstants";

export const orderPizza = () => {
  return {
    type: ORDER_PIZZA,
    payload: 1,
  };
};
