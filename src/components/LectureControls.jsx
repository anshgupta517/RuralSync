import React from 'react';
import { XCircle, Mic, MicOff, Hand } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LectureControls = ({ onEndLecture, onMuteAll, onRaiseHand }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6">{t('lectureControls')}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button 
          onClick={onEndLecture}
          className="bg-red-600 text-white px-4 py-3 sm:py-2 rounded-lg font-medium hover:bg-red-700 transition flex items-center justify-center space-x-2">
          <XCircle className="w-5 h-5" />
          <span className="hidden sm:inline">{t('endLecture')}</span>
        </button>
        <button 
          onClick={onMuteAll}
          className="bg-yellow-500 text-white px-4 py-3 sm:py-2 rounded-lg font-medium hover:bg-yellow-600 transition flex items-center justify-center space-x-2">
          <MicOff className="w-5 h-5" />
          <span className="hidden sm:inline">{t('muteAll')}</span>
        </button>
        <button 
          onClick={onRaiseHand}
          className="bg-blue-500 text-white px-4 py-3 sm:py-2 rounded-lg font-medium hover:bg-blue-600 transition flex items-center justify-center space-x-2">
          <Hand className="w-5 h-5" />
          <span className="hidden sm:inline">{t('raiseHand')}</span>
        </button>
      </div>
    </div>
  );
};

export default LectureControls;
