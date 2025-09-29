import React from 'react';
import { XCircle, Mic, MicOff, Hand } from 'lucide-react';

const LectureControls = ({ onEndLecture, onMuteAll, onRaiseHand }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Lecture Controls</h3>
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={onEndLecture}
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition flex items-center space-x-2">
          <XCircle className="w-5 h-5" />
          <span>End Lecture</span>
        </button>
        <button 
          onClick={onMuteAll}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition flex items-center space-x-2">
          <MicOff className="w-5 h-5" />
          <span>Mute All</span>
        </button>
        <button 
          onClick={onRaiseHand}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition flex items-center space-x-2">
          <Hand className="w-5 h-5" />
          <span>Raise Hand</span>
        </button>
      </div>
    </div>
  );
};

export default LectureControls;
