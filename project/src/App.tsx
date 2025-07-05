import React from 'react';
import GameProvider from './contexts/GameContext';
import GameContainer from './components/GameContainer';
import './index.css';

function App() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-indigo-900">
        <GameContainer />
      </div>
    </GameProvider>
  );
}

export default App;