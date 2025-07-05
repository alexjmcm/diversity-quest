import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Play, CheckCircle, Lock, Star, Flame, Heart, Crown, Zap } from 'lucide-react';

const realms = [
  {
    id: 1,
    title: 'Realm of Unity',
    subtitle: 'Team Formation',
    description: 'Master the ancient art of inclusive team building',
    icon: '🏰',
    color: 'from-emerald-500 to-green-600',
    bgGradient: 'from-emerald-900/20 to-green-900/20',
    borderColor: 'border-emerald-500/30'
  },
  {
    id: 2,
    title: 'Valley of Voices',
    subtitle: 'Communication',
    description: 'Learn to hear all voices in the mystical valley',
    icon: '🗣️',
    color: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-900/20 to-cyan-900/20',
    borderColor: 'border-blue-500/30'
  },
  {
    id: 3,
    title: 'Sanctuary of Balance',
    subtitle: 'Work-Life Harmony',
    description: 'Discover the sacred balance of life and duty',
    icon: '⚖️',
    color: 'from-red-500 to-violet-600',
    bgGradient: 'from-red-900/20 to-violet-900/20',
    borderColor: 'border-red-500/30'
  },
  {
    id: 4,
    title: 'Temple of Honor',
    subtitle: 'Recognition',
    description: 'Unlock the power of true recognition and valor',
    icon: '🏆',
    color: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-900/20 to-orange-900/20',
    borderColor: 'border-amber-500/30'
  }
];

const LessonMap: React.FC = () => {
  const { state, dispatch } = useGame();

  const startRealm = (realmId: number) => {
    dispatch({ type: 'START_LESSON', payload: realmId });
  };

  const isRealmUnlocked = (realmId: number) => {
    return realmId === 1 || state.completedLevels.includes(realmId - 1);
  };

  const isRealmCompleted = (realmId: number) => {
    return state.completedLevels.includes(realmId);
  };

  const getHeroTitle = () => {
    const completed = state.completedLevels.length;
    if (completed === 0) return 'Novice Adventurer';
    if (completed === 1) return 'Brave Explorer';
    if (completed === 2) return 'Skilled Warrior';
    if (completed === 3) return 'Noble Champion';
    return 'Legendary Master';
  };

  return (
    <div className="min-h-screen p-4 relative overflow-hidden">
      {/* Mystical Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Hero Status */}
        <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-slate-700/50 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="text-4xl mr-3">{state.selectedCharacter?.avatar}</div>
              <div>
                <h2 className="font-bold text-white text-lg">{state.selectedCharacter?.name}</h2>
                <p className="text-sm text-slate-300 flex items-center">
                  <Crown className="h-4 w-4 mr-1 text-amber-400" />
                  {getHeroTitle()}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Flame className="h-5 w-5 text-orange-500 mr-1" />
                <span className="font-bold text-orange-400">{state.streak}</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-red-500 mr-1" />
                <span className="font-bold text-red-400">{state.hearts}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-700 rounded-full h-3 mb-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 h-3 rounded-full transition-all duration-1000 relative"
              style={{ width: `${(state.completedLevels.length / 4) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-slate-300">
            <span>{state.completedLevels.length}/4 realms conquered</span>
            <span className="flex items-center">
              <Zap className="h-4 w-4 mr-1 text-amber-400" />
              {state.xp} XP
            </span>
          </div>
        </div>

        {/* Realm Map */}
        <div className="space-y-6">
          {realms.map((realm, index) => {
            const unlocked = isRealmUnlocked(realm.id);
            const completed = isRealmCompleted(realm.id);
            const current = state.currentLevel === realm.id;

            return (
              <div key={realm.id} className="relative">
                {/* Mystical Path Connector */}
                {index < realms.length - 1 && (
                  <div className="absolute left-1/2 top-24 w-0.5 h-12 bg-gradient-to-b from-slate-600 to-slate-700 transform -translate-x-0.5 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-400/20 to-transparent animate-pulse"></div>
                  </div>
                )}
                
                <button
                  onClick={() => unlocked && startRealm(realm.id)}
                  disabled={!unlocked}
                  className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 relative z-10 overflow-hidden ${
                    completed 
                      ? `${realm.borderColor} bg-gradient-to-br ${realm.bgGradient} shadow-xl` 
                      : current
                      ? `${realm.borderColor} bg-gradient-to-br ${realm.bgGradient} shadow-xl animate-pulse`
                      : unlocked
                      ? 'border-slate-600 bg-slate-800/50 hover:border-slate-500 hover:shadow-lg hover:bg-slate-700/50'
                      : 'border-slate-700 bg-slate-900/50 opacity-60 cursor-not-allowed'
                  }`}
                >
                  {/* Magical Shimmer Effect */}
                  {(completed || current) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>
                  )}
                  
                  <div className="flex items-center relative z-10">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mr-4 ${
                      completed 
                        ? `bg-gradient-to-br ${realm.color} shadow-lg` 
                        : current
                        ? `bg-gradient-to-br ${realm.color} shadow-lg animate-pulse`
                        : unlocked
                        ? 'bg-slate-700 border-2 border-slate-600'
                        : 'bg-slate-800 border-2 border-slate-700'
                    }`}>
                      {completed ? (
                        <CheckCircle className="h-10 w-10 text-white" />
                      ) : !unlocked ? (
                        <Lock className="h-8 w-8 text-slate-500" />
                      ) : (
                        <span className="text-3xl">{realm.icon}</span>
                      )}
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 className="font-bold text-white text-lg mb-1">
                        {realm.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-1">{realm.subtitle}</p>
                      <p className="text-slate-400 text-xs">{realm.description}</p>
                      {completed && (
                        <div className="flex items-center mt-2">
                          <Star className="h-4 w-4 text-amber-400 mr-1" />
                          <span className="text-xs font-bold text-amber-400">CONQUERED</span>
                        </div>
                      )}
                    </div>
                    
                    {unlocked && !completed && (
                      <div className="text-right">
                        <Play className="h-6 w-6 text-slate-400 mb-1" />
                        <div className="text-xs text-slate-500">Enter</div>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Motivational Message */}
        <div className="mt-8 text-center">
          {state.completedLevels.length === 0 && (
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <p className="text-slate-300 text-sm">🗡️ Your legendary quest begins! Choose your first realm to conquer! ⚔️</p>
            </div>
          )}
          {state.completedLevels.length > 0 && state.completedLevels.length < 4 && (
            <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl p-4 border border-amber-700/30">
              <p className="text-amber-300 text-sm">🔥 Excellent progress, brave hero! Your legend grows stronger! 🔥</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonMap;