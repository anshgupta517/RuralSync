import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const VideoPlayer = ({ videoId, title }) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-video bg-gray-900 relative">
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?si=vGQ2sru95FDuQJCF`}
            title="YouTube video player"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white p-4">
            <p className="text-lg sm:text-xl text-center">{t('noVideoAvailable')}</p>
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">{title || t('demoVideo')}</h3>
        <p className="text-gray-600 text-sm mt-1">{t('educationalContent')}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;