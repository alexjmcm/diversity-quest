import React from 'react';
import { useGame } from '../contexts/GameContext';
import { CheckCircle, Lock, Play } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ModuleCardProps {
  module: Module;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const { state, dispatch } = useGame();
  const isCompleted = state.completedModules.includes(module.id);
  const isLocked = module.id !== 'intro' && !state.completedModules.includes(modules[modules.findIndex(m => m.id === module.id) - 1]?.id || '');

  const handleModuleClick = () => {
    if (!isLocked) {
      dispatch({ type: 'SET_MODULE', payload: module.id });
    }
  };

  const modules = [
    { id: 'intro' },
    { id: 'intersectionality' },
    { id: 'bias' },
    { id: 'inclusive-design' }
  ];

  return (
    <div
      onClick={handleModuleClick}
      className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition-all duration-300 ${
        isLocked 
          ? 'opacity-50 cursor-not-allowed' 
          : 'cursor-pointer hover:scale-105 hover:bg-white/15'
      }`}
    >
      <div className="text-center">
        <div className="text-4xl mb-4">{module.icon}</div>
        <h3 className="text-xl font-semibold text-white mb-3">{module.title}</h3>
        <p className="text-gray-300 text-sm mb-6">{module.description}</p>
        
        <div className="flex items-center justify-center">
          {isCompleted ? (
            <div className="flex items-center text-green-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Completed</span>
            </div>
          ) : isLocked ? (
            <div className="flex items-center text-gray-400">
              <Lock className="h-5 w-5 mr-2" />
              <span className="font-medium">Locked</span>
            </div>
          ) : (
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:from-purple-700 hover:to-blue-700 flex items-center">
              <Play className="mr-2 h-4 w-4" />
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;