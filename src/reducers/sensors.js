import {
  FETCH_SENSORS_FOR_LOCATION_BEGIN,
  FETCH_SENSORS_FOR_LOCATION_SUCCESS,
  FETCH_SENSORS_FOR_LOCATION_ERROR,
  CREATE_SENSOR_BEGIN,
  CREATE_SENSOR_SUCCESS,
  CREATE_SENSOR_ERROR,
  UPDATE_SENSOR_BEGIN,
  UPDATE_SENSOR_SUCCESS,
  UPDATE_SENSOR_ERROR,
  DELETE_SENSOR_BEGIN,
  DELETE_SENSOR_SUCCESS,
  DELETE_SENSOR_ERROR,
} from 'actions';

const initState = {
  loading: false,
  all: {},
  current: {
    locationId: null,
    sensors: [],
  },
  error: null,
};

const sensors = (state = initState, action) => {
  switch (action.type) {
    case FETCH_SENSORS_FOR_LOCATION_BEGIN:
    case CREATE_SENSOR_BEGIN:
    case UPDATE_SENSOR_BEGIN:
    case DELETE_SENSOR_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SENSORS_FOR_LOCATION_ERROR:
    case CREATE_SENSOR_ERROR:
    case UPDATE_SENSOR_ERROR:
    case DELETE_SENSOR_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
      };
    case FETCH_SENSORS_FOR_LOCATION_SUCCESS:
      return {
        ...state,
        all: {
          ...state.all,
          [action.payload.locationId]: action.payload.sensors,
        },
        current: {
          locationId: action.payload.locationId,
          sensors: action.payload.sensors,
        },
        loading: false,
        error: null,
      };
    case CREATE_SENSOR_SUCCESS: {
      const locationId = action.payload.sensor.locationId;
      const prevSensors = state.all[locationId] || [];
      const sensors = prevSensors.concat([action.payload.sensor]);
      return {
        ...state,
        all: {
          ...state.all,
          [locationId]: sensors,
        },
        current: {
          locationId,
          sensors,
        },
        loading: false,
        error: null,
      };
    }
    case UPDATE_SENSOR_SUCCESS: {
      const locationId = action.payload.sensor.locationId;
      const sensors = state.all[locationId].map((sensor) =>
        sensor.id === action.payload.sensor.id ? action.payload.sensor : sensor
      );
      return {
        ...state,
        all: {
          ...state.all,
          [locationId]: sensors,
        },
        current: {
          locationId,
          sensors,
        },
        loading: false,
        error: null,
      };
    }
    case DELETE_SENSOR_SUCCESS: {
      const locationId = action.payload.sensor.locationId;
      const sensors = state.all[locationId].filter(
        (sensor) => sensor.id !== action.payload.sensor.id
      );
      return {
        ...state,
        all: {
          ...state.all,
          [locationId]: sensors,
        },
        current: {
          locationId,
          sensors,
        },
        loading: false,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default sensors;
