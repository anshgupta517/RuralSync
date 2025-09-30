import React from 'react';

export default function NetworkSimulator({ networkSpeed, setNetworkSpeed, isOnline, setIsOnline }) {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-3 sm:p-4 rounded-lg shadow-lg border z-50">
      <h4 className="font-bold mb-2 text-sm sm:text-base">{t('networkSimulator')}</h4>
      <div className="flex items-center space-x-2 mb-2">
        <button
          onClick={() => setNetworkSpeed('2g')}
          className={`px-2 py-1 text-xs sm:text-sm rounded ${networkSpeed === '2g' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          2G
        </button>
        <button
          onClick={() => setNetworkSpeed('3g')}
          className={`px-2 py-1 text-xs sm:text-sm rounded ${networkSpeed === '3g' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          3G
        </button>
        <button
          onClick={() => setNetworkSpeed('4g')}
          className={`px-2 py-1 text-xs sm:text-sm rounded ${networkSpeed === '4g' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          4G
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setIsOnline(!isOnline)}
          className={`p-2 rounded ${isOnline ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
        >
          {isOnline ? <Wifi size={16} /> : <WifiOff size={16} />}
        </button>
        <span className="text-xs sm:text-sm">{isOnline ? t('online') : t('offline')}</span>
      </div>
    </div>
  );
}
