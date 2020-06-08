import { put, call, select, debounce, takeEvery } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import * as AC from '../AC/auth';
import * as actions from '../actions/auth';
import { API } from '../../API';

import { AppState } from '..';
import { RegistrationFormFields, LoginFormFields, AuthForms } from '../types/auth';
import { LoginResponse } from '../../types/auth';
import {
  SetRegistrationFormTextFieldRequestAction,
  SetLoginFormTextFieldRequestAction
} from '../types/auth/actionTypes';
import { DefaultResponse } from '../../types/common';

const EMAIL_REGEX = /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/;

const validatePassword = (password: string): boolean | never => {
  if (password.length < 8) {
    throw new Error('Длинна пароля меньше 8 символов');
  } else if (!/^[A-Za-z0-9]+$/.test(password)) {
    throw new Error('Пароль содержит не латинские буквы');
  } else if (!/(?=.*[0-9])/.test(password)) {
    throw new Error('Пароль не содержит хотя бы одно число');
  } else if (!/(?=.*[a-z])/.test(password)) {
    throw new Error('Пароль не содержит хотя бы одну букву');
  }

  return true;
};

function* setLoginFormTextField({ fieldName, value }: SetLoginFormTextFieldRequestAction) {
  try {
    if (value) {
      switch (fieldName) {
        case 'email':
          if (EMAIL_REGEX.test(value)) {
            const password: string = yield select(
              ({ auth }: AppState) => auth.forms.login.fields.password
            );
            validatePassword(password);

            yield put(AC.setLoginFormTextFieldSuccessAction(fieldName, 'validated', ''));
          }
          break;

        case 'password':
          validatePassword(value);

          // yield call(API.auth.login);
          break;
      }
    }
  } catch (error) {
    // yield put(AC.setLoginFormTextFieldFailureAction(fieldName, ));
  }
}

function* setRegistrationFormTextField({
  fieldName,
  value
}: SetRegistrationFormTextFieldRequestAction) {
  try {
    if (!value) {
      yield put(AC.setRegistrationFormTextFieldSuccessAction(fieldName, 'default', ''));
      yield put(AC.setAuthFormIsValidated('registration', false));
    } else {
      switch (fieldName) {
        case 'email':
          if (EMAIL_REGEX.test(value)) {
            const response: DefaultResponse = yield call(API.auth.checkEmail, value);
            if (response.success) {
              yield put(AC.setRegistrationFormTextFieldSuccessAction(fieldName, 'validated', ''));
            }
          } else {
            throw new Error("Неверный формат Email'а");
          }
          break;

        case 'nickname':
          yield put(AC.setRegistrationFormTextFieldSuccessAction(fieldName, 'validated', ''));
          break;

        case 'password':
          validatePassword(value);
          yield put(AC.setRegistrationFormTextFieldSuccessAction(fieldName, 'validated', ''));

          const rePassword: string = yield select(
            ({ auth }: AppState) => auth.forms.registration.fields.rePassword.value
          );

          if (rePassword && value !== rePassword) {
            yield put(
              AC.setRegistrationFormTextFieldFailureAction(
                'rePassword',
                'Повторый пароль не равен паролю'
              )
            );
          }
          break;

        case 'rePassword':
          const password: string = yield select(
            ({ auth }: AppState) => auth.forms.registration.fields.password.value
          );

          if (!password) {
            yield put(AC.setRegistrationFormTextFieldFailureAction('password', 'Пароль не введен'));
          } else if (value !== password) {
            throw new Error('Повторный паррль не равен паролю');
          } else {
            yield put(AC.setRegistrationFormTextFieldSuccessAction(fieldName, 'validated', ''));
          }
          break;
      }

      const registrationFields: RegistrationFormFields = yield select(
        ({ auth }: AppState) => auth.forms.registration.fields
      );

      const isFormValidated = Object.values(registrationFields).every(
        field => field.status === 'validated'
      );

      if (isFormValidated) {
        yield put(AC.setAuthFormIsValidated('registration', true));
      }
    }
  } catch (error) {
    yield put(AC.setRegistrationFormTextFieldFailureAction(fieldName, error.message));
    yield put(AC.setAuthFormIsValidated('registration', false));
  }
}

function* register() {
  try {
    const { email, nickname, password }: RegistrationFormFields = yield select(
      ({ auth }: AppState) => auth.forms.registration.fields
    );
    yield call(API.auth.register, {
      email: email.value,
      nickname: nickname.value,
      password: password.value
    });

    // const loginResponse: LoginResponse = yield call(API.auth.login, {
    //   email: email.value,
    //   password: password.value
    // });
  } catch (error) {
    console.error('Ошибки при регстрации: ', JSON.parse(error.message));
  }
}

function* login() {
  try {
    const { email, password }: LoginFormFields = yield select(
      ({ auth }: AppState) => auth.forms.login.fields
    );

    const response: LoginResponse = yield call(API.auth.login, {
      email: email.value,
      password: password.value
    });

    AsyncStorage.setItem('token', response.token);
    AsyncStorage.setItem('refreshToken', response.refreshToken);
  } catch (error) {}
}

function* AuthSaga() {
  yield debounce(
    100,
    actions.SET_REGISTRATION_FORM_TEXT_FIELD_REQUEST,
    setRegistrationFormTextField
  );
  yield takeEvery(actions.SET_LOGIN_FORM_TEXT_FIELD_REQUEST, setLoginFormTextField);
  yield takeEvery(actions.REGISTER_REQUEST, register);
  yield takeEvery(actions.LOGIN_REQUEST, login);
}

export default AuthSaga;
