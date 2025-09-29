import React, { useEffect } from 'react';
import { Wifi, WifiOff, Signal } from 'lucide-react';
import { use } from 'react';

export default function Header({ userRole, networkSpeed, isOnline, onLogout, setNetworkSpeed }) {
  const [dynamicNetworkSpeed, setDynamicNetworkSpeed] = React.useState(Number);

  
  

  const getSpeedColor = () => {


    switch(networkSpeed) {
      case '2g': return 'text-red-600';
      case '3g': return 'text-yellow-600';
      case '4g': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  useEffect(() => {
  const dynamicNetworkSpeed = () => {
    setTimeout(() => {
      const speeds = ['2', '3', '4'];
      const randomSpeed = speeds[Math.floor(Math.random() * speeds.length)] + ' mb/s';
      setDynamicNetworkSpeed(randomSpeed);
    }, 2000);
    return dynamicNetworkSpeed;
  }
  dynamicNetworkSpeed();
}, [dynamicNetworkSpeed]);

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

          <div>
            <span>Current Speed:</span>
            <span className={`ml-1 font-medium ${getSpeedColor()}`}> {dynamicNetworkSpeed}</span>
          </div>
          <span>Simulate Network</span>
          <div className="text-sm w-20 flex items-center justify-center border border-gray-700 rounded-md px-2 py-1">
            <select value={networkSpeed} onChange={(e) => setNetworkSpeed(e.target.value)} className="font-medium text-gray-600 bg-transparent border-none">
              <option value="2g">2G</option>
              <option value="3g">3G</option>
              <option value="4g">4G</option>
            </select>
          </div>
          <button
            onClick={onLogout}
            className="text-xl text-gray-600 hover:text-gray-900 font-medium" 
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
