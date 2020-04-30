import { combineReducers } from 'redux';
import locations from './locations';
import sensors from './sensors';

export default combineReducers({
  locations,
  sensors,
});
