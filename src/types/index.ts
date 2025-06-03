export type Bet = {
  numbers: number[];
  amount: number;
  id: string;
  timestamp: number;
};

export type DrawResult = {
  winningNumbers: number[];
  timestamp: number;
  id: string;
};

export type Winner = {
  wallet: string;
  totalWins: string;
  gamesWon: number;
  timestamp: string;
  transactionId?: string;
};