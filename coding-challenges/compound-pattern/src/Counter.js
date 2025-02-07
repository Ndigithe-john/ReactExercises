import { createContext, useContext, useState } from "react";

// Step 1: Create a context
const CounterContext = createContext();

// Step 2: Create a parent compoent
function Counter({ children }) {
  const [count, setCount] = useState(0);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// Step 3: Create child compoents to help implementing the common task

function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}
function Label({ children }) {
  return <span>{children}</span>;
}
function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}
function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);

  return <button onClick={decrease}>{icon}</button>;
}

//  Step 4: Add the child compoennts as properties to the parent component

Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
