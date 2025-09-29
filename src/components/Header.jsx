import React from 'react';
import { Wifi, WifiOff, Signal } from 'lucide-react';

export default function Header({ userRole, networkSpeed, isOnline, onLogout }) {
  const getSpeedColor = () => {
    switch(networkSpeed) {
      case '2G': return 'text-red-600';
      case '3G': return 'text-yellow-600';
      case '4G': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Wifi className="w-6 h-6 text-blue-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Rural Classroom</h1>
            <p className="text-xs text-gray-500">{userRole === 'student' ? 'Student Portal' : 'Faculty Portal'}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {isOnline ? (
              <Signal className={`w-5 h-5 ${getSpeedColor()}`} />
            ) : (
              <WifiOff className="w-5 h-5 text-red-600" />
            )}
            <span className={`text-sm font-medium ${getSpeedColor()}`}>
              {isOnline ? networkSpeed : 'Offline'}
            </span>
          </div>
          <button
            onClick={onLogout}
            className="text-sm text-gray-600 hover:text-gray-900 font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
