import * as actions from '../actions/auth';

import { RegistrationForm } from '../../types/auth';

export type AuthRegistrationSetTextInput = {
  type: typeof actions.SET_REGISTRATION_FIELD;
  fieldName: keyof RegistrationForm;
  value: string;
};

export type AuthRegisterRequestAction = {
  type: typeof actions.REGISTER_REQUEST;
};

export type AuthRegisterFailureAction = {
  type: typeof actions.REGISTER_FAILURE;
  error: Error;
};

export type AuthRegisterSuccessAction = {
  type: typeof actions.REGISTER_SUCCESS;
};

export type AuthActions =
  | AuthRegistrationSetTextInput
  | AuthRegisterRequestAction
  | AuthRegisterFailureAction
  | AuthRegisterSuccessAction;
