// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import LoseScreen from './screens/LoseScreen';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Player from './components/Player';

function App() {
  // Initialize with 'home' to test the HomeScreen first
  {/*const [screen, setScreen] = useState('game'); // Change to 'game' or 'lose' to test other screens*/}

  return (
    <div className="App">
      
      {/* Temporary buttons to switch screens manually */}
      {/*<div style={{ marginBottom: '20px' }}>
        <button onClick={() => setScreen('home')}>Home Screen</button>
        <button onClick={() => setScreen('game')}>Game Screen</button>
        <button onClick={() => setScreen('lose')}>Lose Screen</button>
      </div>*/}

      {/* Render the correct screen based on the screen state */}
      {/*{screen === 'home' && <HomeScreen />}
      {screen === 'game' && <GameScreen />}
      {screen === 'lose' && <LoseScreen />}*/}

      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/GameScreen" element={<GameScreen />} />
          {/* You can add more routes here for other pages */}
        </Routes>
        <Player /> {Player(600, 600)}
      </Router>
    </div>
  );
}

export default App;

