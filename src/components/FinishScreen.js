import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, maxPossiblePoints } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {Math.round(percentage)})
    </p>
  );
}
