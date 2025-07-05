import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Trophy, Star } from 'lucide-react';

const ProgressBar: React.FC = () => {
  const { state } = useGame();
  const totalSteps = 8;
  const progress = (state.completedModules.length / totalSteps) * 100;

  return (
    <div className="bg-white/10 backdrop-blur-md border-b border-white/20 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-3xl">{state.selectedCharacter?.avatar}</div>
            <div>
              <h3 className="text-white font-semibold">{state.userName}</h3>
              <p className="text-gray-300 text-sm">{state.selectedCharacter?.name}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-semibold">{state.score}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-purple-400" />
              <span className="text-white font-semibold">{state.badges.length}</span>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-white/20 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-300 mt-2">
          <span>Progress: {state.completedModules.length}/{totalSteps} modules</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;