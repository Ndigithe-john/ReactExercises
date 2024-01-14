import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePreviousPress() {
    if (step > 1) {
      setStep((initialState) => initialState - 1);
    }
  }
  function nextPressHandler() {
    if (step < 3) {
      setStep((currentState) => currentState + 1);
    }
  }
  function closeModalHandler() {
    setIsOpen((currentState) => !currentState);
  }

  return (
    <>
      <button className="close" onClick={closeModalHandler}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}> 1 </div>
            <div className={step >= 2 ? "active" : ""}> 2 </div>
            <div className={step >= 3 ? "active" : ""}> 3 </div>
          </div>
          <p className="message">
            step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePreviousPress}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextPressHandler}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
