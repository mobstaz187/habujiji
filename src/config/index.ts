import { Winner } from '../types';

export const config = {
  // Site Configuration
  site: {
    name: 'LiveRoll',
    title: 'Where Fortune Lives',
    tokenSymbol: '$ROLL',
  },

  // Contract Configuration
  contract: {
    address: '5xKLmNS8YFr3DdDqVKKBJvqZGNBtF7pTSfEqP5UzXywY',
    minimumTokens: 10000, // Minimum tokens required for participation
  },

  // Social Media Links
  social: {
    twitter: 'https://twitter.com/liveroll',
  },

  // Prize Pool Configuration
  prizePool: {
    walletAddress: 'vEe5tMLKuUXHm6zMZisBiVDMdDfpu4vrZDtrCPyXpot',
    heliusApiKey: '75100757-d246-4d7a-a1af-697649290166',
    updateInterval: 60000, // Update interval in milliseconds (1 minute)
  },

  // Winners Configuration
  winners: {
    blessed: [
      {
        wallet: "Oracle ***321",
        totalWins: "2,500.0 SOL",
        gamesWon: 15,
        timestamp: "2024-03-15T12:30:00Z",
        transactionId: "5xKLmNS8YFr3DdDqVKKBJvqZGNBtF7pTSfEqP5UzXywYqQJBfh8LzRSbEGGaKZBvMHxJTGqF2hjhzMQFnLq1JVVH"
      },
      {
        wallet: "Prophet ***555",
        totalWins: "3,750.0 SOL",
        gamesWon: 20,
        timestamp: "2024-03-15T12:45:00Z",
        transactionId: "6yMNpKS9ZFr4EdDqVKKBJvqZGNBtF7pTSfEqP5UzXywYqQJBfh8LzRSbEGGaKZBvMHxJTGqF2hjhzMQFnLq1JVVH"
      }
    ] as Winner[],

    recent: [
      {
        wallet: "Wallet ***789",
        totalWins: "1,245.5 SOL",
        gamesWon: 12,
        timestamp: "2024-03-15T12:00:00Z",
        transactionId: "4ueHzkS7YFr2DdDqVKKBJvqZGNBtF7pTSfEqP5UzXywYqQJBfh8LzRSbEGGaKZBvMHxJTGqF2hjhzMQFnLq1JVVH"
      },
      {
        wallet: "Wallet ***456",
        totalWins: "985.0 SOL",
        gamesWon: 8,
        timestamp: "2024-03-15T11:30:00Z",
        transactionId: "3vGHxKS7YFr2DdDqVKKBJvqZGNBtF7pTSfEqP5UzXywYqQJBfh8LzRSbEGGaKZBvMHxJTGqF2hjhzMQFnLq1JVVH"
      },
      {
        wallet: "Wallet ***123",
        totalWins: "756.5 SOL",
        gamesWon: 6,
        timestamp: "2024-03-15T11:00:00Z",
        transactionId: "2kLHxKS7YFr2DdDqVKKBJvqZGNBtF7pTSfEqP5UzXywYqQJBfh8LzRSbEGGaKZBvMHxJTGqF2hjhzMQFnLq1JVVH"
      }
    ] as Winner[],
  },
};