import React, { useState, useEffect } from 'react';
import { getNotes } from '../api/notes';
import { Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Notes({ classId }) {
  const [notes, setNotes] = useState([]);
  const { t } = useLanguage();

  useEffect(() => {
    getNotes(classId).then(setNotes);
  }, [classId]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">{t('notes')}</h3>
      <div className="space-y-3">
        {notes.map((note) => (
          <div key={note.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-800 font-medium text-sm sm:text-base">{note.name}</span>
            <a href={note.url} download className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm sm:text-base">
              <Download size={18} />
              <span>{t('download')}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}