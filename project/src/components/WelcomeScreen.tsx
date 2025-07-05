import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { Play, Star } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
  const { dispatch } = useGame();
  const [userName, setUserName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🍁');

  // Canadian-inspired avatars
  const avatarOptions = [
    { emoji: '🍁', name: 'Maple Hero' },
    { emoji: '🪶', name: 'Indigenous Guardian' },
    { emoji: '🦫', name: 'Beaver Builder' },
    { emoji: '🧣', name: 'Winter Warrior' },
    { emoji: '🛶', name: 'Canoe Adventurer' },
    { emoji: '🏒', name: 'Hockey Star' },
    { emoji: '🦌', name: 'Northern Spirit' },
    { emoji: '🌈', name: 'Pride Ally' },
    { emoji: '🦉', name: 'Wise Owl' }
  ];

  const handleStart = () => {
    if (userName.trim()) {
      dispatch({ 
        type: 'SET_USER_INFO', 
        payload: { userName: userName.trim(), userAvatar: selectedAvatar } 
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-white via-red-100 to-red-500/20">
      {/* Canadian maple leaf background */}
      <div className="absolute top-10 left-10 text-7xl opacity-20 animate-bounce-slow">🍁</div>
      <div className="absolute bottom-10 right-10 text-8xl opacity-10 animate-spin-slow">🍁</div>
      <div className="max-w-md mx-auto relative z-10">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-red-200/70">
          {/* Canadian Header */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-red-500 via-white to-red-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse border-4 border-white">
              <span className="text-5xl">🍁</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-2">
              Canadian Diversity Quest
            </h1>
            <p className="text-red-700 text-lg font-medium">
              🍁 Celebrate Multiculturalism & Inclusion 🍁
            </p>
            <p className="text-red-800 text-sm mt-2">
              Embark on a legendary journey across Canada to master diversity, inclusion, and kindness, eh!
            </p>
          </div>

          {/* Quest Stats */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="text-center p-3 bg-red-100/60 rounded-xl border border-red-200/60">
              <div className="text-xs font-bold text-red-700">15 min</div>
              <div className="text-xs text-red-500">Quest Time</div>
            </div>
            <div className="text-center p-3 bg-red-100/60 rounded-xl border border-red-200/60">
              <div className="text-xs font-bold text-red-700">4 Provinces</div>
              <div className="text-xs text-red-500">To Explore</div>
            </div>
            <div className="text-center p-3 bg-red-100/60 rounded-xl border border-red-200/60">
              <div className="text-xs font-bold text-red-700">Epic Rewards</div>
              <div className="text-xs text-red-500">Await, eh!</div>
            </div>
          </div>

          {/* Character Creation */}
          <div className="mb-6">
            <h3 className="text-red-900 font-bold mb-3 flex items-center">
              <span className="text-2xl mr-2">🍁</span>
              Choose Your Canadian Avatar
            </h3>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {avatarOptions.map((avatar) => (
                <button
                  key={avatar.emoji}
                  onClick={() => setSelectedAvatar(avatar.emoji)}
                  className={`text-2xl p-3 rounded-xl transition-all duration-300 border-2 ${
                    selectedAvatar === avatar.emoji 
                      ? 'bg-red-500/20 border-red-400 scale-110 shadow-lg' 
                      : 'bg-white/60 border-red-200 hover:bg-red-100/60 hover:border-red-400'
                  }`}
                  title={avatar.name}
                >
                  {avatar.emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Hero Name */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-red-700 mb-2 flex items-center">
              <Star className="h-4 w-4 mr-2 text-red-500" />
              Hero Name
            </label>
            <input
              type="text"
              placeholder="Enter your Canadian hero name..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-red-200 text-red-900 placeholder-red-400 focus:border-red-400 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-red-400/20"
              onKeyPress={(e) => e.key === 'Enter' && handleStart()}
            />
          </div>

          {/* Start Button */}
          <button
            onClick={handleStart}
            disabled={!userName.trim()}
            className={`w-full bg-white text-red-900 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center shadow-xl disabled:shadow-none relative overflow-hidden ${!userName.trim() ? '' : 'bg-gradient-to-r from-red-500 via-white to-red-400 hover:from-red-600 hover:to-red-500'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>
            <Play className="mr-2 h-5 w-5" />
            Begin Canadian Quest
          </button>

          {/* Quest Preview */}
          <div className="mt-6 p-4 bg-red-100/60 rounded-xl border border-red-200/60">
            <p className="text-xs text-red-700 text-center leading-relaxed">
              🍁 <strong>Your Quest:</strong> Explore Canada’s diversity, make wise choices, and become a true Canadian inclusion champion! 🇨🇦
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;