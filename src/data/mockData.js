export const MOCK_INSTRUCTORS = [
  { id: 1, name: 'Dr. Sharma' },
  { id: 2, name: 'Prof. Kumar' },
  { id: 3, name: 'Dr. Patel' },
];



export const MOCK_CLASSES = [
  { id: 1, title: 'Introduction to AI', instructor: 'Dr. Sharma', instructorId: 1, time: '10:00 AM', isLive: true, students: 45, subject: 'Artificial Intelligence', chatMessages: [], videoId: 'rJ1Qao09CFI' },
  { id: 2, title: 'VLSI Design Basics', instructor: 'Prof. Kumar', instructorId: 2, time: '02:00 PM', isLive: false, students: 32, subject: 'Electronics', chatMessages: [], videoId: 'rJ1Qao09CFI' },
  { id: 3, title: 'Solar Energy Systems', instructor: 'Dr. Patel', instructorId: 3, time: '04:00 PM', isLive: false, students: 28, subject: 'Energy', chatMessages: [], videoId: 'rJ1Qao09CFI' },
  { id: 4, title: 'Machine Learning', instructor: 'Dr. Sharma', instructorId: 1, time: '11:00 AM', isLive: false, students: 52, subject: 'Artificial Intelligence', chatMessages: [], videoId: 'rJ1Qao09CFI' },
  { id: 5, title: 'Digital Circuits', instructor: 'Prof. Kumar', instructorId: 2, time: '03:00 PM', isLive: true, students: 41, subject: 'Electronics', chatMessages: [], videoId: 'rJ1Qao09CFI' },
  { id: 6, title: 'Wind Turbines', instructor: 'Dr. Patel', instructorId: 3, time: '05:00 PM', isLive: false, students: 35, subject: 'Energy', chatMessages: [], videoId: 'rJ1Qao09CFI' },
  { id: 7, title: 'Neural Networks', instructor: 'Dr. Sharma', instructorId: 1, time: '09:00 AM', isLive: false, students: 60, subject: 'Artificial Intelligence', chatMessages: [], videoId: 'rJ1Qao09CFI' },
  { id: 8, title: 'Advanced VLSI', instructor: 'Prof. Kumar', instructorId: 2, time: '01:00 PM', isLive: false, students: 38, subject: 'Electronics', chatMessages: [], videoId: 'rJ1Qao09CFI' },
  { id: 9, title: 'Photovoltaic Systems', instructor: 'Dr. Patel', instructorId: 3, time: '03:00 PM', isLive: false, students: 31, subject: 'Energy', chatMessages: [], videoId: 'rJ1Qao09CFI' },
  { id: 10, title: 'Deep Learning', instructor: 'Dr. Sharma', instructorId: 1, time: '12:00 PM', isLive: true, students: 65, subject: 'Artificial Intelligence', chatMessages: [], videoId: 'rJ1Qao09CFI' }
];

export const MOCK_SLIDES = [
  { id: 1, content: 'Introduction to Artificial Intelligence', subtitle: 'Understanding the Basics' },
  { id: 2, content: 'What is AI?', subtitle: 'Artificial Intelligence is the simulation of human intelligence by machines' },
  { id: 3, content: 'Types of AI', subtitle: `1. Narrow AI
2. General AI
3. Super AI` },
  { id: 4, content: 'Applications of AI', subtitle: `• Healthcare
• Finance
• Transportation
• Education` },
  { id: 5, content: 'Introduction to VLSI', subtitle: 'Very Large Scale Integration' },
  { id: 6, content: 'Moore\'s Law', subtitle: 'The number of transistors on a microchip doubles every two years' },
  { id: 7, content: 'Solar Panels', subtitle: 'Photovoltaic cells that convert sunlight into electricity' },
  { id: 8, content: 'Wind Energy', subtitle: 'Using wind to generate mechanical power or electricity' }
];

export const MOCK_RECORDINGS = [
  { id: 1, title: 'AI Lecture 1', duration: '45:23', size: '12 MB', date: '2024-09-25', subject: 'Artificial Intelligence' },
  { id: 2, title: 'VLSI Lecture 3', duration: '38:15', size: '10 MB', date: '2024-09-24', subject: 'Electronics' },
  { id: 3, title: 'Solar Energy Lab', duration: '52:40', size: '15 MB', date: '2024-09-23', subject: 'Energy' },
  { id: 4, title: 'ML Lecture 2', duration: '48:10', size: '13 MB', date: '2024-09-26', subject: 'Artificial Intelligence' },
  { id: 5, title: 'Digital Circuits Lab', duration: '55:30', size: '16 MB', date: '2024-09-25', subject: 'Electronics' },
  { id: 6, title: 'Wind Energy Seminar', duration: '30:00', size: '8 MB', date: '2024-09-24', subject: 'Energy' }
];

export const currentUser = {
  id: 1,
  name: 'Dr. Sharma',
  role: 'instructor'
};
