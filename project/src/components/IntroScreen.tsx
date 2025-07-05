import React from 'react';
import { useGame } from '../contexts/GameContext';
import { ArrowRight, Briefcase, Users, Lightbulb } from 'lucide-react';

const IntroScreen: React.FC = () => {
  const { state, dispatch } = useGame();

  const handleStartScenario = () => {
    dispatch({ type: 'START_LESSON', payload: state.currentLevel });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-white via-red-100 to-red-500/20 relative overflow-hidden">
      {/* Canadian maple leaf background */}
      <div className="absolute top-8 left-8 text-7xl opacity-20 animate-bounce-slow">🍁</div>
      <div className="absolute bottom-8 right-8 text-8xl opacity-10 animate-spin-slow">🍁</div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-red-200/70">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{state.selectedCharacter?.avatar || '🍁'}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
              The Canadian Team Project Dilemma
            </h1>
            <p className="text-lg text-red-700 max-w-2xl mx-auto">
              You're aboot to embark on a new Canadian team project. Your decisions will shape the team dynamics and project outcomes, eh!
            </p>
          </div>

          <div className="bg-red-100/60 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
              <Briefcase className="h-6 w-6 mr-3 text-red-500" />
              Scenario Setup
            </h2>
            <p className="text-red-700 leading-relaxed mb-4">
              Your organization has just launched a new initiative to develop a customer service improvement strategy in Canada. 
              You've been assigned to a diverse, cross-cultural team of six people from different provinces, backgrounds, and experience levels.
            </p>
            <p className="text-red-700 leading-relaxed">
              As the project unfolds, you'll encounter situations that require you to apply Canadian multiculturalism and inclusive practices. Your choices will show how embracing diversity leads to better outcomes for everyone, eh!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/60 rounded-xl p-6 border border-red-200/60">
              <Users className="h-8 w-8 text-red-400 mx-auto mb-3" />
              <h3 className="text-red-900 font-semibold mb-2 text-center">Team Formation</h3>
              <p className="text-red-700 text-sm text-center">How will you ensure every Canadian voice is heard?</p>
            </div>
            <div className="bg-white/60 rounded-xl p-6 border border-red-200/60">
              <Lightbulb className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-red-900 font-semibold mb-2 text-center">Problem-Solving</h3>
              <p className="text-red-700 text-sm text-center">Navigate conflicts with true Canadian kindness</p>
            </div>
            <div className="bg-white/60 rounded-xl p-6 border border-red-200/60">
              <Briefcase className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="text-red-900 font-semibold mb-2 text-center">Recognition</h3>
              <p className="text-red-700 text-sm text-center">Celebrate contributions from coast to coast to coast</p>
            </div>
          </div>

          <div className="bg-red-200/40 border border-red-400/30 rounded-xl p-6 mb-8">
            <h3 className="text-red-700 font-semibold mb-2">What is Canadian Multiculturalism?</h3>
            <p className="text-red-900 text-sm">
              The Canadian Multiculturalism Act celebrates the diversity of Canadians, recognizing the contributions of Indigenous Peoples and all cultures. In Canada, we believe diversity is our strength, eh!
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={handleStartScenario}
              className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto shadow-lg"
            >
              Start the Canadian Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;