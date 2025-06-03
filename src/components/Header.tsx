import React, { useState } from 'react';
import { Zap, HelpCircle, Copy, Check, Coins } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [copied, setCopied] = useState(false);
  const contractAddress = "5xKLmNS8YFr3DdDqVKKBJvqZGNBtF7pTSfEqP5UzXywY";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <header className="py-4 px-6 bg-gray-900/60 backdrop-blur-md border-b border-[#daa520]/20 sticky top-0 z-30">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Zap size={32} className="text-[#daa520]" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold hermes-title bg-gradient-to-r from-[#daa520] via-[#cd7f32] to-[#daa520] bg-clip-text text-transparent">
                LiveBall
              </span>
              <span className="text-sm font-medium text-[#daa520]/80">$ROLL</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2 bg-[#daa520]/10 px-4 py-2 rounded-lg">
              <Coins size={16} className="text-[#daa520]" />
              <button
                onClick={copyToClipboard}
                className="text-[#daa520] text-sm font-medium flex items-center gap-2 hover:text-[#cd7f32] transition-colors"
              >
                <span className="font-mono">{contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}</span>
                {copied ? (
                  <Check size={16} className="text-green-500" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            <button
              onClick={() => setShowHowToPlay(true)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#daa520]/10 hover:bg-[#daa520]/20 transition-colors"
            >
              <HelpCircle size={20} className="text-[#daa520]" />
              <span className="text-[#daa520] font-medium hidden sm:inline">How to Play</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {showHowToPlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-start justify-center p-4 overflow-y-auto"
            style={{ 
              paddingTop: '10vh',
              zIndex: 9999
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowHowToPlay(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-900 p-8 rounded-xl max-w-2xl w-full mb-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold text-[#daa520] mb-6">How to Play</h2>
              
              <div className="space-y-8 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-[#daa520] mb-3">1. Hold Tokens</h3>
                  <p className="text-lg leading-relaxed">
                    Simply hold $ROLL tokens in your wallet to be eligible for hourly draws. 
                    The more tokens you hold, the higher your chances of winning!
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#daa520] mb-3">2. Automatic Entry</h3>
                  <p className="text-lg leading-relaxed">
                    No need to manually enter - your wallet is automatically included in every draw 
                    as long as you hold the minimum required tokens.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#daa520] mb-3">3. Prize Distribution</h3>
                  <ul className="list-disc pl-6 space-y-3 text-lg">
                    <li>Hourly draws with guaranteed winners</li>
                    <li>Prize pool increases with token trading volume</li>
                    <li>Special jackpot events for major holders</li>
                  </ul>
                </div>

                <div className="bg-[#daa520]/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#daa520] mb-3">Minimum Requirements</h3>
                  <p className="text-lg leading-relaxed">
                    Hold at least 1000 $ROLL tokens to be eligible for draws.
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowHowToPlay(false)}
                className="mt-8 px-6 py-3 bg-[#daa520] text-black rounded-xl font-bold text-lg hover:bg-[#cd7f32] transition-colors w-full"
              >
                Got it!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;