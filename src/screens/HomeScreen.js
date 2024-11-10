// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToGameScreen = () => {
    navigate('/GameScreen');
  };

  return (
    <div className="HomeScreen">
      <h1>Welcome to Quiz Dodger!</h1>
      <div className="Button">
        <button onClick={goToGameScreen}>Play</button>
      </div>
    </div>
  );
};

export default Home;
