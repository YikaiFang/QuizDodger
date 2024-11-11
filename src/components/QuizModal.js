import React from 'react';
import Popup from 'reactjs-popup';
import './QuizModal.css';

function QuizModal({ question, options, onAnswer }) {
  const handleAnswer = (selectedOption) => {
    onAnswer(selectedOption); // Pass the selected option back to parent component
  };

  const labels = ['A', 'B', 'C', 'D']; // Labels for options

  return (
    <Popup open={true} closeOnDocumentClick={false} modal>
      <div className="quiz-modal-container">
        <h2>Quiz Question</h2>
        <p>{question}</p>
        <div>
          {options.map((option, index) => (
            <div
              key={index}
              className="option-button"
              onClick={() => handleAnswer(option)}
            >
              <span className="option-label">{labels[index]}</span>
              {option}
            </div>
          ))}
        </div>
      </div>
    </Popup>
  );
}

export default QuizModal;




