import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}
function Steps() {
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
    <div>
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
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          {/* <p className="message">
            step {step}: {messages[step - 1]}
          </p> */}
          <div className="buttons">
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePreviousPress}
            >
              Previous
            </button> */}
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handlePreviousPress}
            >
              <span>👈</span>Previous
            </Button>
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={nextPressHandler}
            >
              Next <span>👉</span>
            </Button>
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextPressHandler}
            >
              Next
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
function StepMessage({ step, children }) {
  return (
    <>
      <div className="message">
        <h3>step {step}</h3>
        {children}
      </div>
      ;
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
