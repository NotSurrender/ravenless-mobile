import * as actions from '../../actions/auth';

import { RegistrationFormFields, AuthForms, LoginFormFields } from '../../types/auth';
import { TextFieldStatus } from '../../../types/common';

export type SetRegistrationFormTextFieldRequestAction = {
  type: typeof actions.SET_REGISTRATION_FORM_TEXT_FIELD_REQUEST;
  fieldName: keyof RegistrationFormFields;
  value: string;
};

export type SetRegistrationFormTextFieldFailureAction = {
  type: typeof actions.SET_REGISTRATION_FORM_TEXT_FIELD_FAILURE;
  fieldName: keyof RegistrationFormFields;
  helperText: string;
};

export type SetRegistrationFormTextFieldSuccessAction = {
  type: typeof actions.SET_REGISTRATION_FORM_TEXT_FIELD_SUCCESS;
  fieldName: keyof RegistrationFormFields;
  status: TextFieldStatus;
  helperText: string;
};

export type SetAuthFormIsValidated = {
  type: typeof actions.SET_AUTH_FORM_IS_VALIDATED;
  formName: keyof AuthForms;
  validated: boolean;
};

export type SetLoginFormTextFieldRequestAction = {
  type: typeof actions.SET_LOGIN_FORM_TEXT_FIELD_REQUEST;
  fieldName: keyof LoginFormFields;
  value: string;
};

export type SetLoginFormTextFieldFailureAction = {
  type: typeof actions.SET_LOGIN_FORM_TEXT_FIELD_FAILURE;
  fieldName: keyof LoginFormFields;
  helperText: string;
};

export type SetLoginFormTextFieldSuccessAction = {
  type: typeof actions.SET_LOGIN_FORM_TEXT_FIELD_SUCCESS;
  fieldName: keyof LoginFormFields;
  status: TextFieldStatus;
  helperText: string;
};

export type RegisterRequestAction = {
  type: typeof actions.REGISTER_REQUEST;
};

export type RegisterFailureAction = {
  type: typeof actions.REGISTER_FAILURE;
  error: Error;
};

export type RegisterSuccessAction = {
  type: typeof actions.REGISTER_SUCCESS;
};

export type LoginRequestAction = {
  type: typeof actions.LOGIN_REQUEST;
};

export type LoginFailureAction = {
  type: typeof actions.LOGIN_FAILURE;
  error: Error;
};

export type LoginSuccessAction = {
  type: typeof actions.LOGIN_SUCCESS;
};

export type AuthActions =
  | SetLoginFormTextFieldRequestAction
  | SetLoginFormTextFieldFailureAction
  | SetLoginFormTextFieldSuccessAction
  | SetRegistrationFormTextFieldRequestAction
  | SetRegistrationFormTextFieldFailureAction
  | SetRegistrationFormTextFieldSuccessAction
  | SetAuthFormIsValidated
  | RegisterRequestAction
  | RegisterFailureAction
  | RegisterSuccessAction
  | LoginRequestAction
  | LoginFailureAction
  | LoginSuccessAction;
