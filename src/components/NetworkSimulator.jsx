import React from 'react';

export default function NetworkSimulator({ networkSpeed, setNetworkSpeed, isOnline, setIsOnline }) {
  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 border-2 border-gray-200 max-w-xs">
      <div className="text-xs font-bold text-gray-600 mb-3">DEMO: Network Simulator</div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Connection:</span>
          <button
            onClick={() => setIsOnline(!isOnline)}
            className={`px-3 py-1 rounded text-xs font-medium ${
              isOnline ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {isOnline ? 'Online' : 'Offline'}
          </button>
        </div>

        {isOnline && (
          <div className="flex space-x-2">
            {['2G', '3G', '4G'].map((speed) => (
              <button
                key={speed}
                onClick={() => setNetworkSpeed(speed)}
                className={`flex-1 py-1 rounded text-xs font-medium transition ${
                  networkSpeed === speed
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {speed}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
