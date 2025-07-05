import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Character {
  id: string;
  name: string;
  avatar: string;
  description: string;
}

export interface Decision {
  id: string;
  choice: string;
  points: number;
  feedback: string;
  isInclusive: boolean;
}

export interface GameState {
  currentStep: 'welcome' | 'character' | 'lesson' | 'completion';
  selectedCharacter: Character | null;
  userName: string;
  userAvatar: string;
  currentLevel: number;
  currentQuestion: number;
  decisions: Decision[];
  totalScore: number;
  inclusiveChoices: number;
  streak: number;
  hearts: number;
  xp: number;
  completedLevels: number[];
  showFeedback: boolean;
  selectedAnswer: number | null;
  inLesson: boolean; // Add this to track if we're actively in a lesson
}

type GameAction = 
  | { type: 'SET_USER_INFO'; payload: { userName: string; userAvatar: string } }
  | { type: 'SELECT_CHARACTER'; payload: Character }
  | { type: 'START_LESSON'; payload: number }
  | { type: 'SELECT_ANSWER'; payload: number }
  | { type: 'SHOW_FEEDBACK' }
  | { type: 'NEXT_QUESTION' }
  | { type: 'COMPLETE_LEVEL' }
  | { type: 'COMPLETE_TRAINING' }
  | { type: 'RESTART_GAME' }
  | { type: 'ADD_DECISION'; payload: Decision };

const initialState: GameState = {
  currentStep: 'welcome',
  selectedCharacter: null,
  userName: '',
  userAvatar: '',
  currentLevel: 1,
  currentQuestion: 0,
  decisions: [],
  totalScore: 0,
  inclusiveChoices: 0,
  streak: 0,
  hearts: 5,
  xp: 0,
  completedLevels: [],
  showFeedback: false,
  selectedAnswer: null,
  inLesson: false
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        userName: action.payload.userName,
        userAvatar: action.payload.userAvatar,
        currentStep: 'character'
      };
    case 'SELECT_CHARACTER':
      return {
        ...state,
        selectedCharacter: action.payload,
        currentStep: 'lesson'
      };
    case 'START_LESSON':
      return {
        ...state,
        currentLevel: action.payload,
        currentQuestion: 0,
        showFeedback: false,
        selectedAnswer: null,
        inLesson: true // Mark that we're now in a lesson
      };
    case 'SELECT_ANSWER':
      return {
        ...state,
        selectedAnswer: action.payload
      };
    case 'ADD_DECISION':
      return {
        ...state,
        decisions: [...state.decisions, action.payload],
        totalScore: state.totalScore + action.payload.points,
        inclusiveChoices: state.inclusiveChoices + (action.payload.isInclusive ? 1 : 0),
        xp: state.xp + action.payload.points
      };
    case 'SHOW_FEEDBACK':
      return {
        ...state,
        showFeedback: true
      };
    case 'NEXT_QUESTION':
      const isLastQuestion = state.currentQuestion >= 2; // 3 questions per level
      if (isLastQuestion) {
        return {
          ...state,
          completedLevels: [...state.completedLevels, state.currentLevel],
          currentLevel: state.currentLevel + 1,
          currentQuestion: 0,
          showFeedback: false,
          selectedAnswer: null,
          inLesson: false // Return to lesson map after completing level
        };
      }
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        showFeedback: false,
        selectedAnswer: null
      };
    case 'COMPLETE_LEVEL':
      return {
        ...state,
        completedLevels: [...state.completedLevels, state.currentLevel],
        streak: state.streak + 1
      };
    case 'COMPLETE_TRAINING':
      return {
        ...state,
        currentStep: 'completion'
      };
    case 'RESTART_GAME':
      return initialState;
    default:
      return state;
  }
};

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | null>(null);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;