import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  function addCountHandler() {
    setCount((prevCount) => prevCount + step);
  }
  function subtractCountHandler() {
    setCount((prevCount) => prevCount - step);
  }
  function addStepCountHandler() {
    setStep((prevstep) => prevstep + 1);
  }
  function subStepCountHandler() {
    setStep((prestep) => prestep - 1);
  }
  return (
    <div>
      <div className="buttons">
        <button onClick={subStepCountHandler}>-</button>
        <h6>Step:{step}</h6>
        <button onClick={addStepCountHandler}>+</button>
      </div>
      <div className="buttons">
        <button onClick={subtractCountHandler}>-</button>
        <h6>Count:{count}</h6>
        <button onClick={addCountHandler}>+</button>
      </div>
      <p>Today is {Date().toLocaleLowerCase()}</p>
    </div>
  );
}

export default App;
