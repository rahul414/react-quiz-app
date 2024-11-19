import { useQuiz } from "../contexts/QuizContext";

export default function Progress() {
  const { index, numOfQuestions, points, maxPossiblePoints, answer } =
    useQuiz();
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
