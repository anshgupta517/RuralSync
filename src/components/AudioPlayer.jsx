import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const { t } = useLanguage();

  // Sample audio data - in a real app, this would come from props or API
  const audioData = {
    title: t('sampleLectureAudio'),
    duration: '15:30',
    fileSize: '2.4 MB',
    description: t('educationalLectureRecording')
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">{t('audioLecture')}</h3>
      
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <div className="mb-4 sm:mb-0">
          <h4 className="font-medium text-gray-900 text-sm sm:text-base">{audioData.title}</h4>
          <p className="text-sm text-gray-600">{audioData.description}</p>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div 
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: isPlaying ? '30%' : '0%' }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>0:00</span>
          <span>{audioData.duration}</span>
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <button 
            onClick={togglePlay}
            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition flex-shrink-0"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
          </button>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleMute}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 sm:w-24"
            />
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          {audioData.fileSize}
        </div>
      </div>
      
      {/* Simulated audio element */}
      <audio ref={audioRef} className="hidden" />
    </div>
  );
};

export default AudioPlayer;