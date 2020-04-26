import {
  CREATE_LOCATION_BEGIN,
  CREATE_LOCATION_SUCCESS,
  CREATE_LOCATION_ERROR,
  UPDATE_LOCATION_BEGIN,
  UPDATE_LOCATION_SUCCESS,
  UPDATE_LOCATION_ERROR,
  DELETE_LOCATION_BEGIN,
  DELETE_LOCATION_SUCCESS,
  DELETE_LOCATION_ERROR,
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
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_LOCATION_ERROR:
    case UPDATE_LOCATION_ERROR:
    case DELETE_LOCATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
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
      };
    default:
      return state;
  }
};

export default locations;
