import React, { useState, useEffect } from 'react';
import LoginScreen from './src/components/LoginScreen';
import Header from './src/components/Header';
import Dashboard from './src/components/Dashboard';
import ClassroomView from './src/components/ClassroomView';
import RecordingsView from './src/components/RecordingsView';
import getBandwidth from './src/utils/bandwidth';

export default function RuralClassroomApp() {
  const [userRole, setUserRole] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [selectedClass, setSelectedClass] = useState(null);
  const [networkSpeed, setNetworkSpeed] = useState('3g');
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    getBandwidth().then(setNetworkSpeed);
  }, []);

  if (currentView === 'login') {
    return <LoginScreen onLogin={(role) => {
      setUserRole(role);
      setCurrentView('dashboard');
    }} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userRole={userRole} 
        networkSpeed={networkSpeed}
        isOnline={isOnline}
        onLogout={() => {
          setCurrentView('login');
          setUserRole(null);
        }}
        setNetworkSpeed={setNetworkSpeed}
      />
      
      {currentView === 'dashboard' && (
        <Dashboard 
          userRole={userRole}
          onSelectClass={(classData) => {
            setSelectedClass(classData);
            setCurrentView('classroom');
          }}
          onViewRecordings={() => setCurrentView('recordings')}
        />
      )}

      {currentView === 'classroom' && (
        <ClassroomView 
          classData={selectedClass}
          userRole={userRole}
          networkSpeed={networkSpeed}
          onBack={() => setCurrentView('dashboard')}
        />
      )}

      {currentView === 'recordings' && (
        <RecordingsView 
          onBack={() => setCurrentView('dashboard')}
          networkSpeed={networkSpeed}
        />
      )}


    </div>
  );
}
