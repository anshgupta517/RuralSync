import { MOCK_RECORDINGS } from '../data/mockData';

export const getRecordings = async () => {
  // In the future, this function will make an API call to the backend.
  // For now, it returns the mock data.
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MOCK_RECORDINGS);
    }, 500);
  });
};
