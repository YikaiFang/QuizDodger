import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizModal from '../components/QuizModal';
import questions from '../components/questions';
import Player from '../components/Player';
import Obstacle from '../components/Obstacle';
import './GameScreen.css';

function GameScreen({ score, setScore }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [previousQuestionIndex, setPreviousQuestionIndex] = useState(null); // Track the last question index
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setScore((prevScore) => prevScore + 1); // Increment score every second
    }, 1000);

    return () => clearInterval(timer); // Clear timer on component unmount
  }, [setScore]);

  const getRandomQuestion = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (randomIndex === previousQuestionIndex); // Ensure it's different from the last question

    setPreviousQuestionIndex(randomIndex); // Update last shown question index
    return questions[randomIndex];
  };

  const startQuiz = () => {
    const randomQuestion = getRandomQuestion();
    setCurrentQuestion(randomQuestion);
    setShowQuiz(true); // Show the quiz modal with the new random question
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 20); // Add 20 points for a correct answer
      setShowQuiz(false); // Close the quiz modal after a correct answer
    } else {
      navigate('/LoseScreen'); // Navigate to lose screen on wrong answer
    }
  };

  return (
    <div>
      <div className="score-display">Score: {score}</div>
      <Obstacle />
      <h1>Welcome to the Play Screen!</h1>
      <Player />
      <button onClick={startQuiz}>Trigger Quiz</button>

      {showQuiz && currentQuestion && (
        <QuizModal
          question={currentQuestion.question}
          options={currentQuestion.options}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default GameScreen;




