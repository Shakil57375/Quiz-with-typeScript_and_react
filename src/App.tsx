// import QuestionCard from "./Components/QuestionCard";
import { fetchQuizQuestions } from "./Api";
import { Difficulty } from "./Api";
import { useState } from "react";
const ToTal_Questions = 10;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNnumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  console.log(fetchQuizQuestions(ToTal_Questions, Difficulty.EASY))
  const startTrivia = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>TypeScript Quiz</h1>
      <button className="start">Start</button>
      <div className="score">Score:</div>
      <p>Loading Questions ...</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={ToTal_Questions}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      ></QuestionCard> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
