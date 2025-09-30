import React, { useState } from 'react';
import { Wifi, Users, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LoginScreen({ onLogin }) {
  const [role, setRole] = useState('student');
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 max-w-md w-full">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-4">
            <Wifi className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{t('appTitle')}</h1>
          <p className="text-gray-600">{t('loginTitle')}</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('loginStudent')}</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setRole('student')}
                className={`p-3 sm:p-4 border-2 rounded-lg transition ${
                  role === 'student' 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="font-medium text-sm sm:text-base">{t('loginStudent')}</div>
              </button>
              <button
                onClick={() => setRole('instructor')}
                className={`p-3 sm:p-4 border-2 rounded-lg transition ${
                  role === 'instructor' 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <BarChart3 className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="font-medium text-sm sm:text-base">{t('loginInstructor')}</div>
              </button>
            </div>
          </div>

          <button
            onClick={() => onLogin(role)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition text-base sm:text-lg"
          >
            {role === 'student' ? t('loginStudent') : t('loginInstructor')}
          </button>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800 font-medium mb-1">✓ Works on 2G/3G networks</p>
            <p className="text-sm text-green-800 font-medium mb-1">✓ Audio-first approach</p>
            <p className="text-sm text-green-800 font-medium">✓ Offline download support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
