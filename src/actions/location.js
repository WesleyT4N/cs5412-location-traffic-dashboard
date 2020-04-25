import { handleErrors, requestStatus } from './utils';

export const CREATE_LOCATION_BEGIN = 'CREATE_LOCATION_BEGIN';
export const createLocationBegin = () => ({
  type: CREATE_LOCATION_BEGIN,
});

export const CREATE_LOCATION_SUCCESS = 'CREATE_LOCATION_SUCCESS';
export const createLocationSuccess = (location) => ({
  type: CREATE_LOCATION_SUCCESS,
  payload: { location },
});

export const CREATE_LOCATION_ERROR = 'CREATE_LOCATION_ERROR';
export const createLocationError = (error) => ({
  type: CREATE_LOCATION_ERROR,
  payload: { error },
});

export const createLocation = (location) => (dispatch) => {
  dispatch(createLocationBegin());
  const url = process.env.REACT_APP_REST_API_URL + '/locations';
  console.log('create location');
  return fetch(url, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(location),
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((json) => {
      dispatch(createLocationSuccess(json));
      return json;
    })
    .catch((error) => dispatch(createLocationError(error)));
};
