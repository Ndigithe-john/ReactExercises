import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import Loader from "./components/Loader";
import Error from "./assets/Error";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
import NextQuestion from "./components/NextQuestion";
import Progress from "./components/Progress";
const initialState = {
  questions: [],
  //"loading","error","ready","active","finished"
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    default:
      throw new Error("The action is unkown");
  }
}

function App() {
  const [{ status, questions, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "dataReceived", payload: data });
      })
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <MainComponent className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress numQuestions={numQuestions} i={index} />
            <Questions
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextQuestion dispatch={dispatch} answer={answer} />
          </>
        )}
      </MainComponent>
    </div>
  );
}

export default App;
