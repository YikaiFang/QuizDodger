import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoseScreen.css';
import deadCapy from './deadCapy.png';

const LoseScreen = ({ score }) => {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
  }, []);

  const goToHomeScreen = () => {
    navigate('/');
  };

  return (
    <div className="LoseScreen">
      <div className={`fade-background ${isFading ? 'active' : ''}`}></div>
      <div className="LoseScreenContent">
        <h2 className="Score">Final Score: {score}</h2>
        <h1 className="Lost">You LOST!</h1>
        <p className="Womp">womp womp</p>
        <button onClick={goToHomeScreen} className="HomeButton">Play Again</button>
      </div>
      <img src={deadCapy} alt="deadCapy" className="deadCapy" />
    </div>
  );
};

export default LoseScreen;


