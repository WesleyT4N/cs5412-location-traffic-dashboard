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

export const FETCH_TRAFFIC_HISTORY_BEGIN = 'FETCH_TRAFFIC_HISTORY_BEGIN';
export const fetchTrafficHistoryBegin = () => ({
  type: FETCH_TRAFFIC_HISTORY_BEGIN,
});

export const FETCH_TRAFFIC_HISTORY_SUCCESS = 'FETCH_TRAFFIC_HISTORY_SUCCESS';
export const fetchTrafficHistorySuccess = (trafficHistory, locationId) => ({
  type: FETCH_TRAFFIC_HISTORY_SUCCESS,
  payload: { trafficHistory, locationId },
});

export const FETCH_TRAFFIC_HISTORY_ERROR = 'FETCH_TRAFFIC_HISTORY_ERROR';
export const fetchTrafficHistoryError = (error) => ({
  type: FETCH_TRAFFIC_HISTORY_ERROR,
  payload: { error },
});

export const fetchTrafficHistory = (location) => async (dispatch) => {
  dispatch(fetchTrafficHistoryBegin());
  const url = new URL(
    `${process.env.REACT_APP_REST_API_URL}/locations/${location.id}/traffic_history`
  );

  const startTime = new Date();
  const endTime = new Date();
  startTime.setHours(endTime.getHours() - 12);
  startTime.setMinutes(0);
  startTime.setSeconds(0);
  url.search = new URLSearchParams({
    start_time: Math.trunc(startTime.getTime() / 1000),
    end_time: Math.trunc(endTime.getTime() / 1000),
  });
  return fetch(url, {
    method: 'get',
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((json) => {
      dispatch(fetchTrafficHistorySuccess(json.trafficHistory, location.id));
      return json;
    })
    .catch((error) => dispatch(fetchTrafficHistoryError(error)));
};
