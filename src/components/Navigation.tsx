import React from 'react';
import { Home, Trophy } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'leaderboard', label: 'Winners', icon: Trophy },
  ];

  return (
    <nav className="glass-panel py-2 px-2 mx-auto max-w-xs rounded-full mb-8">
      <div className="flex justify-center gap-2 items-center">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`
              flex items-center space-x-2 px-3 py-1.5 rounded-xl transition-all duration-300
              ${activeTab === id 
                ? 'bg-gradient-to-r from-[#daa520] to-[#cd7f32] text-white font-medium scale-105' 
                : 'text-[#daa520] hover:text-white'}
            `}
          >
            <Icon size={20} />
            <span className="inline">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;