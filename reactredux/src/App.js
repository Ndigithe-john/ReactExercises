import "./App.css";
import BurgerBox from "./components/BurgerBox";
import CustomerChoice from "./components/CustomerChoice";
import PizzaBox from "./components/PizzaBox";

function App() {
  return (
    <>
      <PizzaBox />
      <BurgerBox />
      <CustomerChoice />
    </>
  );
}

export default App;
