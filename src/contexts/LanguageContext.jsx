import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('hi'); // Default language is Hindi

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'hi' : 'en');
  };

  const translations = {
    en: {
      // English translations
      appTitle: "Rural Classroom",
      studentPortal: "Student Portal",
      facultyPortal: "Faculty Portal",
      logout: "Logout",
      networkSpeed: "Network Speed",
      simulateNetwork: "Simulate Network",
      currentSpeed: "Current Speed",
      offline: "Offline",
      loginTitle: "Welcome to Rural Classroom",
      loginStudent: "Login as Student",
      loginInstructor: "Login as Instructor",
      dashboardTitle: "Dashboard",
      yourClasses: "Your Classes",
      scheduleLecture: "Schedule a Lecture",
      viewRecordings: "View Recordings",
      classTitle: "Class",
      live: "LIVE",
      joinClass: "Join Class",
      startClass: "Start Class",
      recordingsTitle: "Recorded Lectures",
      back: "Back",
      lectureTitle: "Lecture",
      endLecture: "End Lecture",
      chat: "Chat",
      send: "Send",
      notes: "Notes",
      save: "Save",
      stats: "Statistics",
      students: "Students",
      attendance: "Attendance",
      performance: "Performance",
      download: "Download",
      previous: "Previous",
      next: "Next",
      muteAll: "Mute All",
      raiseHand: "Raise Hand",
      subject: "Subject",
      time: "Time",
      cancel: "Cancel",
      schedule: "Schedule",
      noVideoAvailable: "No video available",
      demoVideo: "Demo Video",
      educationalContent: "Educational content for demonstration",
      interactiveWhiteboard: "Interactive Whiteboard",
      drawAndExplain: "Draw and explain concepts",
      pen: "Pen",
      rectangle: "Rectangle",
      circle: "Circle",
      text: "Text",
      eraser: "Eraser",
      clear: "Clear",
      sampleLectureAudio: "Sample Lecture Audio",
      educationalLectureRecording: "Educational lecture recording for demonstration",
      audioLecture: "Audio Lecture"
    },
    hi: {
      // Hindi translations
      appTitle: "ग्रामीण कक्षा",
      studentPortal: "छात्र पोर्टल",
      facultyPortal: "संकाय पोर्टल",
      logout: "लॉगआउट",
      networkSpeed: "नेटवर्क गति",
      simulateNetwork: "नेटवर्क का अनुरूपण करें",
      currentSpeed: "वर्तमान गति",
      offline: "ऑफलाइन",
      loginTitle: "ग्रामीण कक्षा में आपका स्वागत है",
      loginStudent: "छात्र के रूप में लॉगिन करें",
      loginInstructor: "प्रशिक्षक के रूप में लॉगिन करें",
      dashboardTitle: "डैशबोर्ड",
      yourClasses: "आपकी कक्षाएं",
      scheduleLecture: "एक व्याख्यान निर्धारित करें",
      viewRecordings: "रिकॉर्डिंग देखें",
      classTitle: "कक्षा",
      live: "लाइव",
      joinClass: "कक्षा में शामिल हों",
      startClass: "कक्षा शुरू करें",
      recordingsTitle: "रिकॉर्ड किए गए व्याख्यान",
      back: "वापस",
      lectureTitle: "व्याख्यान",
      endLecture: "व्याख्यान समाप्त करें",
      chat: "चैट",
      send: "भेजें",
      notes: "नोट्स",
      save: "सहेजें",
      stats: "आँकड़े",
      students: "छात्र",
      attendance: "उपस्थिति",
      performance: "प्रदर्शन",
      download: "डाउनलोड",
      previous: "पिछला",
      next: "अगला",
      muteAll: "सभी को म्यूट करें",
      raiseHand: "हाथ उठाएं",
      subject: "विषय",
      time: "समय",
      cancel: "रद्द करें",
      schedule: "निर्धारित करें",
      noVideoAvailable: "कोई वीडियो उपलब्ध नहीं है",
      demoVideo: "डेमो वीडियो",
      educationalContent: "प्रदर्शन के लिए शैक्षिक सामग्री",
      interactiveWhiteboard: "इंटरैक्टिव व्हाइटबोर्ड",
      drawAndExplain: "अवधारणाओं को बनाएं और समझाएं",
      pen: "कलम",
      rectangle: "आयत",
      circle: "वृत्त",
      text: "पाठ",
      eraser: "मिटाने वाला",
      clear: "स्पष्ट",
      sampleLectureAudio: "नमूना व्याख्यान ऑडियो",
      educationalLectureRecording: "प्रदर्शन के लिए शैक्षिक व्याख्यान रिकॉर्डिंग",
      audioLecture: "ऑडियो व्याख्यान"
    }
  };

  const t = (key) => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};