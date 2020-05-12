import { handleErrors } from './utils';

export const FETCH_ALL_LOCATIONS_BEGIN = 'FETCH_ALL_LOCATIONS_BEGIN';
export const fetchAllLocationsBegin = () => ({
  type: FETCH_ALL_LOCATIONS_BEGIN,
});

export const FETCH_ALL_LOCATIONS_SUCCESS = 'FETCH_ALL_LOCATIONS_SUCCESS';
export const fetchAllLocationsSuccess = (locations) => ({
  type: FETCH_ALL_LOCATIONS_SUCCESS,
  payload: { locations },
});

export const FETCH_ALL_LOCATIONS_ERROR = 'FETCH_ALL_LOCATIONS_ERROR';
export const fetchAllLocationsError = (error) => ({
  type: FETCH_ALL_LOCATIONS_ERROR,
  payload: { error },
});

export const fetchAllLocations = () => async (dispatch) => {
  dispatch(fetchAllLocationsBegin());
  const url = process.env.REACT_APP_REST_API_URL + '/locations';
  return fetch(url, {
    method: 'get',
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((json) => {
      dispatch(fetchAllLocationsSuccess(json));
      return json;
    })
    .catch((error) => dispatch(fetchAllLocationsError(error)));
};

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

export const createLocation = (location) => async (dispatch) => {
  dispatch(createLocationBegin());
  const url = process.env.REACT_APP_REST_API_URL + '/locations';
  return fetch(url, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: location.name,
      capacity: location.capacity,
    }),
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((json) => {
      dispatch(createLocationSuccess(json));
      return json;
    })
    .catch((error) => dispatch(createLocationError(error)));
};

export const UPDATE_LOCATION_BEGIN = 'UPDATE_LOCATION_BEGIN';
export const updateLocationBegin = () => ({
  type: UPDATE_LOCATION_BEGIN,
});

export const UPDATE_LOCATION_SUCCESS = 'UPDATE_LOCATION_SUCCESS';
export const updateLocationSuccess = (location) => ({
  type: UPDATE_LOCATION_SUCCESS,
  payload: { location },
});

export const UPDATE_LOCATION_ERROR = 'UPDATE_LOCATION_ERROR';
export const updateLocationError = (error) => ({
  type: UPDATE_LOCATION_ERROR,
  payload: { error },
});

export const updateLocation = (location) => async (dispatch) => {
  dispatch(updateLocationBegin());
  const url = process.env.REACT_APP_REST_API_URL + '/locations/' + location.id;
  return fetch(url, {
    method: 'put',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: location.name,
      capacity: location.capacity,
    }),
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((json) => {
      dispatch(updateLocationSuccess(json));
      return json;
    })
    .catch((error) => dispatch(updateLocationError(error)));
};

export const DELETE_LOCATION_BEGIN = 'DELETE_LOCATION_BEGIN';
export const deleteLocationBegin = () => ({
  type: DELETE_LOCATION_BEGIN,
});

export const DELETE_LOCATION_SUCCESS = 'DELETE_LOCATION_SUCCESS';
export const deleteLocationSuccess = (location) => ({
  type: DELETE_LOCATION_SUCCESS,
  payload: { location },
});

export const DELETE_LOCATION_ERROR = 'DELETE_LOCATION_ERROR';
export const deleteLocationError = (error) => ({
  type: DELETE_LOCATION_ERROR,
  payload: { error },
});

export const deleteLocation = (location) => async (dispatch) => {
  dispatch(deleteLocationBegin());
  const url = process.env.REACT_APP_REST_API_URL + '/locations/' + location.id;
  return fetch(url, {
    method: 'delete',
  })
    .then(handleErrors)
    .then(() => dispatch(deleteLocationSuccess(location)))
    .catch((error) => dispatch(deleteLocationError(error)));
};

export const SET_CURRENT_LOCATION_BEGIN = 'SET_CURRENT_LOCATION_BEGIN';
export const setCurrentLocationBegin = () => ({
  type: SET_CURRENT_LOCATION_BEGIN,
});

export const SET_CURRENT_LOCATION_SUCCESS = 'SET_CURRENT_LOCATION_SUCCESS';
export const setCurrentLocationSuccess = (location) => ({
  type: SET_CURRENT_LOCATION_SUCCESS,
  payload: { location },
});

export const SET_CURRENT_LOCATION_ERROR = 'SET_CURRENT_LOCATION_ERROR';
export const setCurrentLocationError = (error) => ({
  type: SET_CURRENT_LOCATION_ERROR,
  payload: { error },
});

export const setCurrentLocation = (location) => async (dispatch) => {
  dispatch(setCurrentLocationBegin());
  const url = process.env.REACT_APP_REST_API_URL + '/locations/' + location.id;
  return fetch(url, {
    method: 'get',
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((json) => {
      dispatch(setCurrentLocationSuccess(json));
      return json;
    })
    .catch((error) => dispatch(setCurrentLocationError(error)));
};
