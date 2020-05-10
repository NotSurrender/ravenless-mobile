import { put, takeEvery } from 'redux-saga/effects';
import * as AC from '../AC/auth';
import * as actions from '../actions/auth';

import { AuthRegistrationSetTextInput } from '../types/auth';

function* setRegistrationField({ fieldName, value }: AuthRegistrationSetTextInput) {
  try {
    yield put(AC.setRegistrationField(fieldName, value));
  } catch (error) {}
}

function* AuthSaga() {
  yield takeEvery(actions.SET_REGISTRATION_FIELD, setRegistrationField);
}

export default AuthSaga;
