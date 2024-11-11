import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoseScreen.css';
import deadCapy from './deadCapyO.png';
import music from './loseTimeForgotten.mp3';

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
      <audio src={music} autoPlay loop />
      {/* Fade background div */}
      <div className={`fade-background ${isFading ? 'active' : ''}`}>

      </div>
      {/* LoseScreen Content */}
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


