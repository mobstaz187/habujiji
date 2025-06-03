import React from 'react';
import { Bet } from '../types';
import { formatSolana } from '../utils/lottery';

interface LotteryTicketProps {
  bet: Bet;
}

const LotteryTicket: React.FC<LotteryTicketProps> = ({ bet }) => {
  const { numbers, amount, id } = bet;
  
  return (
    <div className="ticket-glow relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 rounded-2xl">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#daa520]/10 to-[#cd7f32]/10" />
      
      <div className="relative">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-[#daa520] font-bold text-lg hermes-title">Divine Ticket</h3>
            <p className="text-[#daa520]/60 text-sm font-medium">#{id.substring(0, 8)}</p>
          </div>
          <div className="bg-gradient-to-r from-[#daa520]/20 to-[#cd7f32]/20 text-[#daa520] px-4 py-1.5 rounded-full text-sm font-bold hermes-title">
            {formatSolana(amount)}
          </div>
        </div>
        
        <div className="flex space-x-4 justify-center my-6">
          {numbers.map((number, index) => (
            <div 
              key={`ticket-${id}-${index}`}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#daa520] via-[#cd7f32] to-[#daa520]
                       flex items-center justify-center text-black text-xl font-bold shadow-lg shadow-[#daa520]/25
                       relative overflow-hidden divine-shimmer hermes-title"
              style={{
                animation: `pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#daa520] via-[#cd7f32] to-[#daa520] opacity-20" />
              <span className="relative z-10">{number}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <p className="text-[#daa520]/60 text-sm font-medium">
            Created {new Date(bet.timestamp).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LotteryTicket;