import {
  CUSTOMER_CREATECUSTOMER,
  CUSTOMER_UPDATENAME,
} from "../constants/customerConstants";

export const createCustomer = (fullName, nationalID) => {
  return {
    type: CUSTOMER_CREATECUSTOMER,
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
};

export const customerNameUpdate = () => {
  return { type: CUSTOMER_UPDATENAME, payload: "John ddd" };
};
