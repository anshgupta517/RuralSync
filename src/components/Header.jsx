import React, { useState } from 'react';
import { Sun, Moon, Menu, X, BookOpen } from 'lucide-react';
import { Wifi, WifiOff, Signal, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header({ user, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();



  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 ml-2">Rural Classroom</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {user && <span className="text-gray-700 font-medium">Welcome, {user.name}</span>}
            <button onClick={toggleLanguage} className="text-gray-500 hover:text-gray-700 font-medium">
              {language === 'en' ? 'हिंदी' : 'English'}
            </button>
            <button onClick={onLogout} className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              {t('logout')}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {user && <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">Welcome, {user.name}</span>}
            <button onClick={toggleLanguage} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              {language === 'en' ? 'हिंदी' : 'English'}
            </button>
            <button onClick={onLogout} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-800 hover:bg-red-50">
              {t('logout')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
