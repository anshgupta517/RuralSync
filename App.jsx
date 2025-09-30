import React, { useState, useEffect } from 'react';
import LoginScreen from './src/components/LoginScreen';
import Header from './src/components/Header';
import Dashboard from './src/components/Dashboard';
import ClassroomView from './src/components/ClassroomView';
import RecordingsView from './src/components/RecordingsView';
import LiveLectureView from './src/components/LiveLectureView';
import getBandwidth from './src/utils/bandwidth';
import { currentUser } from './src/data/mockData';
import { LanguageProvider } from './src/contexts/LanguageContext';

export default function RuralClassroomApp() {
  const [userRole, setUserRole] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [selectedClass, setSelectedClass] = useState(null);
  const [liveLecture, setLiveLecture] = useState(null);
  const [networkSpeed, setNetworkSpeed] = useState('3g');
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    getBandwidth().then(setNetworkSpeed);
  }, []);

  const handleSelectClass = (classData) => {
    if (classData.isLive && userRole === 'instructor') {
      setLiveLecture(classData);
      setCurrentView('live-lecture');
    } else {
      setSelectedClass(classData);
      setCurrentView('classroom');
    }
  };

  const handleEndLecture = () => {
    setLiveLecture(null);
    setCurrentView('dashboard');
  };

  if (currentView === 'login') {
    return (
      <LanguageProvider>
        <LoginScreen onLogin={(role) => {
          setUserRole(role);
          setCurrentView('dashboard');
        }} />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
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
            onSelectClass={handleSelectClass}
            onViewRecordings={() => setCurrentView('recordings')}
            currentUser={userRole === 'instructor' ? currentUser : null}
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

        {currentView === 'live-lecture' && (
          <LiveLectureView 
            classData={liveLecture}
            onEndLecture={handleEndLecture}
            currentUser={userRole === 'instructor' ? currentUser : null}
          />
        )}

      </div>
    </LanguageProvider>
  );
}
