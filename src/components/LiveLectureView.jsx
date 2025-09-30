import React, { useState } from 'react';
import { Users, MessageSquare, XCircle } from 'lucide-react';
import StudentList from './StudentList';
import ChatWindow from './ChatWindow';
import LectureControls from './LectureControls';
import { useLanguage } from '../contexts/LanguageContext';

const LiveLectureView = ({ classData, onEndLecture, currentUser }) => {
  const [students, setStudents] = useState(classData.students);
  const [messages, setMessages] = useState(classData.chatMessages);
  const [raisedHands, setRaisedHands] = useState([]);
  const { t } = useLanguage();

  const handleMuteStudent = (studentId) => {
    setStudents(prevStudents =>
      prevStudents.map(s =>
        s.id === studentId ? { ...s, isMuted: !s.isMuted } : s
      )
    );
  };

  const handleSendMessage = (newMessage) => {
    const message = {
      sender: 'Instructor',
      text: newMessage,
    };
    setMessages(prevMessages => [...prevMessages, message]);
  };

  const handleRaiseHand = (studentId) => {
    setRaisedHands(prevRaisedHands => [...prevRaisedHands, studentId]);
  };

  const handleMuteAll = () => {
    setStudents(prevStudents =>
      prevStudents.map(s => ({ ...s, isMuted: true }))
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 aspect-video bg-black rounded-lg shadow-lg flex items-center justify-center">
          {/* Placeholder for video stream */}
          <div className="text-white text-2xl">Video Stream</div>
        </div>

        <div className="space-y-8">
          <LectureControls 
            onEndLecture={onEndLecture} 
            onMuteAll={handleMuteAll} 
            onRaiseHand={() => handleRaiseHand(currentUser.id)} 
          />
          <StudentList students={classData.students} onMuteStudent={handleMuteStudent} />
          <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default LiveLectureView;
