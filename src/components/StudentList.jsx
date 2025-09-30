import React from 'react';
import { User, Mic, MicOff } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const StudentList = ({ students, onMuteStudent }) => {
  const { t } = useLanguage();
  return (
    <div>
      <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-4 flex items-center">
        <User className="w-5 h-5 mr-2" />
        {t('students')} ({students})
      </h4>
      <ul className="space-y-2 h-48 sm:h-64 overflow-y-auto">
        {Array.from({ length: students }).map((_, i) => (
          <li key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <span className="text-gray-700 text-sm sm:text-base">{t('students')} {i + 1}</span>
            <div className="flex space-x-2">
              <button onClick={() => onMuteStudent(i + 1)} className="text-gray-500 hover:text-blue-600">
                <Mic className="w-4 h-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
