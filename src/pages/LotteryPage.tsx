import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Navigation from '../components/Navigation';
import DrawResults from '../components/DrawResults';
import HomePage from './HomePage';
import WinnersPage from './WinnersPage';
import { config } from '../config';

const LotteryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'leaderboard':
        return <WinnersPage />;
      default:
        return null;
    }
  };
  
  return (
    <div className="py-8 px-4 lottery-bg min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent pulse">
          LiveRoll
        </h1>
        <p className="text-center text-amber-200/60 mb-8">
          Hold {config.contract.minimumTokens.toLocaleString()} $ROLL tokens to participate in hourly draws!
        </p>
        
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

export default LotteryPage;