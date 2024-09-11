import React, { useState, useEffect } from 'react';

const Quiz = ({ questions, onQuizEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30); // 30 seconds per question
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer === 0) {
      nextQuestion();
    }

    return () => clearInterval(countdown);
  }, [timer]);

  const answerClick = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correct) {
      setScore(score + 1);
    }

    setUserAnswers([...userAnswers, selectedAnswer]);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(30); // reset timer for next question
    } else {
      onQuizEnd(score, userAnswers);
    }
  };

  return (
    <div className="quiz">
      <h3>{currentQuestion.question}</h3>
      <ul>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index} onClick={() => answerClick(answer)}>
            {answer}
          </li>
        ))}
      </ul>
      <div className="timer">Time Left: {timer}s</div>
    </div>
  );
};

export default Quiz;
