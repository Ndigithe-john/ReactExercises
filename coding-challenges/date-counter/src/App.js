import "./App.css";

function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}
function Counter() {
  return (
    <div>
      <div className="buttons">
        <button>+</button>
        <h6>Step:0</h6>
        <button>-</button>
      </div>
      <div className="buttons">
        <button>+</button>
        <h6>Count:0</h6>
        <button>-</button>
      </div>
      <p>try the app</p>
    </div>
  );
}

export default App;
