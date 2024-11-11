import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizModal from '../components/QuizModal';
import questions from '../components/questions';
import Player from '../components/Player';
import Obstacle from '../components/Obstacle';
import './GameScreen.css';
import music from './gameSpringField.mp3';

function GameScreen({ score, setScore }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [previousQuestionIndex, setPreviousQuestionIndex] = useState(null);
  const [position, setPosition] = useState((window.innerWidth * 0.85) / 2);
  const [pause, setPause] = useState(false);
  const navigate = useNavigate();

  // Start the score timer when the game starts
  useEffect(() => {
    const timer = setInterval(() => {
      setScore((prevScore) => prevScore + 1); // Increment score every second
    }, 1000);

    return () => clearInterval(timer); // Clear timer on component unmount
  }, [setScore]);

  // Function to get a truly random question
  const getRandomQuestion = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (randomIndex === previousQuestionIndex); // Ensure it's different from the last question

    setPreviousQuestionIndex(randomIndex); // Update last shown question index
    return questions[randomIndex];
  };

  // Function to start the quiz on collision
  const startQuiz = () => {
    const randomQuestion = getRandomQuestion();
    setCurrentQuestion(randomQuestion);
    setShowQuiz(true); // Show the quiz modal with the new random question
    setPause(true); // Pause the game on quiz pop-up
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 20); // Add 20 points for a correct answer
      setShowQuiz(false); // Close the quiz modal after a correct answer
      setPause(false); // Resume the game after a correct answer
    } else {
      navigate('/LoseScreen'); // Navigate to lose screen on wrong answer
    }
  };

  return (
    <div className="gameBackground">
      <div className="score-display">Score: {score}</div>
      <audio src={music} autoPlay loop />
      
      {/* Obstacle with collision triggering startQuiz */}
      <Obstacle position={position} spriteSize={window.innerHeight * 0.15} handleCollision={startQuiz} pause={pause} setPause={setPause} />

      {/* Ground SVG */}
      <svg className="groundFlat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
        <rect width="1440" height="100" fill="#4CAF50"></rect>
      </svg>

      {/* Player Component */}
      <Player position={position} setPosition={setPosition} spriteSize={window.innerHeight * 0.15} pause={pause} setPause={setPause} />

      {/* Quiz Modal */}
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




