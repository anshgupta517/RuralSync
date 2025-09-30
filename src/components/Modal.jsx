import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Modal = ({ isOpen, onClose, children }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold w-8 h-8 flex items-center justify-center">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
