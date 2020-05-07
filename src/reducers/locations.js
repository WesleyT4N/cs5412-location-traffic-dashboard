import {
  FETCH_ALL_LOCATIONS_BEGIN,
  FETCH_ALL_LOCATIONS_SUCCESS,
  FETCH_ALL_LOCATIONS_ERROR,
  CREATE_LOCATION_BEGIN,
  CREATE_LOCATION_SUCCESS,
  CREATE_LOCATION_ERROR,
  UPDATE_LOCATION_BEGIN,
  UPDATE_LOCATION_SUCCESS,
  UPDATE_LOCATION_ERROR,
  DELETE_LOCATION_BEGIN,
  DELETE_LOCATION_SUCCESS,
  DELETE_LOCATION_ERROR,
  SET_CURRENT_LOCATION,
} from '../actions';

const initState = {
  all: [],
  current: null,
  loading: false,
  error: null,
};

const locations = (state = initState, action) => {
  switch (action.type) {
    case CREATE_LOCATION_BEGIN:
    case UPDATE_LOCATION_BEGIN:
    case DELETE_LOCATION_BEGIN:
    case FETCH_ALL_LOCATIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_LOCATION_ERROR:
    case UPDATE_LOCATION_ERROR:
    case DELETE_LOCATION_ERROR:
    case FETCH_ALL_LOCATIONS_ERROR:
      alert(action.payload.error.message);
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
      };
    case FETCH_ALL_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        all: action.payload.locations,
        error: null,
      };
    case CREATE_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        all: state.all.concat(action.payload.location),
        current: action.payload.location,
        error: null,
      };
    case UPDATE_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        all: state.all.map((loc) =>
          loc.id === action.payload.location.id ? action.payload.location : loc
        ),
        current: action.payload.location,
        error: null,
      };
    case DELETE_LOCATION_SUCCESS:
      return {
        ...state,
        all: state.all.filter((loc) => loc.id !== action.payload.location.id),
        current: null,
        loading: false,
      };
    case SET_CURRENT_LOCATION:
      return {
        ...state,
        current: state.all.find((loc) => loc.id === action.payload.locationId),
        loading: false,
      };
    default:
      return state;
  }
};

export default locations;
