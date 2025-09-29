import { MOCK_SLIDES } from '../data/mockData';

export const getSlides = async () => {
  // In the future, this function will make an API call to the backend.
  // For now, it returns the mock data.
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MOCK_SLIDES);
    }, 500);
  });
};
