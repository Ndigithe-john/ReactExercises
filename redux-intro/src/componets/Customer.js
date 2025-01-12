import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store);
  console.log(customer);
  return <h2>👋 Welcome, name</h2>;
}

export default Customer;
