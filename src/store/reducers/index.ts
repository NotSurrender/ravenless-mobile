import { combineReducers } from 'redux';

import event from './event';
import club from './club';

export default combineReducers({
  event,
  club
});
