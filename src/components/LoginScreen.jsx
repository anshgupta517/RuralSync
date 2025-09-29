import React, { useState } from 'react';
import { Wifi, Users, BarChart3 } from 'lucide-react';

export default function LoginScreen({ onLogin }) {
  const [role, setRole] = useState('student');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Wifi className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rural Classroom</h1>
          <p className="text-gray-600">Low-bandwidth virtual learning</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Role</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setRole('student')}
                className={`p-4 border-2 rounded-lg transition ${
                  role === 'student' 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="font-medium">Student</div>
              </button>
              <button
                onClick={() => setRole('faculty')}
                className={`p-4 border-2 rounded-lg transition ${
                  role === 'faculty' 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <BarChart3 className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="font-medium">Faculty</div>
              </button>
            </div>
          </div>

          <button
            onClick={() => onLogin(role)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Enter as {role === 'student' ? 'Student' : 'Faculty'}
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
