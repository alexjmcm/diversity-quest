import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Trophy, Star, CheckCircle, RotateCcw, Download, Share, Crown, Zap, Sword } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CompletionScreen: React.FC = () => {
  const { state, dispatch } = useGame();

  const handleRestart = () => {
    dispatch({ type: 'RESTART_GAME' });
  };

  const handleDownloadCertificate = async () => {
    const cert = document.getElementById('canadian-certificate');
    if (!cert) return;
    const canvas = await html2canvas(cert, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [800, 600] });
    pdf.addImage(imgData, 'PNG', 0, 0, 800, 600);
    pdf.save('Canadian-Diversity-Quest-Certificate.pdf');
  };

  const getHeroicTitle = () => {
    const percentage = (state.inclusiveChoices / 12) * 100;
    if (percentage >= 80) return { 
      title: 'Legendary GBA+ Champion', 
      color: 'text-amber-400',
      bgColor: 'from-amber-900/30 to-yellow-900/30',
      borderColor: 'border-amber-400/50',
      message: 'You have achieved legendary status! Your wisdom in inclusion will inspire generations.',
      emoji: '👑',
      rank: 'LEGENDARY'
    };
    if (percentage >= 60) return { 
      title: 'Noble Inclusion Knight', 
      color: 'text-emerald-400',
      bgColor: 'from-emerald-900/30 to-green-900/30',
      borderColor: 'border-emerald-400/50',
      message: 'Your noble heart and wise choices mark you as a true champion of inclusion.',
      emoji: '⚔️',
      rank: 'HEROIC'
    };
    if (percentage >= 40) return { 
      title: 'Brave Inclusion Seeker', 
      color: 'text-blue-400',
      bgColor: 'from-blue-900/30 to-cyan-900/30',
      borderColor: 'border-blue-400/50',
      message: 'Your journey has begun well! Continue seeking wisdom in the ways of inclusion.',
      emoji: '🛡️',
      rank: 'VALIANT'
    };
    return { 
      title: 'Aspiring Hero', 
      color: 'text-purple-400',
      bgColor: 'from-purple-900/30 to-violet-900/30',
      borderColor: 'border-purple-400/50',
      message: 'Every great hero begins with a single step. Your adventure in inclusion has begun!',
      emoji: '⭐',
      rank: 'NOVICE'
    };
  };

  const heroicAchievement = getHeroicTitle();

  return (
    <div className="min-h-screen p-4 relative overflow-hidden">
      {/* Epic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Epic Victory Header */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
            <Trophy className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
            Quest Complete!
          </h1>
          <p className="text-slate-300 text-lg">
            Hail, {state.userName}! 🎉
          </p>
          <p className="text-slate-400 text-sm">
            Your legend is now written in the stars
          </p>
        </div>

        {/* Heroic Achievement */}
        <div className={`bg-gradient-to-br ${heroicAchievement.bgColor} border-2 ${heroicAchievement.borderColor} rounded-2xl p-6 mb-6 shadow-2xl relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] animate-pulse"></div>
          
          <div className="text-center relative z-10">
            <div className="text-5xl mb-3">{heroicAchievement.emoji}</div>
            <div className={`text-xs font-bold ${heroicAchievement.color} mb-1`}>
              {heroicAchievement.rank} RANK ACHIEVED
            </div>
            <h2 className={`text-xl font-bold ${heroicAchievement.color} mb-3`}>
              {heroicAchievement.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">{heroicAchievement.message}</p>
          </div>
        </div>

        {/* Epic Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-4 shadow-lg border border-slate-700/50 text-center">
            <Star className="h-6 w-6 text-amber-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-400">{state.xp}</div>
            <div className="text-xs text-slate-400">Total XP</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-4 shadow-lg border border-slate-700/50 text-center">
            <CheckCircle className="h-6 w-6 text-emerald-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-400">{state.inclusiveChoices}/12</div>
            <div className="text-xs text-slate-400">Heroic Choices</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-4 shadow-lg border border-slate-700/50 text-center">
            <Zap className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-400">4/4</div>
            <div className="text-xs text-slate-400">Realms Conquered</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-4 shadow-lg border border-slate-700/50 text-center">
            <Crown className="h-6 w-6 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-400">100%</div>
            <div className="text-xs text-slate-400">Quest Progress</div>
          </div>
        </div>

        {/* Ancient Wisdom */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-md border border-slate-600/50 rounded-2xl p-6 mb-6 shadow-xl">
          <h3 className="font-bold text-amber-300 mb-3 flex items-center">
            <Sword className="h-5 w-5 mr-2" />
            Ancient Wisdom Gained
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            The sacred art of GBA+ teaches us that every soul experiences the world differently. 
            By embracing diverse perspectives and forging inclusive paths, we create realms where 
            all beings can flourish and achieve their greatest potential. Your quest has made you 
            a guardian of this ancient wisdom.
          </p>
        </div>

        {/* Epic Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleRestart}
            className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>
            <RotateCcw className="mr-2 h-5 w-5" />
            Embark on New Quest
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <button style={{ display: 'none' }} className="bg-red-700/50 hover:bg-red-600/50 text-red-300 border-2 border-red-600 hover:border-red-500 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center backdrop-blur-md">
              <Download className="mr-2 h-4 w-4" />
              Download Certificate
            </button>
            <button style={{ display: 'none' }} className="bg-red-700/50 hover:bg-red-600/50 text-red-300 border-2 border-red-600 hover:border-red-500 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center backdrop-blur-md">
              <Share className="mr-2 h-4 w-4" />
              Share Legend
            </button>
          </div>
        </div>

        {/* Epic Footer */}
        <div className="mt-8 text-center">
          <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 backdrop-blur-md">
            <p className="text-xs text-slate-400 mb-1">
              Quest completed on {new Date().toLocaleDateString()}
            </p>
            <p className="text-xs text-slate-300">
              ⚔️ May your newfound wisdom guide you in all future adventures! ⚔️
            </p>
          </div>
        </div>
      </div>

      {/* Hidden Canadian Certificate for PDF Download */}
      <div id="canadian-certificate" className="hidden print:block w-[800px] h-[600px] bg-white text-red-900 mx-auto my-8 rounded-2xl border-4 border-red-500 shadow-2xl relative overflow-hidden">
        <div className="absolute top-6 left-6 text-6xl">🍁</div>
        <div className="absolute top-6 right-6 text-6xl">🍁</div>
        <div className="absolute bottom-6 left-6 text-6xl">🍁</div>
        <div className="absolute bottom-6 right-6 text-6xl">🍁</div>
        <div className="flex flex-col items-center justify-center h-full p-12">
          <h2 className="text-4xl font-bold mb-4 text-center">Certificate of Completion</h2>
          <p className="text-lg mb-2 text-center">This certifies that</p>
          <div className="text-3xl font-extrabold mb-2 text-center">{state.userName}</div>
          <p className="text-lg mb-4 text-center">has successfully completed the</p>
          <div className="text-2xl font-bold mb-2 text-center">Canadian Diversity Quest</div>
          <div className="text-lg mb-4 text-center">and demonstrated outstanding knowledge of Canadian multiculturalism, inclusion, and Indigenous values.</div>
          <div className="text-xl font-semibold mb-2 text-center">Achievement: {heroicAchievement.title}</div>
          <div className="text-lg mb-4 text-center">Date: {new Date().toLocaleDateString()}</div>
          <div className="flex items-center justify-center mt-4">
            <span className="text-2xl mr-2">🍁</span>
            <span className="font-bold">True North Strong & Free</span>
            <span className="text-2xl ml-2">🍁</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionScreen;