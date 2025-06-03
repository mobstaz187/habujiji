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