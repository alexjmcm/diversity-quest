import React from 'react';
import { useGame, Character } from '../contexts/GameContext';
import { ArrowRight, User } from 'lucide-react';

// Canadian-inspired characters
const characters: Character[] = [
  {
    id: 'yourself',
    name: 'The True North Hero',
    avatar: '🍁',
    description: 'Embark as yourself – a proud Canadian embracing diversity, eh!'
  },
  {
    id: 'indigenous-guardian',
    name: 'The Indigenous Guardian',
    avatar: '🪶',
    description: 'Honouring the wisdom of First Nations, Inuit, and Métis Peoples.'
  },
  {
    id: 'multicultural-champion',
    name: 'The Multicultural Champion',
    avatar: '🌎',
    description: 'Celebrating Canada’s mosaic – every culture, every story, every voice.'
  }
];

const CharacterSelection: React.FC = () => {
  const { state, dispatch } = useGame();

  const selectCharacter = (character: Character) => {
    const finalCharacter = character.id === 'yourself' 
      ? { ...character, avatar: state.userAvatar || '🍁', name: state.userName || 'The True North Hero' }
      : character;
    
    dispatch({ type: 'SELECT_CHARACTER', payload: finalCharacter });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-white via-red-100 to-red-500/20">
      {/* Canadian Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        {/* Maple leaf graphics */}
        <div className="absolute top-8 left-8 text-6xl opacity-30 animate-bounce-slow">🍁</div>
        <div className="absolute bottom-8 right-8 text-7xl opacity-20 animate-spin-slow">🍁</div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-red-200/70">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-white rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse border-4 border-white shadow-lg">
              <span className="text-4xl">🍁</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-2">
              Canadian Diversity Quest
            </h2>
            <p className="text-red-800 font-semibold">
              Choose your Canadian path, eh!
            </p>
          </div>

          <div className="space-y-4">
            {characters.map((character) => (
              <button
                key={character.id}
                onClick={() => selectCharacter(character)}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden ${
                  character.id === 'yourself' 
                    ? 'border-red-400 bg-gradient-to-r from-red-100/60 to-white/80 shadow-lg shadow-red-500/10' 
                    : 'border-red-200 bg-white/60 hover:border-red-400 hover:bg-red-100/60'
                }`}
              >
                {character.id === 'yourself' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/10 to-transparent transform -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>
                )}
                
                <div className="flex items-center relative z-10">
                  <div className="text-5xl mr-6">
                    {character.id === 'yourself' ? (state.userAvatar || '🍁') : character.avatar}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center mb-2">
                      {character.id === 'yourself' && <User className="h-5 w-5 mr-2 text-red-500" />}
                      <h3 className="font-bold text-red-900 text-xl">
                        {character.id === 'yourself' ? (state.userName || 'The True North Hero') : character.name}
                      </h3>
                      {character.id === 'yourself' && (
                        <span className="ml-3 px-3 py-1 bg-red-500/20 text-red-700 text-xs font-bold rounded-full border border-red-400/30">
                          🍁 CANADIAN LEGEND
                        </span>
                      )}
                    </div>
                    <p className="text-red-800 text-sm">{character.description}</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-red-400" />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-red-100/60 to-white/80 rounded-2xl border border-red-200/60">
            <div className="flex items-start">
              <div className="text-2xl mr-3">🍁</div>
              <div>
                <h3 className="text-red-700 font-bold mb-2">True North Wisdom</h3>
                <p className="text-red-900 text-sm leading-relaxed">
                  Choosing "The True North Hero" (yourself) lets you experience Canada’s diversity first-hand. Embrace the spirit of multiculturalism, respect for Indigenous Peoples, and the warmth of Canadian kindness. Remember, in Canada, everyone belongs – that’s what makes us strong, eh!
                </p>
                <p className="text-red-700 text-xs mt-2 italic">Proudly celebrating the Canadian Multiculturalism Act and Indigenous heritage aboot the land!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;