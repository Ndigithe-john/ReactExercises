import { useReducer } from "react";
import "./index.css";

/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  depositAmount: "",
  withdrawAmount: "",
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;
  console.log(state);
  switch (action.type) {
    case "openAccount":
      return { ...state, balance: 500, isActive: true };
    case "depositAmount":
      return { ...state, depositAmount: action.payload };

    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        depositAmount: "",
      };
    case "withdrawAmount":
      return { ...state, withdrawAmount: action.payload };
    case "withdraw":
      if (state.withdrawAmount > state.balance) return state;
      return {
        ...state,
        balance: state.balance - action.payload,
        withdrawAmount: "",
      };

    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
      };

    case "payLoan":
      if (state.loan > state.balance) return state;
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    case "closeAccount":
      if (state.balance !== 0 || state.loan !== 0) return state;
      return initialState;

    default:
      throw new Error("Unknown Action");
  }
}

export default function App() {
  const [{ balance, loan, isActive, depositAmount, withdrawAmount }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <input
          type="text"
          value={depositAmount}
          onChange={(e) => {
            dispatch({ type: "depositAmount", payload: +e.target.value });
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "deposit", payload: depositAmount });
          }}
          disabled={!isActive}
        >
          Deposit
        </button>
      </p>
      <p>
        <input
          type="number"
          value={withdrawAmount}
          onChange={(e) =>
            dispatch({ type: "withdrawAmount", payload: e.target.value })
          }
        />
        <button
          onClick={() => {
            dispatch({ type: "withdraw", payload: withdrawAmount });
          }}
          disabled={!isActive}
        >
          Withdraw
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "requestLoan", payload: 5000 });
          }}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
