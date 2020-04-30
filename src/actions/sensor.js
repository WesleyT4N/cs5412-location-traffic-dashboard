import { handleErrors } from './utils';

export const FETCH_SENSORS_FOR_LOCATION_BEGIN =
  'FETCH_SENSORS_FOR_LOCATION_BEGIN';
export const fetchSensorsForLocationBegin = () => ({
  type: FETCH_SENSORS_FOR_LOCATION_BEGIN,
});

export const FETCH_SENSORS_FOR_LOCATION_SUCCESS =
  'FETCH_SENSORS_FOR_LOCATION_SUCCESS';
export const fetchSensorsForLocationSuccess = (sensors, locationId) => ({
  type: FETCH_SENSORS_FOR_LOCATION_SUCCESS,
  payload: { sensors, locationId },
});

export const FETCH_SENSORS_FOR_LOCATION_ERROR =
  'FETCH_SENSORS_FOR_LOCATION_ERROR';
export const fetchSensorsForLocationError = (error) => ({
  type: FETCH_SENSORS_FOR_LOCATION_ERROR,
  payload: { error },
});

export const fetchSensorsForLocation = (location) => async (dispatch) => {
  dispatch(fetchSensorsForLocationBegin());
  const url = `${process.env.REACT_APP_REST_API_URL}/locations/${location.id}/sensors`;
  return fetch(url, {
    method: 'get',
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((json) => {
      dispatch(fetchSensorsForLocationSuccess(json, location.id));
      return json;
    })
    .catch((error) => dispatch(fetchSensorsForLocationError(error)));
};

export const CREATE_SENSOR_BEGIN = 'CREATE_SENSOR_BEGIN';
export const createSensorBegin = () => ({
  type: CREATE_SENSOR_BEGIN,
});

export const CREATE_SENSOR_SUCCESS = 'CREATE_SENSOR_SUCCESS';
export const createSensorSuccess = (sensor) => ({
  type: CREATE_SENSOR_SUCCESS,
  payload: { sensor },
});

export const CREATE_SENSOR_ERROR = 'CREATE_SENSOR_ERROR';
export const createSensorError = (error) => ({
  type: CREATE_SENSOR_ERROR,
  payload: { error },
});

export const createSensor = (sensor) => async (dispatch) => {
  dispatch(createSensorBegin());
  const url = `${process.env.REACT_APP_REST_API_URL}/locations/${sensor.locationId}/sensors`;
  return fetch(url, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: sensor.name,
      type: sensor.type,
    }),
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((json) => {
      dispatch(createSensorSuccess(json));
      return json;
    })
    .catch((error) => dispatch(createSensorError(error)));
};

export const UPDATE_SENSOR_BEGIN = 'UPDATE_SENSOR_BEGIN';
export const updateSensorBegin = () => ({
  type: UPDATE_SENSOR_BEGIN,
});

export const UPDATE_SENSOR_SUCCESS = 'UPDATE_SENSOR_SUCCESS';
export const updateSensorSuccess = (sensor) => ({
  type: UPDATE_SENSOR_SUCCESS,
  payload: { sensor },
});

export const UPDATE_SENSOR_ERROR = 'UPDATE_SENSOR_ERROR';
export const updateSensorError = (error) => ({
  type: UPDATE_SENSOR_ERROR,
  payload: { error },
});

export const updateSensor = (sensor) => async (dispatch) => {
  dispatch(updateSensorBegin());
  const url = `${process.env.REACT_APP_REST_API_URL}/locations/${sensor.locationId}/sensors/${sensor.id}`;
  return fetch(url, {
    method: 'put',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: sensor.name,
      type: sensor.type,
    }),
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((json) => {
      dispatch(updateSensorSuccess(json));
      return json;
    })
    .catch((error) => dispatch(updateSensorError(error)));
};

export const DELETE_SENSOR_BEGIN = 'DELETE_SENSOR_BEGIN';
export const deleteSensorBegin = () => ({
  type: DELETE_SENSOR_BEGIN,
});

export const DELETE_SENSOR_SUCCESS = 'DELETE_SENSOR_SUCCESS';
export const deleteSensorSuccess = (sensor) => ({
  type: DELETE_SENSOR_SUCCESS,
  payload: { sensor },
});

export const DELETE_SENSOR_ERROR = 'DELETE_SENSOR_ERROR';
export const deleteSensorError = (error) => ({
  type: DELETE_SENSOR_ERROR,
  payload: { error },
});

export const deleteSensor = (sensor) => async (dispatch) => {
  dispatch(deleteSensorBegin());
  const url = `${process.env.REACT_APP_REST_API_URL}/locations/${sensor.locationId}/sensors/${sensor.id}`;
  return fetch(url, {
    method: 'delete',
  })
    .then(handleErrors)
    .then(() => dispatch(deleteSensorSuccess(sensor)))
    .catch((error) => dispatch(deleteSensorError(error)));
};
