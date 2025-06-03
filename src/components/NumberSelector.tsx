import React from 'react';
import NumberBubble from './NumberBubble';
import { MIN_NUMBER, MAX_NUMBER, NUMBERS_TO_SELECT } from '../constants';

interface NumberSelectorProps {
  selectedNumbers: number[];
  onChange: (numbers: number[]) => void;
  disabled?: boolean;
}

const NumberSelector: React.FC<NumberSelectorProps> = ({ 
  selectedNumbers, 
  onChange,
  disabled = false
}) => {
  const handleSelectNumber = (number: number) => {
    if (disabled) return;
    
    if (selectedNumbers.includes(number)) {
      onChange(selectedNumbers.filter(n => n !== number));
    } else if (selectedNumbers.length < NUMBERS_TO_SELECT) {
      onChange([...selectedNumbers, number]);
    }
  };

  const handleRandomPick = () => {
    if (disabled) return;
    
    const randomNumbers: number[] = [];
    while (randomNumbers.length < NUMBERS_TO_SELECT) {
      const random = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
      if (!randomNumbers.includes(random)) {
        randomNumbers.push(random);
      }
    }
    onChange(randomNumbers);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold hermes-title text-[#daa520]">Divine Numbers</h3>
        <button
          onClick={handleRandomPick}
          disabled={disabled}
          className={`
            bg-gradient-to-r from-[#daa520] to-[#cd7f32] text-black px-6 py-2.5 rounded-xl
            font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg
            hover:shadow-[#daa520]/25 disabled:opacity-50 disabled:cursor-not-allowed divine-shimmer
          `}
        >
          Hermes' Choice
        </button>
      </div>
      
      <div className="glass-panel p-6 mb-6 greek-pattern">
        <div className="number-grid">
          {Array.from({ length: MAX_NUMBER }, (_, i) => i + 1).map(number => (
            <NumberBubble
              key={number}
              number={number}
              selected={selectedNumbers.includes(number)}
              onClick={() => handleSelectNumber(number)}
              disabled={disabled || (selectedNumbers.length === NUMBERS_TO_SELECT && !selectedNumbers.includes(number))}
            />
          ))}
        </div>
      </div>

      {selectedNumbers.length > 0 && (
        <div className="glass-panel p-6 divine-pulse">
          <h4 className="text-lg font-medium hermes-title text-[#daa520] mb-4">Your Divine Selection</h4>
          <div className="flex space-x-4 justify-center">
            {selectedNumbers.map(number => (
              <NumberBubble
                key={`selected-${number}`}
                number={number}
                selected={true}
                onClick={() => handleSelectNumber(number)}
                disabled={disabled}
              />
            ))}
            {Array.from({ length: NUMBERS_TO_SELECT - selectedNumbers.length }).map((_, i) => (
              <div 
                key={`empty-${i}`} 
                className="w-14 h-14 rounded-2xl border-2 border-dashed border-[#daa520]/30 
                         flex items-center justify-center"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NumberSelector;