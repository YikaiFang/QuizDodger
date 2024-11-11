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
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/GameScreen" element={<GameScreen />} />
          <Route path="/LoseScreen" element={<LoseScreen />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;


