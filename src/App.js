import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import LoseScreen from './screens/LoseScreen';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [score, setScore] = useState(0);

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen resetScore={resetScore} />} />
          <Route path="/GameScreen" element={<GameScreen score={score} setScore={setScore} />} />
          <Route path="/LoseScreen" element={<LoseScreen score={score} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




