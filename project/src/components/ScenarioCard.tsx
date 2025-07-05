import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  question: string;
  options: {
    text: string;
    points: number;
    feedback: string;
  }[];
}

interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  scenarios: Scenario[];
}

interface ScenarioCardProps {
  module: Module;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ module }) => {
  const { state, dispatch } = useGame();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

  const currentScenario = module.scenarios[currentScenarioIndex];

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setShowFeedback(true);
    
    const points = currentScenario.options[optionIndex].points;
    dispatch({ type: 'ADD_SCORE', payload: points });

    if (points >= 40) {
      dispatch({ type: 'EARN_BADGE', payload: `${module.title} Expert` });
    }
  };

  const handleNext = () => {
    if (currentScenarioIndex < module.scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      dispatch({ type: 'COMPLETE_MODULE', payload: module.id });
      dispatch({ type: 'SET_MODULE', payload: 'intro' });
    }
  };

  const handleBackToModules = () => {
    dispatch({ type: 'SET_MODULE', payload: 'intro' });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={handleBackToModules}
        className="flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Modules
      </button>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">{module.icon}</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{module.title}</h2>
          <h3 className="text-xl text-red-300 mb-4">{currentScenario.title}</h3>
          <div className="text-sm text-gray-300">
            Scenario {currentScenarioIndex + 1} of {module.scenarios.length}
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-6 mb-8">
          <p className="text-lg text-white leading-relaxed">{currentScenario.question}</p>
        </div>

        <div className="space-y-4 mb-8">
          {currentScenario.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showFeedback && handleOptionSelect(index)}
              disabled={showFeedback}
              className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                selectedOption === index
                  ? option.points >= 40
                    ? 'bg-green-500/20 border-green-400 text-green-100'
                    : option.points >= 30
                    ? 'bg-yellow-500/20 border-yellow-400 text-yellow-100'
                    : 'bg-red-500/20 border-red-400 text-red-100'
                  : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
              } border-2`}
            >
              <div className="flex items-center justify-between">
                <span>{option.text}</span>
                {selectedOption === index && showFeedback && (
                  <CheckCircle className="h-5 w-5 flex-shrink-0 ml-2" />
                )}
              </div>
            </button>
          ))}
        </div>

        {showFeedback && selectedOption !== null && (
          <div className="bg-white/10 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-white mb-2">Feedback</h4>
            <p className="text-gray-200 mb-4">{currentScenario.options[selectedOption].feedback}</p>
            <div className="flex items-center justify-between">
              <div className="text-red-300">
                +{currentScenario.options[selectedOption].points} points
              </div>
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
              >
                {currentScenarioIndex < module.scenarios.length - 1 ? 'Next Scenario' : 'Complete Module'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScenarioCard;