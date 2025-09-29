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
  2: [
    {
      id: 1,
      name: 'Introduction to VLSI.pdf',
      url: '/notes/introduction-to-vlsi.pdf',
    },
    {
      id: 2,
      name: 'Moore\'s Law.pdf',
      url: '/notes/moore\'s-law.pdf',
    },
  ],
  3: [
    {
      id: 1,
      name: 'Solar Panels.pdf',
      url: '/notes/solar-panels.pdf',
    },
    {
      id: 2,
      name: 'Wind Energy.pdf',
      url: '/notes/wind-energy.pdf',
    },
  ],
  4: [
    {
      id: 1,
      name: 'Machine Learning.pdf',
      url: '/notes/machine-learning.pdf',
    },
    {
      id: 2,
      name: 'Deep Learning.pdf',
      url: '/notes/deep-learning.pdf',
    },
  ],
  5: [
    {
      id: 1,
      name: 'Digital Circuits.pdf',
      url: '/notes/digital-circuits.pdf',
    },
    {
      id: 2,
      name: 'Logic Circuits.pdf',
      url: '/notes/logic-circuits.pdf',
    },
  ],
  6: [
    {
      id: 1,
      name: 'Wind Turbines.pdf',
      url: '/notes/wind-turbines.pdf',
    },
    {
      id: 2,
      name: 'Renewable Energy.pdf',
      url: '/notes/renewable-energy.pdf',
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