import { combineReducers } from 'redux';

import auth from './auth';
import event from './event';
import club from './club';

export default combineReducers({
  auth,
  event,
  club
});
