import React, { useState, useEffect } from 'react';
import { getNotes } from '../api/notes';
import { Download } from 'lucide-react';

export default function Notes({ classId }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes(classId).then(setNotes);
  }, [classId]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Downloadable Notes</h3>
      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-800 font-medium">{note.name}</span>
            <a href={note.url} download className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <Download size={18} />
              <span>Download</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}