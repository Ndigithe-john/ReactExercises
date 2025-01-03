import {
  CUSTOMER_CREATECUSTOMER,
  CUSTOMER_UPDATENAME,
} from "../constants/customerConstants";

export const customerReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_CREATECUSTOMER:
      return {
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case CUSTOMER_UPDATENAME:
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
};
