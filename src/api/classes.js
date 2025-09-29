import { MOCK_CLASSES } from '../data/mockData';

export const getClasses = async () => {
  // In the future, this function will make an API call to the backend.
  // For now, it returns the mock data.
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MOCK_CLASSES);
    }, 500);
  });
};
