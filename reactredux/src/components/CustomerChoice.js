import { useState } from "react";
import { connect } from "react-redux";
import { orderBurger } from "../actions/burgerActions";

function CustomerChoice(props) {
  const [customerNumber, setCustomerNumber] = useState(1);
  return (
    <div className="container">
      <h2 className="text">
        Number of BurgerBuns Base available - {props.burgerBuns}
      </h2>
      <input
        type="number"
        className="input-field"
        placeholder="Enter your number"
        value={customerNumber}
        onChange={(e) => setCustomerNumber(+e.target.value)}
      />
      <button className="btn" onClick={() => props.orderBurger(customerNumber)}>
        Order Burner
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    burgerBuns: state.burger.burgerBase,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    orderBurger: (number) => dispatch(orderBurger(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerChoice);
