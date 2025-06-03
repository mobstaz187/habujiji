import React from 'react';

interface NumberBubbleProps {
  number: number;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const NumberBubble: React.FC<NumberBubbleProps> = ({ 
  number, 
  selected, 
  onClick, 
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        number-bubble w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold
        transition-all duration-300 hermes-title
        ${selected 
          ? 'bg-gradient-to-br from-[#daa520] via-[#cd7f32] to-[#daa520] text-black' 
          : 'bg-gradient-to-br from-slate-800 to-slate-900 text-[#daa520] hover:text-black hover:from-[#daa520]/50 hover:to-[#cd7f32]/50'}
        ${disabled && !selected ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-110'}
        ${disabled && selected ? 'opacity-90' : ''}
        ${selected ? 'selected divine-shimmer' : ''}
        relative overflow-hidden
      `}
    >
      <span className="relative z-10">{number}</span>
      <div className={`
        absolute inset-0 bg-gradient-to-r from-[#daa520] via-[#cd7f32] to-[#daa520]
        opacity-0 transition-opacity duration-300
        ${selected ? 'opacity-20' : 'group-hover:opacity-10'}
      `} />
    </button>
  );
};

export default NumberBubble;