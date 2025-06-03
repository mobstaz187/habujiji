import React from 'react';
import { Trophy, ExternalLink } from 'lucide-react';
import { parseTime, formatTimeAgo } from '../utils/time';

interface Winner {
  wallet: string;
  totalWins: string;
  gamesWon: number;
  timestamp: string;
  transactionId?: string;
}

const WinnersPage: React.FC = () => {
  const recentWinners: Winner[] = [
    { 
      wallet: "Wallet ***789", 
      totalWins: "1,245.5 SOL", 
      gamesWon: 12,
      timestamp: parseTime('8:00 PM'),
      transactionId: "4ueHzkS7YFr2DdDqVKKBJvqZGNBtF7pTSfEqP5UzXywYqQJBfh8LzRSbEGGaKZBvMHxJTGqF2hjhzMQFnLq1JVVH"
    },
    { 
      wallet: "Wallet ***456", 
      totalWins: "985.0 SOL", 
      gamesWon: 8,
      timestamp: parseTime('7:30 PM'),
      transactionId: "3vGHxKS7YFr2DdDqVKKBJvqZGNBtF7pTSfEqP5UzXywYqQJBfh8LzRSbEGGaKZBvMHxJTGqF2hjhzMQFnLq1JVVH"
    },
    { 
      wallet: "Wallet ***123", 
      totalWins: "756.5 SOL", 
      gamesWon: 6,
      timestamp: parseTime('7:00 PM'),
      transactionId: "2kLHxKS7YFr2DdDqVKKBJvqZGNBtF7pTSfEqP5UzXywYqQJBfh8LzRSbEGGaKZBvMHxJTGqF2hjhzMQFnLq1JVVH"
    }
  ];
  
  const blessedWinners: Winner[] = [
    {
      wallet: "Oracle ***321",
      totalWins: "2,500.0 SOL",
      gamesWon: 15,
      timestamp: parseTime('8:30 PM'),
      transactionId: "5xKLmNS8YFr3DdDqVKKBJvqZGNBtF7pTSfEqP5UzXywYqQJBfh8LzRSbEGGaKZBvMHxJTGqF2hjhzMQFnLq1JVVH"
    },
    {
      wallet: "Prophet ***555",
      totalWins: "3,750.0 SOL",
      gamesWon: 20,
      timestamp: parseTime('8:45 PM'),
      transactionId: "6yMNpKS9ZFr4EdDqVKKBJvqZGNBtF7pTSfEqP5UzXywYqQJBfh8LzRSbEGGaKZBvMHxJTGqF2hjhzMQFnLq1JVVH"
    }
  ];

  const openSolscan = (txId: string) => {
    window.open(`https://solscan.io/tx/${txId}`, '_blank');
  };

  return (
    <div className="space-y-8">
      <div className="glass-panel p-8">
        <h2 className="text-3xl font-bold text-amber-200 mb-6">Blessed Winners</h2>
        <div className="space-y-4">
          {blessedWinners.length > 0 ? (
            blessedWinners.map((winner, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl hover:translate-x-2 transition-transform duration-300"
              >
                <div>
                  <p className="text-[#daa520] font-medium hermes-title">{winner.wallet}</p>
                  <p className="text-[#daa520]/60">{formatTimeAgo(winner.timestamp)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[#daa520] font-bold hermes-title divine-shimmer">{winner.totalWins}</div>
                  {winner.transactionId && (
                    <button
                      onClick={() => openSolscan(winner.transactionId!)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#daa520]/20 to-[#cd7f32]/20 
                               hover:from-[#daa520]/30 hover:to-[#cd7f32]/30 transition-all duration-300 group"
                      title="View on Solscan"
                    >
                      <ExternalLink size={16} className="text-[#daa520] group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium text-[#daa520]">Solscan</span>
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-amber-100/60">
              No winners yet
            </div>
          )}
        </div>
      </div>

      <div className="glass-panel p-8">
        <h2 className="text-3xl font-bold text-amber-200 mb-6">Recent Winners</h2>
        
        <div className="space-y-4">
          {recentWinners.length > 0 ? (
            recentWinners.map((winner, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-6 rounded-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium text-amber-200">{winner.wallet}</p>
                    <p className="text-amber-100/60">{formatTimeAgo(winner.timestamp)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-xl font-bold text-amber-400">{winner.totalWins}</div>
                    {winner.transactionId && (
                      <button
                        onClick={() => openSolscan(winner.transactionId!)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#daa520]/20 to-[#cd7f32]/20 
                                 hover:from-[#daa520]/30 hover:to-[#cd7f32]/30 transition-all duration-300 group"
                        title="View on Solscan"
                      >
                        <ExternalLink size={16} className="text-[#daa520] group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium text-[#daa520]">Solscan</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-amber-100/60">
              No winners yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WinnersPage;