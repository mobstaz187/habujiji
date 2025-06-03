import React, { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';
import { fetchWalletBalance, fetchSolPrice } from '../utils/api';
import { formatSolana } from '../utils/lottery';
import { prizePoolConfig } from '../config/prize-pool';

const PrizePool: React.FC = () => {
  const [prizePool, setPrizePool] = useState<number>(0);
  const [solPrice, setSolPrice] = useState<number>(0);

  useEffect(() => {
    const fetchPrizePool = async () => {
      const [balance, price] = await Promise.all([
        fetchWalletBalance(),
        fetchSolPrice()
      ]);
      setPrizePool(Math.max(0, balance - 3)); // Subtract 3 SOL but never go below 0
      setSolPrice(price);
    };

    fetchPrizePool();
    const interval = setInterval(fetchPrizePool, prizePoolConfig.updateInterval);
    return () => clearInterval(interval);
  }, []);

  const usdValue = (prizePool * solPrice).toFixed(2);

  return (
    <div className="glass-panel p-6 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Coins size={24} className="text-[#daa520]" />
        <h2 className="text-2xl font-bold text-[#daa520] hermes-title">Prize Pool</h2>
      </div>
      <div className="text-4xl font-bold text-[#daa520] divine-shimmer mb-2">
        {formatSolana(prizePool)}
      </div>
      <p className="text-lg text-[#daa520]/60">≈ ${usdValue} USD</p>
    </div>
  );
};

export default PrizePool;