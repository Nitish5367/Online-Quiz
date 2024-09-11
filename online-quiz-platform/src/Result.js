import React from 'react';

const Result = ({ score, totalQuestions, userAnswers, questions }) => {
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {totalQuestions}</p>

      <h3>Answer Breakdown:</h3>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <strong>Q: {question.question}</strong><br />
            Correct Answer: {question.correct}<br />
            Your Answer: {userAnswers[index]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
