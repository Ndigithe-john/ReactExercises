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

  const date = new Date();
  date.setDate(date.getDate() + count);
  function addCountHandler() {
    setCount((prevCount) => prevCount + step);
  }
  function subtractCountHandler() {
    setCount((prevCount) => prevCount - step);
  }
  // function addStepCountHandler() {
  //   setStep((prevstep) => prevstep + 1);
  // }
  // function subStepCountHandler() {
  //   setStep((prestep) => prestep - 1);
  // }
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <div>
      <div className="buttons">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
        {/* 
        <button onClick={subStepCountHandler}>-</button>
        <h6>Step:{step}</h6>
        <button onClick={addStepCountHandler}>+</button> */}
      </div>
      <div className="buttons">
        <button onClick={subtractCountHandler}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {/* <h6>Count:{count}</h6> */}
        <button onClick={addCountHandler}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
