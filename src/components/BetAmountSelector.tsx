import React from 'react';
import { BET_AMOUNTS } from '../constants';
import { formatSolana } from '../utils/lottery';

interface BetAmountSelectorProps {
  selectedAmount: number | null;
  onChange: (amount: number) => void;
  disabled?: boolean;
}

const BetAmountSelector: React.FC<BetAmountSelectorProps> = ({ 
  selectedAmount, 
  onChange,
  disabled = false
}) => {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold hermes-title text-[#daa520] mb-6">Divine Offering</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {BET_AMOUNTS.map((amount) => (
          <button
            key={amount}
            onClick={() => !disabled && onChange(amount)}
            disabled={disabled}
            className={`
              relative group overflow-hidden
              py-4 px-4 rounded-2xl font-bold transition-all duration-300 transform hermes-title
              ${selectedAmount === amount 
                ? 'bg-gradient-to-r from-[#daa520] to-[#cd7f32] text-black scale-105 shadow-lg shadow-[#daa520]/25 divine-shimmer' 
                : 'bg-gradient-to-br from-slate-800 to-slate-900 text-[#daa520] hover:scale-105 hover:from-[#daa520]/20 hover:to-[#cd7f32]/20'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <div className={`
              absolute inset-0 bg-gradient-to-r from-[#daa520] via-[#cd7f32] to-[#daa520]
              opacity-0 transition-opacity duration-300
              ${selectedAmount === amount ? 'opacity-20' : 'group-hover:opacity-10'}
            `} />
            <span className="relative z-10">{formatSolana(amount)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BetAmountSelector;