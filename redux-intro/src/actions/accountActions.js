import {
  ACCOUNT_DEPOSIT,
  ACCOUNT_PAYLOAN,
  ACCOUNT_WITHDRAW,
  ACCOUNT_REQUEST_LOAN,
} from "../constants/accountsConstants";

export const accountDeposit = (amount) => {
  return { type: ACCOUNT_DEPOSIT, payload: amount };
};

export const accountWithdraw = (amount) => {
  return { type: ACCOUNT_WITHDRAW, payload: amount };
};

export const accoutLoanRequest = (amount, reason) => {
  return {
    type: ACCOUNT_REQUEST_LOAN,
    payload: { amount, reason },
  };
};

export const payLoan = () => {
  return { type: ACCOUNT_PAYLOAN };
};
