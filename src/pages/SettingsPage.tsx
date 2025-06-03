import React from 'react';
import { Bell, Moon, Volume2, Shield } from 'lucide-react';

const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-amber-200">Settings</h2>
      
      <div className="glass-panel p-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Preferences</h3>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-2 rounded-lg mr-4">
                  <Bell size={24} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-amber-200 font-medium">Notifications</p>
                  <p className="text-amber-100/60 text-sm">Get alerts for draws and wins</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-2 rounded-lg mr-4">
                  <Moon size={24} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-amber-200 font-medium">Dark Mode</p>
                  <p className="text-amber-100/60 text-sm">Toggle dark/light theme</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-2 rounded-lg mr-4">
                  <Volume2 size={24} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-amber-200 font-medium">Sound Effects</p>
                  <p className="text-amber-100/60 text-sm">Enable game sounds</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Security</h3>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-2 rounded-lg mr-4">
                  <Shield size={24} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-amber-200 font-medium">Two-Factor Authentication</p>
                  <p className="text-amber-100/60 text-sm">Add an extra layer of security</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors">
                Enable
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;