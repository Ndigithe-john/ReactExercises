import {
  ACCOUNT_DEPOSIT,
  ACCOUNT_PAYLOAN,
  ACCOUNT_WITHDRAW,
  ACCOUNT_REQUEST_LOAN,
  ACCOUNT_CURRENCY_CONVERT,
} from "../constants/accountsConstants";

export const accountDeposit = (amount, currency) => {
  if (currency === "USD") return { type: ACCOUNT_DEPOSIT, payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: ACCOUNT_CURRENCY_CONVERT });
    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`
    );
    const data = await res.json();
    const convertedAmount = +(data.rates.USD * amount).toFixed(2);

    dispatch({ type: ACCOUNT_DEPOSIT, payload: convertedAmount });
  };
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
