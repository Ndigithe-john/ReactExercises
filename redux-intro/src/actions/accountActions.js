import {
  ACCOUNT_DEPOSIT,
  ACCOUNT_PAYLOAN,
  ACCOUNT_WITHDRAW,
  ACCOUNT_REQUEST_LOAN,
} from "../constants/accountsConstants";

export const accountDeposit = (amount) => {
  return { type: ACCOUNT_DEPOSIT, payload: amount };
};

export const accountWithdraw = () => {
  return { type: ACCOUNT_WITHDRAW, payload: 200 };
};

export const accoutLoanRequest = () => {
  return {
    type: ACCOUNT_REQUEST_LOAN,
    payload: { amount: 500, reason: "Buy a car" },
  };
};

export const payLoan = () => {
  return { type: ACCOUNT_PAYLOAN };
};
