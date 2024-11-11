import React from 'react';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import LoseScreen from './screens/LoseScreen';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/GameScreen" element={<GameScreen />} />
          <Route path="/LoseScreen" element={<LoseScreen />} /> {/* Fixed the closing tag */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;



