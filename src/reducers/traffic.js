import { combineReducers } from 'redux';

import {
  FETCH_TRAFFIC_COUNT_BEGIN,
  FETCH_TRAFFIC_COUNT_SUCCESS,
  FETCH_TRAFFIC_COUNT_ERROR,
  FETCH_PEAK_TRAFFIC_BEGIN,
  FETCH_PEAK_TRAFFIC_SUCCESS,
  FETCH_PEAK_TRAFFIC_ERROR,
  FETCH_TRAFFIC_HISTORY_BEGIN,
  FETCH_TRAFFIC_HISTORY_SUCCESS,
  FETCH_TRAFFIC_HISTORY_ERROR,
} from 'actions';

const trafficCount = (
  state = { count: null, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case FETCH_TRAFFIC_COUNT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TRAFFIC_COUNT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
      };
    case FETCH_TRAFFIC_COUNT_SUCCESS:
      return {
        ...state,
        count: action.payload.trafficCount,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

const peakTraffic = (
  state = { count: null, time: null, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case FETCH_PEAK_TRAFFIC_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PEAK_TRAFFIC_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
      };
    case FETCH_PEAK_TRAFFIC_SUCCESS:
      return {
        ...state,
        count: action.payload.peakTraffic.count,
        time: action.payload.peakTraffic.time,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

const trafficHistory = (
  state = { trafficHistory: null, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case FETCH_TRAFFIC_HISTORY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TRAFFIC_HISTORY_ERROR:
      alert(action.payload.error.message);
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
      };
    case FETCH_TRAFFIC_HISTORY_SUCCESS:
      return {
        ...state,
        trafficHistory: action.payload.trafficHistory,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

const traffic = combineReducers({
  trafficCount,
  peakTraffic,
  trafficHistory,
});

export default traffic;
