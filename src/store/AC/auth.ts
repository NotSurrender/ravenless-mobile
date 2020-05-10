import * as actions from '../actions/auth';

import { AuthActions } from '../types/auth';
import { RegistrationForm } from '../../types/auth';

export const setRegistrationField = (
  fieldName: keyof RegistrationForm,
  value: string
): AuthActions => ({
  type: actions.SET_REGISTRATION_FIELD,
  fieldName,
  value
});

export const register = (): AuthActions => ({
  type: actions.REGISTER_REQUEST
});

export const registerErrorAction = (error: Error): AuthActions => ({
  type: actions.REGISTER_FAILURE,
  error
});

export const registerSuccessAction = (): AuthActions => ({
  type: actions.REGISTER_SUCCESS
});
