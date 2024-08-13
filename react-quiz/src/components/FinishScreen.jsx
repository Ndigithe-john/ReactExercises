function FinishScreen({ points, maxPoints, highscore }) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "👏";
  if (percentage >= 50 && percentage < 80) emoji = "😴";
  if (percentage >= 30 && percentage < 50) emoji = "😂";
  if (percentage === 0) emoji = "😤";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> Your score is <strong>{points}</strong> out of{" "}
        {maxPoints} which is {Math.floor(percentage)}%
      </p>
      <p className="highscore">{`Highscore: ${highscore} points`}</p>
    </>
  );
}

export default FinishScreen;
