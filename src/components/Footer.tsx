import React, { useState } from 'react';
import { Twitter, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  return (
    <footer className="py-6 px-6 bg-gray-900/50 backdrop-blur-md border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center gap-4">
            <button
              onClick={() => setShowLogo(true)}
              className="group relative w-10 h-10 flex items-center justify-center bg-[#daa520]/10 rounded-lg 
                       hover:bg-[#daa520]/20 transition-colors duration-300"
              title="View Logo"
            >
              <Zap size={24} className="text-[#daa520] group-hover:scale-110 transition-transform duration-300" />
            </button>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LiveRoll. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Twitter size={20} />
            </a>
            <button 
              onClick={() => setShowTerms(true)} 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Terms
            </button>
            <button 
              onClick={() => setShowPrivacy(true)}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Privacy
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showLogo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 cursor-pointer"
            onClick={() => setShowLogo(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-900 p-8 rounded-xl max-w-md w-full text-center"
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-[#daa520]/20 blur-2xl rounded-full"></div>
                <div className="relative flex items-center justify-center w-full h-full bg-gray-900/80 rounded-full">
                  <Zap size={128} className="text-[#daa520] animate-pulse" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTerms && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowTerms(false);
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-900 p-6 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-[#daa520] mb-4">Terms of Service</h2>
              <div className="space-y-4 text-gray-300">
                <p>Welcome to LiveRoll. By using our service, you agree to these terms.</p>
                
                <h3 className="text-lg font-semibold text-[#daa520]">Verifiable Random Function (VRF)</h3>
                <p>LiveRoll utilizes Chainlink VRF (Verifiable Random Function) to ensure completely fair and transparent random number generation. Each draw is cryptographically proven to be random and tamper-proof, with verifiable results on the blockchain.</p>
                
                <h3 className="text-lg font-semibold text-[#daa520]">Fair Play</h3>
                <p>Our VRF implementation guarantees that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All numbers are generated through cryptographic proof</li>
                  <li>Results cannot be manipulated by any party</li>
                  <li>Each draw's randomness is verifiable on-chain</li>
                </ul>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowTerms(false)}
                className="mt-6 px-4 py-2 bg-[#daa520] text-black rounded-lg hover:bg-[#cd7f32] transition-colors"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPrivacy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowPrivacy(false);
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-900 p-6 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-[#daa520] mb-4">Privacy Policy</h2>
              <div className="space-y-4 text-gray-300">
                <p>Your privacy is important to us. This policy outlines how we handle your data.</p>
                
                <h3 className="text-lg font-semibold text-[#daa520]">Random Number Generation</h3>
                <p>Our VRF (Verifiable Random Function) system ensures:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Complete transparency in random number generation</li>
                  <li>Verifiable fairness through blockchain technology</li>
                  <li>No manipulation of draw results</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-[#daa520]">Data Collection</h3>
                <p>We collect minimal data necessary for the operation of the platform. All game results are publicly verifiable through our VRF system while maintaining user privacy.</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPrivacy(false)}
                className="mt-6 px-4 py-2 bg-[#daa520] text-black rounded-lg hover:bg-[#cd7f32] transition-colors"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;