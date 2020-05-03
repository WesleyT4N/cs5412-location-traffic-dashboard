import { handleErrors } from './utils';

export const FETCH_TRAFFIC_COUNT_BEGIN = 'FETCH_TRAFFIC_COUNT_BEGIN';
export const fetchTrafficCountBegin = () => ({
  type: FETCH_TRAFFIC_COUNT_BEGIN,
});

export const FETCH_TRAFFIC_COUNT_SUCCESS = 'FETCH_TRAFFIC_COUNT_SUCCESS';
export const fetchTrafficCountSuccess = (trafficCount, locationId) => ({
  type: FETCH_TRAFFIC_COUNT_SUCCESS,
  payload: { trafficCount, locationId },
});

export const FETCH_TRAFFIC_COUNT_ERROR = 'FETCH_TRAFFIC_COUNT_ERROR';
export const fetchTrafficCountError = (error) => ({
  type: FETCH_TRAFFIC_COUNT_ERROR,
  payload: { error },
});

export const fetchTrafficCount = (location) => async (dispatch) => {
  dispatch(fetchTrafficCountBegin());
  const url = new URL(
    `${process.env.REACT_APP_REST_API_URL}/locations/${location.id}/traffic_count`
  );
  url.search = new URLSearchParams({ sensor_ids: location.sensors });
  return fetch(url, {
    method: 'get',
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((json) => {
      dispatch(fetchTrafficCountSuccess(json.trafficCount, location.id));
      return json;
    })
    .catch((error) => dispatch(fetchTrafficCountError(error)));
};

export const FETCH_PEAK_TRAFFIC_BEGIN = 'FETCH_PEAK_TRAFFIC_BEGIN';
export const fetchPeakTrafficBegin = () => ({
  type: FETCH_PEAK_TRAFFIC_BEGIN,
});

export const FETCH_PEAK_TRAFFIC_SUCCESS = 'FETCH_PEAK_TRAFFIC_SUCCESS';
export const fetchPeakTrafficSuccess = (peakTraffic, locationId) => ({
  type: FETCH_PEAK_TRAFFIC_SUCCESS,
  payload: { peakTraffic, locationId },
});

export const FETCH_PEAK_TRAFFIC_ERROR = 'FETCH_PEAK_TRAFFIC_ERROR';
export const fetchPeakTrafficError = (error) => ({
  type: FETCH_PEAK_TRAFFIC_ERROR,
  payload: { error },
});

export const fetchPeakTraffic = (location) => async (dispatch) => {
  dispatch(fetchPeakTrafficBegin());
  const url = new URL(
    `${process.env.REACT_APP_REST_API_URL}/locations/${location.id}/peak_traffic`
  );

  const startTime = new Date();
  const endTime = new Date();
  startTime.setHours(endTime.getHours() - 12);
  url.search = new URLSearchParams({
    sensor_ids: location.sensors,
    start_time: Math.trunc(startTime.getTime() / 1000),
    end_time: Math.trunc(endTime.getTime() / 1000),
  });
  return fetch(url, {
    method: 'get',
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((json) => {
      dispatch(fetchPeakTrafficSuccess(json.peakTraffic, location.id));
      return json;
    })
    .catch((error) => dispatch(fetchPeakTrafficError(error)));
};
