import { all } from 'redux-saga/effects';

import event from './event';
import club from './club';

function* rootSaga() {
  yield all([event(), club()]);
}

export default rootSaga;
