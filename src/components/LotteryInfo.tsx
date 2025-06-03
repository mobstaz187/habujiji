import React from 'react';
import { Clock, Trophy, Users } from 'lucide-react';

const LotteryInfo: React.FC = () => {
  return (
    <div className="glass-panel p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full -ml-32 -mb-32 blur-3xl" />
      
      <div className="relative">
        <h2 className="text-2xl font-bold text-amber-200 mb-6">How to Play</h2>
        
        <div className="space-y-6">
          <div className="transform transition-transform hover:translate-x-2">
            <div className="flex items-start">
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-3 rounded-xl mr-4">
                <Users size={24} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-amber-200 font-bold mb-1">Pick Your Numbers</h3>
                <p className="text-amber-100/60">Select 3 numbers from 1-100 or use Quick Pick for random selection.</p>
              </div>
            </div>
          </div>
          
          <div className="transform transition-transform hover:translate-x-2">
            <div className="flex items-start">
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-3 rounded-xl mr-4">
                <Trophy size={24} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-amber-200 font-bold mb-1">Place Your Bet</h3>
                <p className="text-amber-100/60">Choose your bet amount from 0.05 to 1 SOL.</p>
              </div>
            </div>
          </div>
          
          <div className="transform transition-transform hover:translate-x-2">
            <div className="flex items-start">
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-3 rounded-xl mr-4">
                <Clock size={24} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-amber-200 font-bold mb-1">Wait for Results</h3>
                <p className="text-amber-100/60">Winners are drawn every hour. Match numbers to win!</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-amber-500/10">
          <h3 className="text-xl font-bold text-amber-200 mb-4">Prize Structure</h3>
          <div className="space-y-3">
            <div className="glass-panel p-4 transform transition-transform hover:translate-x-2">
              <div className="flex justify-between items-center">
                <span className="text-amber-100/80 font-medium">Match 3 numbers</span>
                <span className="text-amber-400 font-bold">100× your bet</span>
              </div>
            </div>
            <div className="glass-panel p-4 transform transition-transform hover:translate-x-2">
              <div className="flex justify-between items-center">
                <span className="text-amber-100/80 font-medium">Match 2 numbers</span>
                <span className="text-amber-400 font-bold">10× your bet</span>
              </div>
            </div>
            <div className="glass-panel p-4 transform transition-transform hover:translate-x-2">
              <div className="flex justify-between items-center">
                <span className="text-amber-100/80 font-medium">Match 1 number</span>
                <span className="text-amber-400 font-bold">1.5× your bet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryInfo;