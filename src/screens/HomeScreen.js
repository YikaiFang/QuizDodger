// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToGameScreen = () => {
    navigate('/GameScreen');
  };

  return (
    <div>
      <h1>Welcome to the Home Screen!</h1>
      <button onClick={goToGameScreen}>Go to Game Screen</button>
    </div>
  );
};

export default Home;
