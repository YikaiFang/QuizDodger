// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeScreen.css';
import rightCapy from './rightCapy.png';

const Home = () => {
  const navigate = useNavigate();

  const goToGameScreen = () => {
    navigate('/GameScreen');
  };

  return (
    <div className="HomeScreen">
      <h1 className="Welcome">Welcome to Quiz Dodger!</h1>
      <div>
        <button onClick={goToGameScreen} style={{textAlign: 'center', marginTop: 'auto'}} className="PlayButton">Play</button>
      </div>
      <svg className="ground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#4CAF50" d="M0,288L80,282.7C160,277,320,267,480,261.3C640,256,800,256,960,245.3C1120,235,1280,213,1360,202.7L1440,192V320H0Z"></path>
      </svg>
        <img src={rightCapy} alt="rightCapy" className="backgroundCapy"/>
    </div>
  );
};

export default Home;
