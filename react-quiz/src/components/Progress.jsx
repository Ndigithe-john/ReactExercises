function Progress({ i, numQuestions, points }) {
  return (
    <header className="progress">
      <p>
        Questions <strong>{i + 1}</strong>/ {numQuestions}
      </p>
      <p>
        {" "}
        <strong>{points}</strong> / <strong>X</strong>
      </p>
    </header>
  );
}

export default Progress;
