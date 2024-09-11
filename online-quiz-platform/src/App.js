import React, { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import './App.css';

const App = () => {
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const questions = [
    {
      question: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Berlin', 'Madrid'],
      correct: 'Paris'
    },
    {
      question: 'Who wrote "Macbeth"?',
      answers: ['Shakespeare', 'Tolkien', 'Austen', 'Hemingway'],
      correct: 'Shakespeare'
    },
    {
      question: 'Who developed the theory of relativity?',
      answers: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
      correct: 'Albert Einstein'
    },
    {
      question: 'What is the capital city of Japan?',
      answers: ['Beijing', 'Seoul', 'Bangkok', 'Tokyo'],
      correct: 'Tokyo'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      answers: ['Earth', 'Jupiter', 'Mars', 'Venus'],
      correct: 'Mars'
    },
    {
      question: 'What is the chemical symbol for water?',
      answers: ['H2O', 'O2', 'CO2', 'NaCl'],
      correct: 'H2O'
    },
    {
      question: 'What is the largest mammal in the world?',
      answers: ['Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear'],
      correct: 'Blue Whale'
    },
    {
      question: 'Which language is the most spoken worldwide?',
      answers: ['Spanish', 'English', 'Mandarin Chinese', 'Hindi'],
      correct: 'Mandarin Chinese'
    },
    {
      question: 'Which element has the atomic number 1?',
      answers: ['Oxygen', 'Hydrogen', 'Carbon', 'Nitrogen'],
      correct: 'Hydrogen'
    },
    {
      question: 'Which is the smallest country in the world by land area?',
      answers: ['Monaco', 'Vatican City', 'Malta', 'Luxembourg'],
      correct: 'Vatican City'
    }
  ];

  const handleQuizEnd = (finalScore, answers) => {
    setScore(finalScore);
    setUserAnswers(answers);
    setQuizFinished(true);
  };

  return (
    <div className="App">
      <h1>Online Quiz Platform</h1>
      {quizFinished ? (
        <Result score={score} totalQuestions={questions.length} userAnswers={userAnswers} questions={questions}/>
      ) : (
        <Quiz questions={questions} onQuizEnd={handleQuizEnd} />
      )}
    </div>
  );
};

export default App;
