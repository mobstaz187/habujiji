import { prizePoolConfig } from '../config/prize-pool';
import { formatSolana } from './lottery';

const HELIUS_RPC = `https://rpc.helius.xyz/?api-key=${prizePoolConfig.heliusApiKey}`;

export const fetchWalletBalance = async () => {
  try {
    const response = await fetch(HELIUS_RPC, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'my-id',
        method: 'getBalance',
        params: [prizePoolConfig.walletAddress],
      }),
    });
    
    const data = await response.json();
    return data.result.value / 1e9; // Convert lamports to SOL
  } catch (error) {
    console.error('Error fetching wallet balance:', error);
    return 0;
  }
};

export const fetchSolPrice = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
    const data = await response.json();
    return data.solana.usd;
  } catch (error) {
    console.error('Error fetching SOL price:', error);
    return 0;
  }
};