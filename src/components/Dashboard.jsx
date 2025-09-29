import React, { useState, useEffect } from 'react';
import { Clock, Users, ChevronRight, Download } from 'lucide-react';
import { getClasses } from '../api/classes';

export default function Dashboard({ userRole, onSelectClass, onViewRecordings }) {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getClasses().then(setClasses);
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {userRole === 'student' ? 'My Classes' : 'Your Sessions'}
        </h2>
        <p className="text-gray-600">
          {userRole === 'student' ? 'Join live classes or access recordings' : 'Manage your teaching sessions'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {classes.map(classData => (
          <div 
            key={classData.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer"
            onClick={() => onSelectClass(classData)}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">{classData.title}</h3>
              {classData.isLive && (
                <span className="flex items-center space-x-1 bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  <span>LIVE</span>
                </span>
              )}
            </div>
            
            <p className="text-gray-600 text-sm mb-3">{classData.instructor}</p>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2 text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{classData.time}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Users className="w-4 h-4" />
                <span>{classData.students}</span>
              </div>
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center space-x-2">
              <span>{classData.isLive ? 'Join Now' : 'View Details'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={onViewRecordings}
        className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition flex items-center space-x-2"
      >
        <Download className="w-5 h-5" />
        <span>View All Recordings</span>
      </button>
    </div>
  );
}
