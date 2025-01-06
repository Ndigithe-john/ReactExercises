import { connect } from "react-redux";
import { orderBurger } from "../actions/burgerActions";

function BurgerBox(props) {
  console.log(props);
  return (
    <div className="container">
      <h2 className="text">
        Number of BurgerBuns Base available - {props.burgerBuns}
      </h2>
      <button className="btn" onClick={props.orderBurger}>
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
    orderBurger: () => dispatch(orderBurger()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox);
