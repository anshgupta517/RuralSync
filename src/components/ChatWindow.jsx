import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const ChatWindow = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2" />
        Chat
      </h4>
      <div className="h-48 overflow-y-auto border rounded-lg p-4 mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold">{message.sender}: </span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
        />
        <button 
          onClick={handleSendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
