import {
  CUSTOMER_CREATECUSTOMER,
  CUSTOMER_UPDATENAME,
} from "../constants/customerConstants";

export const createCustomer = () => {
  return {
    type: CUSTOMER_CREATECUSTOMER,
    payload: {
      fullName: "John Doe",
      nationalID: "111111",
      createdAt: new Date().toISOString(),
    },
  };
};

export const customerNameUpdate = () => {
  return { type: CUSTOMER_UPDATENAME, payload: "John ddd" };
};
