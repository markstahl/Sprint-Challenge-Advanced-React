import React from 'react';
import './App.css';
import PlayerStats from './components/PlayerStats';
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  return (
    <div data-testid="player-card" className="App">
      <DarkModeToggle />
      <PlayerStats />
    </div>
  );
}

export default App;
