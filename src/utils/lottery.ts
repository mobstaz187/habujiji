import { MIN_NUMBER, MAX_NUMBER } from '../constants';

export const generateRandomNumbers = (count: number): number[] => {
  const numbers: number[] = [];
  
  while (numbers.length < count) {
    const randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  
  return numbers.sort((a, b) => a - b);
};

export const formatSolana = (amount: number): string => {
  return `${amount} SOL`;
};

export const calculateWinnings = (
  selectedNumbers: number[], 
  winningNumbers: number[],
  betAmount: number
): number => {
  const matches = selectedNumbers.filter(num => winningNumbers.includes(num)).length;
  
  switch (matches) {
    case 3: return betAmount * 100; // Jackpot: 100x bet
    case 2: return betAmount * 10;  // 2 matches: 10x bet
    case 1: return betAmount * 1.5; // 1 match: 1.5x bet
    default: return 0;
  }
};