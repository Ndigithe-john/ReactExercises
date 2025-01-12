import {
  ACCOUNT_DEPOSIT,
  ACCOUNT_REQUEST_LOAN,
  ACCOUNT_WITHDRAW,
  ACCOUNT_PAYLOAN,
} from "../constants/accountsConstants";

export const customerAccountReducer = (
  state = { balance: 0, loan: 0 },
  action
) => {
  switch (action.type) {
    case ACCOUNT_DEPOSIT:
      return { ...state, balance: action.payload };
    case ACCOUNT_REQUEST_LOAN:
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };
    case ACCOUNT_WITHDRAW:
      return { ...state, balance: state.balance - action.payload };
    case ACCOUNT_PAYLOAN:
      return { ...state, loan: 0, balance: state.balance - state.loan };
    default:
      return state;
  }
};
