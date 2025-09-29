import React, { useState } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Play, Pause, ChevronRight, MessageSquare } from 'lucide-react';
import { MOCK_SLIDES } from '../data/mockData';

export default function ClassroomView({ classData, userRole, networkSpeed, onBack }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPoll, setShowPoll] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { user: 'System', message: 'Welcome to the class!' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { user: 'You', message: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
      >
        <ChevronRight className="w-4 h-4 rotate-180" />
        <span>Back to Dashboard</span>
      </button>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-4">
          {/* Slide Display */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex flex-col items-center justify-center p-8 border-2 border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                {MOCK_SLIDES[currentSlide].content}
              </h2>
              <p className="text-gray-600 text-center whitespace-pre-line">
                {MOCK_SLIDES[currentSlide].subtitle}
              </p>
            </div>

            {/* Slide Controls */}
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <span className="text-sm text-gray-600">
                Slide {currentSlide + 1} of {MOCK_SLIDES.length}
              </span>
              
              <button
                onClick={() => setCurrentSlide(Math.min(MOCK_SLIDES.length - 1, currentSlide + 1))}
                disabled={currentSlide === MOCK_SLIDES.length - 1}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>

          {/* Audio Controls */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </button>
                
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 mb-1">Audio Stream</div>
                  <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-1/3 animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-gray-700" /> : <Volume2 className="w-5 h-5 text-gray-700" />}
                </button>
                
                {userRole === 'student' && (
                  <button
                    onClick={() => setMicActive(!micActive)}
                    className={`p-3 rounded-lg transition ${
                      micActive ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {micActive ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                  </button>
                )}
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-800">
                🎵 Audio-optimized for {networkSpeed} • Quality: {networkSpeed === '2G' ? '32kbps' : networkSpeed === '3G' ? '48kbps' : '64kbps'}
              </p>
            </div>
          </div>

          {/* Quick Poll */}
          {showPoll && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Poll</h3>
              <p className="text-gray-700 mb-4">How well do you understand this topic?</p>
              <div className="space-y-2">
                {['Fully Understand', 'Partially Understand', 'Need More Explanation'].map((option) => (
                  <button
                    key={option}
                    className="w-full p-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-lg text-left transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Class Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{classData.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{classData.instructor}</p>
            
            <div className="flex items-center justify-between text-sm mb-3">
              <span className="text-gray-600">Active Students</span>
              <span className="font-bold text-gray-900">{classData.students}</span>
            </div>

            {!showPoll && userRole === 'faculty' && (
              <button
                onClick={() => setShowPoll(true)}
                className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
              >
                Start Poll
              </button>
            )}
          </div>

          {/* Chat */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>Q&A Chat</span>
            </h3>
            
            <div className="h-64 overflow-y-auto mb-4 space-y-3">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className="text-sm">
                  <span className="font-medium text-blue-600">{msg.user}:</span>
                  <span className="text-gray-700 ml-2">{msg.message}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
