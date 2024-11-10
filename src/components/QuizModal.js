import React from 'react';
import Popup from 'reactjs-popup';

function QuizModal({ question, options, onAnswer }) {
  const handleAnswer = (selectedOption) => {
    onAnswer(selectedOption); // Pass the selected option back to parent component
  };

  return (
    <Popup open={true} closeOnDocumentClick={false} modal>
      <div>
        <h2>Quiz Question</h2>
        <p>{question}</p>
        <div>
          {options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </Popup>
  );
}

export default QuizModal;



