import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizModal from '../components/QuizModal';
import questions from '../components/questions';
import Player from '../components/Player';
import Obstacle from '../components/Obstacle';

function GameScreen() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [previousQuestionIndex, setPreviousQuestionIndex] = useState(null); // Track the last question index
  const navigate = useNavigate();

  // this should be ina player store
  const spriteSize = window.innerHeight * 15/100;
  const [position, setPosition] = useState((window.innerWidth - spriteSize) / 2);
  const [pause, setPause] = useState(false)



  // Function to get a truly random question
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
      console.log('Correct Answer!');
      setShowQuiz(false); // Close the quiz modal after a correct answer
      navigate('/GameScreen'); // Return to game screen on correct answer
      setPause(false)
    } else {
      console.log('Wrong Answer');
      navigate('/LoseScreen'); // Navigate to lose screen on wrong answer
    }
  };

  return (
    <div>
      <Obstacle position={position} spriteSize={spriteSize} handleCollision={startQuiz} pause={pause} setPause={setPause} />
      <h1>Welcome to the Play Screen!</h1>
      <p>Here is where the game starts.</p>
      <Player position={position} setPosition={setPosition} spriteSize={spriteSize} pause={pause} setPause={setPause}  />

      {/* Start Quiz Button */}
      {/* <button onClick={startQuiz}>Trigger Quiz</button> */}

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


