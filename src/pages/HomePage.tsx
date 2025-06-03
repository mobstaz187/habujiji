import React, { useState, useEffect } from 'react';
import { Zap, Trophy, Users, Star, Timer } from 'lucide-react';
import PrizePool from '../components/PrizePool';

const HomePage: React.FC = () => {
  const [timeUntilNextDraw, setTimeUntilNextDraw] = useState<string>('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const nextHour = new Date(now);
      nextHour.setHours(nextHour.getHours() + 1);
      nextHour.setMinutes(0);
      nextHour.setSeconds(0);
      nextHour.setMilliseconds(0);

      const diff = nextHour.getTime() - now.getTime();
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeUntilNextDraw(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold hermes-title bg-gradient-to-r from-[#daa520] via-[#cd7f32] to-[#daa520] bg-clip-text text-transparent">
          Where Fortune Lives
        </h1>
        <p className="text-xl text-[#daa520]/60">Experience the thrill of live gaming</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Timer size={24} className="text-[#daa520]" />
            <h2 className="text-2xl font-bold text-[#daa520] hermes-title">Live Draw</h2>
          </div>
          <div className="text-4xl font-bold font-mono text-[#daa520] divine-shimmer">
            {timeUntilNextDraw}
          </div>
          <p className="mt-2 text-[#daa520]/60">Until next draw</p>
        </div>

        <PrizePool />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="glass-panel p-8 transform transition-all duration-300 hover:translate-y-[-8px] hover-float divine-shimmer">
          <div className="bg-gradient-to-br from-[#daa520]/20 to-[#cd7f32]/20 p-4 rounded-xl w-fit mb-6">
            <Zap size={32} className="text-[#daa520]" />
          </div>
          <h3 className="text-2xl font-bold text-[#daa520] mb-4 hermes-title">Live Energy</h3>
          <p className="text-[#daa520]/60">
            Feel the electric atmosphere of real-time gaming excitement!
          </p>
        </div>

        <div className="glass-panel p-8 transform transition-all duration-300 hover:translate-y-[-8px] hover-float divine-shimmer">
          <div className="bg-gradient-to-br from-[#daa520]/20 to-[#cd7f32]/20 p-4 rounded-xl w-fit mb-6">
            <Trophy size={32} className="text-[#daa520]" />
          </div>
          <h3 className="text-2xl font-bold text-[#daa520] mb-4 hermes-title">Victory Rush</h3>
          <div className="space-y-4">
            <p className="text-[#daa520]/60">
              Every hour brings new winners! Three lucky holders share the prize pool:
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-[#daa520]/10 to-[#cd7f32]/10 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-[#daa520] mb-1">50%</div>
                <div className="text-[#daa520]/60 text-sm">1st Place</div>
              </div>
              <div className="bg-gradient-to-br from-[#daa520]/10 to-[#cd7f32]/10 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-[#daa520] mb-1">30%</div>
                <div className="text-[#daa520]/60 text-sm">2nd Place</div>
              </div>
              <div className="bg-gradient-to-br from-[#daa520]/10 to-[#cd7f32]/10 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-[#daa520] mb-1">20%</div>
                <div className="text-[#daa520]/60 text-sm">3rd Place</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;