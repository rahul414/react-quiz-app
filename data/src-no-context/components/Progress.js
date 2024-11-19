export default function Progress({
  index,
  numOfQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  console.log(index + Number(answer !== null));
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints} points
      </p>
    </header>
  );
}
