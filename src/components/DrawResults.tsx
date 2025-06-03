import React from 'react';
import { Trophy } from 'lucide-react';
import { Winner } from '../types';

interface DrawResultsProps {
  winners: Winner[];
  onClose: () => void;
}

const DrawResults: React.FC<DrawResultsProps> = ({ winners, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 shadow-2xl border border-gray-700/30">
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Trophy size={32} className="text-[#daa520]" />
            <h2 className="text-2xl font-bold text-white">Draw Results</h2>
          </div>
          <p className="text-gray-400">{new Date().toLocaleString()}</p>
        </div>
        
        <div className="space-y-4">
          {winners.map((winner, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#daa520] font-medium">{winner.wallet}</p>
                  <p className="text-sm text-gray-400">Place #{index + 1}</p>
                </div>
                <p className="text-xl font-bold text-[#daa520]">{winner.totalWins}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={onClose}
          className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 
                    text-white rounded-lg font-medium transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DrawResults;