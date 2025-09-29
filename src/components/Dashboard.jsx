import React, { useState, useEffect } from 'react';
import { Clock, Users, ChevronRight, Download, PlayCircle, Settings, StopCircle, PlusCircle } from 'lucide-react';
import { getClasses } from '../api/classes';
import Stats from './Stats';
import Modal from './Modal';
import ScheduleLectureForm from './ScheduleLectureForm';
import { useLanguage } from '../contexts/LanguageContext';

export default function Dashboard({ userRole, onSelectClass, onViewRecordings, currentUser }) {
  const [classes, setClasses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    getClasses().then(allClasses => {
      if (userRole === 'instructor') {
        const instructorClasses = allClasses.filter(c => c.instructorId === currentUser.id);
        setClasses(instructorClasses);
      } else {
        setClasses(allClasses);
      }
    });
  }, [userRole, currentUser]);

  const handleToggleLive = (classId) => {
    const classToToggle = classes.find(c => c.id === classId);
    if (classToToggle.isLive) {
      setClasses(prevClasses =>
        prevClasses.map(c =>
          c.id === classId ? { ...c, isLive: false } : c
        )
      );
    } else {
      onSelectClass({ ...classToToggle, isLive: true });
    }
  };

  const handleCustomize = (classId) => {
    console.log(`Customizing class ${classId}`);
  };

  const handleScheduleLecture = (newLecture) => {
    const newClass = {
      id: classes.length + 1,
      ...newLecture,
      instructor: currentUser.name,
      instructorId: currentUser.id,
      isLive: false,
      students: 0,
    };
    setClasses(prevClasses => [...prevClasses, newClass]);
  };

  const liveClasses = classes.filter(c => c.isLive);
  const pastClasses = classes.filter(c => !c.isLive);

  const renderClassCard = (classData) => (
    <div 
      key={classData.id}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
    >
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-lg font-bold text-gray-900 cursor-pointer" onClick={() => onSelectClass(classData)}>{classData.title}</h4>
        {classData.isLive && (
          <span className="flex items-center space-x-1 bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span>{t('live')}</span>
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

      {userRole === 'instructor' ? (
        <div className="mt-4 flex space-x-2">
          <button 
            onClick={() => handleToggleLive(classData.id)}
            className={`w-full text-white py-2 rounded-lg font-medium transition flex items-center justify-center space-x-2 ${classData.isLive ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}>
            {classData.isLive ? <StopCircle className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
            <span>{classData.isLive ? t('endLecture') : 'Go Live'}</span>
          </button>
          <button 
            onClick={() => handleCustomize(classData.id)}
            className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-300 transition flex items-center justify-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Customize</span>
          </button>
        </div>
      ) : (
        <button 
          onClick={() => onSelectClass(classData)} 
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center space-x-2"
        >
          <span>{classData.isLive ? t('joinClass') : t('viewRecordings')}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {userRole === 'student' ? t('yourClasses') : currentUser && `Welcome, ${currentUser.name}`}
          </h2>
          <p className="text-gray-600">
            {userRole === 'student' ? t('dashboardTitle') : t('scheduleLecture')}
          </p>
        </div>
        {userRole === 'instructor' && (
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center space-x-2">
            <PlusCircle className="w-5 h-5" />
            <span>{t('scheduleLecture')}</span>
          </button>
        )}
      </div>

      {userRole === 'instructor' && (
        <>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('live')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveClasses.map(renderClassCard)}
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('lectureTitle')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastClasses.map(renderClassCard)}
            </div>
          </div>
        </>
      )}

      {userRole === 'student' && (
        Object.entries(
          classes.reduce((acc, classData) => {
            const { subject } = classData;
            if (!acc[subject]) {
              acc[subject] = [];
            }
            acc[subject].push(classData);
            return acc;
          }, {})
        ).map(([subject, classes]) => (
          <div key={subject} className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{subject}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map(renderClassCard)}
            </div>
          </div>
        ))
      )}

      {userRole !== 'student' && <Stats classes={classes} />}

      <button
        onClick={onViewRecordings}
        className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition flex items-center space-x-2"
      >
        <Download className="w-5 h-5" />
        <span>{t('viewRecordings')}</span>
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ScheduleLectureForm onSchedule={handleScheduleLecture} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}
