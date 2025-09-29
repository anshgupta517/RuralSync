import React, { useState } from 'react';
import LoginScreen from './src/components/LoginScreen';
import Header from './src/components/Header';
import Dashboard from './src/components/Dashboard';
import ClassroomView from './src/components/ClassroomView';
import RecordingsView from './src/components/RecordingsView';
import NetworkSimulator from './src/components/NetworkSimulator';

export default function RuralClassroomApp() {
  const [userRole, setUserRole] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [selectedClass, setSelectedClass] = useState(null);
  const [networkSpeed, setNetworkSpeed] = useState('3G');
  const [isOnline, setIsOnline] = useState(true);

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

      <NetworkSimulator 
        networkSpeed={networkSpeed}
        setNetworkSpeed={setNetworkSpeed}
        isOnline={isOnline}
        setIsOnline={setIsOnline}
      />
    </div>
  );
}
