import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Navigation from '../components/Navigation';
import NumberSelector from '../components/NumberSelector';
import BetAmountSelector from '../components/BetAmountSelector';
import LotteryTicket from '../components/LotteryTicket';
import DrawResults from '../components/DrawResults';
import LotteryInfo from '../components/LotteryInfo';
import HomePage from './HomePage';
import HistoryPage from './HistoryPage';
import WinnersPage from './WinnersPage';
import SettingsPage from './SettingsPage';
import { Bet, DrawResult } from '../types';
import { NUMBERS_TO_SELECT } from '../constants';
import { generateRandomNumbers } from '../utils/lottery';

const LotteryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [userBets, setUserBets] = useState<Bet[]>([]);
  const [drawResult, setDrawResult] = useState<DrawResult | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  
  const canPlaceBet = selectedNumbers.length === NUMBERS_TO_SELECT && selectedAmount !== null;
  
  const handlePlaceBet = useCallback(() => {
    if (!canPlaceBet) return;
    
    const newBet: Bet = {
      numbers: [...selectedNumbers].sort((a, b) => a - b),
      amount: selectedAmount!,
      id: uuidv4(),
      timestamp: Date.now()
    };
    
    setUserBets(prev => [...prev, newBet]);
    setSelectedNumbers([]);
    setSelectedAmount(null);
  }, [selectedNumbers, selectedAmount, canPlaceBet]);
  
  const handleStartDraw = useCallback(() => {
    if (userBets.length === 0 || isDrawing) return;
    
    setIsDrawing(true);
    
    setTimeout(() => {
      const result: DrawResult = {
        winningNumbers: generateRandomNumbers(NUMBERS_TO_SELECT),
        timestamp: Date.now(),
        id: uuidv4()
      };
      
      setDrawResult(result);
      setIsDrawing(false);
    }, 1000);
  }, [userBets, isDrawing]);
  
  const handleReset = useCallback(() => {
    setDrawResult(null);
    setUserBets([]);
    setSelectedNumbers([]);
    setSelectedAmount(null);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'play':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {drawResult ? (
                <DrawResults 
                  result={drawResult} 
                  userBets={userBets} 
                  onClose={handleReset}
                />
              ) : (
                <>
                  <div className="glass-panel p-6 hover-float">
                    <NumberSelector 
                      selectedNumbers={selectedNumbers} 
                      onChange={setSelectedNumbers}
                      disabled={isDrawing}
                    />
                  </div>
                  
                  <div className="glass-panel p-6 hover-float">
                    <BetAmountSelector 
                      selectedAmount={selectedAmount} 
                      onChange={setSelectedAmount}
                      disabled={isDrawing}
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handlePlaceBet}
                      disabled={!canPlaceBet || isDrawing}
                      className={`
                        flex-1 py-4 px-6 rounded-xl font-bold text-lg shimmer
                        transition-all duration-300 transform hover:scale-105
                        ${canPlaceBet && !isDrawing
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:shadow-amber-500/25'
                          : 'bg-gray-800/50 text-gray-500 cursor-not-allowed'}
                      `}
                    >
                      Place Bet
                    </button>
                    
                    <button 
                      onClick={handleStartDraw}
                      disabled={userBets.length === 0 || isDrawing}
                      className={`
                        flex-1 py-4 px-6 rounded-xl font-bold text-lg shimmer
                        transition-all duration-300 transform hover:scale-105
                        ${userBets.length > 0 && !isDrawing
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg hover:shadow-emerald-500/25'
                          : 'bg-gray-800/50 text-gray-500 cursor-not-allowed'}
                        ${isDrawing ? 'animate-pulse' : ''}
                      `}
                    >
                      {isDrawing ? 'Drawing...' : 'Draw Numbers'}
                    </button>
                  </div>
                  
                  {userBets.length > 0 && (
                    <div className="glass-panel p-6">
                      <h3 className="text-2xl font-bold text-amber-200 mb-6">Your Tickets</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {userBets.map(bet => (
                          <LotteryTicket key={bet.id} bet={bet} />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            
            <div className="lg:col-span-1">
              <LotteryInfo />
            </div>
          </div>
        );
      case 'history':
        return <HistoryPage />;
      case 'leaderboard':
        return <WinnersPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return null;
    }
  };
  
  return (
    <div className="py-8 px-4 lottery-bg min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent pulse">
          LiveBall
        </h1>
        <p className="text-center text-amber-200/60 mb-8">Pick your lucky numbers and win big with Solana!</p>
        
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={activeTab}
            timeout={300}
            classNames="tab"
            unmountOnExit
          >
            <div>{renderContent()}</div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default LotteryPage