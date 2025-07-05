import React from 'react';
import { useGame } from '../contexts/GameContext';
import ModuleCard from './ModuleCard';
import ScenarioCard from './ScenarioCard';
import CompletionScreen from './CompletionScreen';

const modules = [
  {
    id: 'intro',
    title: 'Understanding GBA+',
    description: 'Learn the fundamentals of Gender-Based Analysis Plus',
    icon: '📚',
    scenarios: [
      {
        id: 'intro-1',
        title: 'What is GBA+?',
        question: 'You\'re in a team meeting discussing a new policy. A colleague asks what GBA+ means. How do you respond?',
        options: [
          { text: 'It\'s just about gender equality', points: 10, feedback: 'GBA+ is broader than just gender - it considers multiple identity factors.' },
          { text: 'It\'s an analytical tool that considers how diverse groups experience policies differently', points: 50, feedback: 'Excellent! GBA+ examines intersecting identity factors and their impacts.' },
          { text: 'It\'s a government requirement we have to follow', points: 20, feedback: 'While it may be required, understanding its purpose helps create better outcomes.' }
        ]
      }
    ]
  },
  {
    id: 'intersectionality',
    title: 'Intersectionality',
    description: 'Explore how multiple identities intersect and impact experiences',
    icon: '🔄',
    scenarios: [
      {
        id: 'intersect-1',
        title: 'Multiple Identities',
        question: 'You\'re designing a workplace wellness program. What factors should you consider?',
        options: [
          { text: 'Just focus on the most common needs', points: 10, feedback: 'This approach might exclude important perspectives.' },
          { text: 'Consider age, gender, culture, disability, family status, and other factors', points: 50, feedback: 'Perfect! Intersectional thinking creates more inclusive solutions.' },
          { text: 'Ask HR what the legal requirements are', points: 20, feedback: 'Legal compliance is important, but going beyond minimums creates better outcomes.' }
        ]
      }
    ]
  },
  {
    id: 'bias',
    title: 'Recognizing Bias',
    description: 'Identify and address unconscious bias in decision-making',
    icon: '🧠',
    scenarios: [
      {
        id: 'bias-1',
        title: 'Hiring Decisions',
        question: 'During resume screening, you notice you\'re drawn to candidates from similar backgrounds. What do you do?',
        options: [
          { text: 'Continue with your instincts - they\'re usually right', points: 10, feedback: 'Our instincts can be influenced by unconscious bias.' },
          { text: 'Implement structured criteria and diverse review panels', points: 50, feedback: 'Excellent! Structured processes help reduce bias and improve decisions.' },
          { text: 'Just pick randomly to be fair', points: 15, feedback: 'Random selection isn\'t the same as equitable selection.' }
        ]
      }
    ]
  },
  {
    id: 'inclusive-design',
    title: 'Inclusive Design',
    description: 'Create solutions that work for diverse users',
    icon: '🎨',
    scenarios: [
      {
        id: 'design-1',
        title: 'Product Development',
        question: 'Your team is developing a new app. How do you ensure it\'s accessible to all users?',
        options: [
          { text: 'Test with a diverse group of users throughout development', points: 50, feedback: 'Excellent! Inclusive design involves diverse perspectives from the start.' },
          { text: 'Add accessibility features at the end', points: 20, feedback: 'Accessibility works best when built in from the beginning.' },
          { text: 'Follow standard design practices', points: 15, feedback: 'Standard practices may not address all user needs.' }
        ]
      }
    ]
  }
];

const GameBoard: React.FC = () => {
  const { state } = useGame();

  if (state.completedModules.length >= 4) {
    return <CompletionScreen />;
  }

  const currentModule = modules.find(m => m.id === state.currentModule) || modules[0];
  const availableModules = modules.filter(m => 
    !state.completedModules.includes(m.id) || m.id === state.currentModule
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Your GBA+ Learning Journey
        </h2>
        <p className="text-gray-200">
          Navigate through interactive scenarios to master inclusive practices
        </p>
      </div>

      {state.currentModule === 'intro' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {availableModules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      ) : (
        <ScenarioCard module={currentModule} />
      )}
    </div>
  );
};

export default GameBoard;