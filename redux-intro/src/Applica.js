import CreateCustomer from "./componets/CreateCustomer";
import Customer from "./componets/Customer";
import AccountOperations from "./componets/AccountOperations";
import BalanceDisplay from "./componets/BalanceDisplay";

import { useSelector } from "react-redux";

function Applica() {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default Applica;
