
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Video, BookOpen } from 'lucide-react';

const Stats = ({ classes }) => {
  const totalClasses = classes.length;
  const totalStudents = classes.reduce((sum, cls) => sum + cls.students, 0);
  const averageStudents = totalClasses > 0 ? (totalStudents / totalClasses).toFixed(1) : 0;

  const chartData = classes.map(cls => ({
    name: cls.title,
    students: cls.students,
  }));

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Instructor Stats</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Video className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Classes</p>
            <p className="text-2xl font-bold text-gray-900">{totalClasses}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Students</p>
            <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <BookOpen className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Avg. Students/Class</p>
            <p className="text-2xl font-bold text-gray-900">{averageStudents}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-bold text-gray-800 mb-4">Students per Class</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="students" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;
