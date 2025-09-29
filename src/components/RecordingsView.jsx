import React, { useState, useEffect } from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { getRecordings } from '../api/recordings';

export default function RecordingsView({ onBack, networkSpeed }) {
  const [recordings, setRecordings] = useState([]);
  const [downloading, setDownloading] = useState({});

  useEffect(() => {
    getRecordings().then(setRecordings);
  }, []);

  const handleDownload = (id) => {
    setDownloading({ ...downloading, [id]: true });
    setTimeout(() => {
      setDownloading({ ...downloading, [id]: false });
      alert('Download complete! (Simulated)');
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
      >
        <ChevronRight className="w-4 h-4 rotate-180" />
        <span>Back to Dashboard</span>
      </button>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recorded Lectures</h2>

      <div className="bg-white rounded-lg shadow-md divide-y">
        {recordings.map((recording) => (
          <div key={recording.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{recording.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>Duration: {recording.duration}</span>
                <span>Size: {recording.size}</span>
                <span>Date: {recording.date}</span>
              </div>
            </div>

            <button
              onClick={() => handleDownload(recording.id)}
              disabled={downloading[recording.id]}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              <span>{downloading[recording.id] ? 'Downloading...' : 'Download'}</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          💡 Tip: Download during off-peak hours (10 PM - 6 AM) for faster speeds and lower data costs
        </p>
      </div>
    </div>
  );
}
