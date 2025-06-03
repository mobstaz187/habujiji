import React from 'react';

const HistoryPage: React.FC = () => {
  const mockHistory = [
    {
      id: '1',
      date: '2024-03-10 15:00',
      numbers: [7, 23, 45],
      bet: 0.5,
      result: [7, 23, 89],
      winnings: 0.75,
    },
    {
      id: '2',
      date: '2024-03-10 14:00',
      numbers: [12, 34, 56],
      bet: 1,
      result: [11, 34, 56],
      winnings: 1.5,
    },
    // Add more mock history items
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-amber-200">Betting History</h2>
      
      <div className="glass-panel p-6">
        <div className="space-y-4">
          {mockHistory.map((item) => (
            <div key={item.id} className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-amber-200 font-medium">{new Date(item.date).toLocaleString()}</p>
                  <p className="text-amber-100/60 text-sm">Ticket #{item.id}</p>
                </div>
                <div className={`text-lg font-bold ${item.winnings > 0 ? 'text-emerald-400' : 'text-amber-100/60'}`}>
                  {item.winnings > 0 ? `+${item.winnings} SOL` : '0 SOL'}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <p className="text-amber-100/60">Your Numbers</p>
                  <div className="flex space-x-2">
                    {item.numbers.map((num, idx) => (
                      <div key={`num-${idx}`} className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-amber-200 font-medium">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-amber-100/60">Winning Numbers</p>
                  <div className="flex space-x-2">
                    {item.result.map((num, idx) => (
                      <div key={`result-${idx}`} className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-amber-200 font-medium">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;