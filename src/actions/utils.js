export const requestStatus = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
