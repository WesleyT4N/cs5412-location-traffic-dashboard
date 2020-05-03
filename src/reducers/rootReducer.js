import { combineReducers } from 'redux';
import locations from './locations';
import sensors from './sensors';
import traffic from './traffic';

export default combineReducers({
  locations,
  sensors,
  traffic,
});
