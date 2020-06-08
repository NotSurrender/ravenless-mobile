import * as actions from '../actions/auth';

import { AuthActions } from '../types/auth/actionTypes';
import { RegistrationFormFields, AuthForms, LoginFormFields } from '../types/auth';
import { TextFieldStatus } from '../../types/common';

export const setRegistrationFormTextField = (
  fieldName: keyof RegistrationFormFields,
  value: string
): AuthActions => ({
  type: actions.SET_REGISTRATION_FORM_TEXT_FIELD_REQUEST,
  fieldName,
  value
});

export const setRegistrationFormTextFieldFailureAction = (
  fieldName: keyof RegistrationFormFields,
  helperText: string
): AuthActions => ({
  type: actions.SET_REGISTRATION_FORM_TEXT_FIELD_FAILURE,
  fieldName,
  helperText
});

export const setRegistrationFormTextFieldSuccessAction = (
  fieldName: keyof RegistrationFormFields,
  status: TextFieldStatus,
  helperText: string
): AuthActions => ({
  type: actions.SET_REGISTRATION_FORM_TEXT_FIELD_SUCCESS,
  fieldName,
  status,
  helperText
});

export const setLoginFormTextField = (
  fieldName: keyof LoginFormFields,
  value: string
): AuthActions => ({
  type: actions.SET_LOGIN_FORM_TEXT_FIELD_REQUEST,
  fieldName,
  value
});

export const setLoginFormTextFieldFailureAction = (
  fieldName: keyof LoginFormFields,
  helperText: string
): AuthActions => ({
  type: actions.SET_LOGIN_FORM_TEXT_FIELD_FAILURE,
  fieldName,
  helperText
});

export const setLoginFormTextFieldSuccessAction = (
  fieldName: keyof LoginFormFields,
  status: TextFieldStatus,
  helperText: string
): AuthActions => ({
  type: actions.SET_LOGIN_FORM_TEXT_FIELD_SUCCESS,
  fieldName,
  status,
  helperText
});

export const setAuthFormIsValidated = (
  formName: keyof AuthForms,
  validated: boolean
): AuthActions => ({
  type: actions.SET_AUTH_FORM_IS_VALIDATED,
  formName,
  validated
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

export const login = (): AuthActions => ({
  type: actions.LOGIN_REQUEST
});

export const loginErrorAction = (error: Error): AuthActions => ({
  type: actions.LOGIN_FAILURE,
  error
});

export const loginSuccessAction = (): AuthActions => ({
  type: actions.LOGIN_SUCCESS
});
