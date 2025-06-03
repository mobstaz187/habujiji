import React, { useState, useEffect } from 'react';
import { Bet, DrawResult } from '../types';
import { calculateWinnings, formatSolana } from '../utils/lottery';

interface DrawResultsProps {
  result: DrawResult | null;
  userBets: Bet[];
  onClose: () => void;
}

const DrawResults: React.FC<DrawResultsProps> = ({ result, userBets, onClose }) => {
  const [showingNumber, setShowingNumber] = useState<number | null>(null);
  const [revealedNumbers, setRevealedNumbers] = useState<number[]>([]);
  const [showWinnings, setShowWinnings] = useState(false);
  
  useEffect(() => {
    if (!result) return;
    
    // Reset states when result changes
    setShowingNumber(null);
    setRevealedNumbers([]);
    setShowWinnings(false);
    
    // Start revealing numbers with animation
    let currentIndex = 0;
    
    const revealNextNumber = () => {
      if (currentIndex < result.winningNumbers.length) {
        const number = result.winningNumbers[currentIndex];
        setShowingNumber(number);
        
        // After animation, add to revealed numbers
        setTimeout(() => {
          setRevealedNumbers(prev => [...prev, number]);
          currentIndex++;
          
          if (currentIndex < result.winningNumbers.length) {
            setTimeout(revealNextNumber, 1500);
          } else {
            // All numbers revealed, show winnings
            setTimeout(() => {
              setShowingNumber(null);
              setShowWinnings(true);
            }, 1000);
          }
        }, 1000);
      }
    };
    
    // Start the animation sequence after a small delay
    setTimeout(revealNextNumber, 1000);
  }, [result]);
  
  if (!result) return null;
  
  const totalWinnings = userBets.reduce((sum, bet) => {
    return sum + calculateWinnings(bet.numbers, result.winningNumbers, bet.amount);
  }, 0);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 shadow-2xl border border-gray-700/30">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Draw Results</h2>
          <p className="text-gray-400">{new Date(result.timestamp).toLocaleString()}</p>
        </div>
        
        {!showWinnings ? (
          <div className="py-10">
            <div className="flex justify-center space-x-6 mb-6">
              {result.winningNumbers.map((num, index) => {
                const isRevealed = revealedNumbers.includes(num);
                const isCurrentlyRevealing = showingNumber === num;
                
                return (
                  <div 
                    key={`winning-${index}`}
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold
                      transition-all duration-500 transform
                      ${isRevealed ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white' : 'bg-gray-700 text-gray-500'}
                      ${isCurrentlyRevealing ? 'scale-125 shadow-lg shadow-amber-500/30' : ''}
                    `}
                  >
                    {isRevealed ? num : '?'}
                  </div>
                );
              })}
            </div>
            
            <p className="text-center text-gray-300 animate-pulse">
              {revealedNumbers.length === 0 ? 'Revealing winning numbers...' : 
               revealedNumbers.length < result.winningNumbers.length ? 'Revealing next number...' : 
               'Calculating winnings...'}
            </p>
          </div>
        ) : (
          <div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-6">
              <div className="flex justify-center space-x-4 mb-4">
                {result.winningNumbers.map((num, index) => (
                  <div 
                    key={`final-${index}`}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 
                              flex items-center justify-center text-white font-bold"
                  >
                    {num}
                  </div>
                ))}
              </div>
              
              <div className="divide-y divide-gray-700/50">
                {userBets.map((bet) => {
                  const winnings = calculateWinnings(bet.numbers, result.winningNumbers, bet.amount);
                  const hasWon = winnings > 0;
                  
                  return (
                    <div key={bet.id} className="py-3 flex justify-between items-center">
                      <div className="flex space-x-2">
                        {bet.numbers.map((num, idx) => {
                          const isWinning = result.winningNumbers.includes(num);
                          
                          return (
                            <div 
                              key={`betnum-${bet.id}-${idx}`}
                              className={`
                                w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                                ${isWinning ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300'}
                              `}
                            >
                              {num}
                            </div>
                          );
                        })}
                      </div>
                      
                      <div>
                        <span className={`font-medium ${hasWon ? 'text-green-400' : 'text-gray-400'}`}>
                          {hasWon ? `+${formatSolana(winnings)}` : '-'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total bet:</span>
                <span className="text-gray-300">
                  {formatSolana(userBets.reduce((sum, bet) => sum + bet.amount, 0))}
                </span>
              </div>
              
              <div className="flex justify-between items-center text-lg font-medium mt-2">
                <span className="text-white">Total winnings:</span>
                <span className={totalWinnings > 0 ? 'text-green-400' : 'text-gray-400'}>
                  {totalWinnings > 0 ? `+${formatSolana(totalWinnings)}` : formatSolana(0)}
                </span>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 
                        text-white rounded-lg font-medium transition-colors duration-200"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrawResults;