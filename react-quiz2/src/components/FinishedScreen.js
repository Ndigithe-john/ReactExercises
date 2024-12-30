import { useQuiz } from "../contexts/QuizContext";

function FinishedScreen() {
  const { maxPoints, points, highscore, dispatch } = useQuiz();

  const percentageScore = (points / maxPoints) * 100;

  let emoji;
  if (percentageScore === 100) emoji = "🎖️🥇";
  if (percentageScore >= 80 && percentageScore < 100) emoji = "🎉🎉";
  if (percentageScore >= 50 && percentageScore < 80) emoji = "👏👏";
  if (percentageScore >= 0 && percentageScore < 50) emoji = "🙁☹️";
  if (percentageScore === 0) emoji = "🤣🤣";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentageScore)}%)
      </p>
      <p className="highscore">(highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishedScreen;
