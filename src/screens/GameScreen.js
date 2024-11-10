// GameScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';



const GameScreen = () => {
  const navigate = useNavigate();

  const goToLoseScreen = () => {
    navigate('/LoseScreen');
  };

  return (
    <div>
      <h1>Welcome to the Play Screen!</h1>
      <p>Here is where the game starts.</p>
      <button onClick={goToLoseScreen} style={{textAlign: 'center', marginTop: 'auto'}} className="LoseButton">Lose</button>
    </div>
  );
};

export default GameScreen;
