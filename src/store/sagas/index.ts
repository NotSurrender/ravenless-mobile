import { all } from 'redux-saga/effects';

import auth from './auth';
import event from './event';
import club from './club';

function* rootSaga() {
  yield all([auth(), event(), club()]);
}

export default rootSaga;
