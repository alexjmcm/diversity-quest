import React from 'react';
import { useGame } from '../contexts/GameContext';
import WelcomeScreen from './WelcomeScreen';
import CharacterSelection from './CharacterSelection';
import LessonMap from './LessonMap';
import LessonScreen from './LessonScreen';
import CompletionScreen from './CompletionScreen';

const GameContainer: React.FC = () => {
  const { state } = useGame();

  switch (state.currentStep) {
    case 'welcome':
      return <WelcomeScreen />;
    case 'character':
      return <CharacterSelection />;
    case 'lesson':
      if (state.currentLevel > 4) {
        return <CompletionScreen />;
      }
      // Show lesson screen when actively in a lesson, otherwise show lesson map
      return state.inLesson ? <LessonScreen /> : <LessonMap />;
    case 'completion':
      return <CompletionScreen />;
    default:
      return <WelcomeScreen />;
  }
};

export default GameContainer;