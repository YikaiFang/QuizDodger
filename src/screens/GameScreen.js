// GameScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Player from '../components/Player';
import Obstacle from '../components/Obstacle';



const GameScreen = () => {
  const navigate = useNavigate();

  const goToLoseScreen = () => {
    navigate('/LoseScreen');
  };

  return (
    <div>
      <Obstacle/> {Obstacle()}
      <h1>Welcome to the Play Screen!</h1>
      <p>Here is where the game starts.</p>
      <button onClick={goToLoseScreen} style={{textAlign: 'center', marginTop: 'auto'}} className="LoseButton">Lose</button>
      <Player/> {Player()};
    </div>
  );
};

export default GameScreen;
