import {
  CREATE_LOCATION_BEGIN,
  CREATE_LOCATION_SUCCESS,
  CREATE_LOCATION_ERROR,
} from '../actions';

const initState = {
  all: [],
  loading: false,
  error: null,
};

const locations = (state = initState, action) => {
  switch (action.type) {
    case CREATE_LOCATION_BEGIN:
      return {
        ...state,
        loading: true,
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
    case CREATE_LOCATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default locations;
