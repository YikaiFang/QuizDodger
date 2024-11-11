import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoseScreen = () => {
  const navigate = useNavigate();

  const goToHomeScreen = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>You LOST!</h1>
      <p>womp womp</p>
      <button onClick={goToHomeScreen} style={{ textAlign: 'center', marginTop: 'auto' }} className="HomeButton">
        Play Again
      </button>
    </div>
  );
};

export default LoseScreen;


