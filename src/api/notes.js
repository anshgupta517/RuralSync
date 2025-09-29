const MOCK_NOTES = {
  1: [
    {
      id: 1,
      name: 'Introduction to AI.pdf',
      url: '/notes/introduction-to-ai.pdf',
    },
    {
      id: 2,
      name: 'Types of AI.pdf',
      url: '/notes/types-of-ai.pdf',
    },
  ],
};

export const getNotes = async (classId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_NOTES[classId] || []);
    }, 500);
  });
};