import { useSelector, useDispatch } from "react-redux";

import { orderPizza } from "../actions/PizzaActions";

function PizzaBox() {
  const pizzaBase = useSelector((state) => state.pizza.pizzaBase);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="text">Number of pizza Base available - {pizzaBase}</h2>
      <button className="btn" onClick={() => dispatch(orderPizza())}>
        Order Pizza
      </button>
    </div>
  );
}

export default PizzaBox;

// import { connect } from "react-redux";

// import { orderPizza } from "../actions/PizzaActions";

// function PizzaBox(props) {
//   console.log(props);
//   return (
//     <div className="container">
//       <h2 className="text">
//         Number of pizza Base available - {props.pizzaBase}
//       </h2>
//       <button className="btn" onClick={props.orderPizza}>
//         Order Pizza
//       </button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     pizzaBase: state.pizzaBase,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     orderPizza: () => dispatch(orderPizza()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox);
