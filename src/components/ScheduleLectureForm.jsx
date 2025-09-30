import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ScheduleLectureForm = ({ onSchedule, onClose }) => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSchedule({ title, subject, time });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 sm:p-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">{t('scheduleLecture')}</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">{t('lectureTitle')}</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">{t('subject')}</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">{t('time')}</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          required
        />
      </div>
      <div className="flex justify-end mt-6">
        <button type="button" onClick={onClose} className="mr-4 px-4 py-2 text-gray-600 hover:text-gray-800 text-sm sm:text-base">
          {t('cancel')}
        </button>
        <button type="submit" className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 text-sm sm:text-base">
          {t('schedule')}
        </button>
      </div>
    </form>
  );
};

export default ScheduleLectureForm;
