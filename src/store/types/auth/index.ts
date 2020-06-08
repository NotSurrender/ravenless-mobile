import { TextFieldType } from '../../../types/common';

export type RegistrationFormFields = {
  email: TextFieldType;
  nickname: TextFieldType;
  password: TextFieldType;
  rePassword: TextFieldType;
};

export type RegistrationForm = {
  fields: RegistrationFormFields;
  validated: boolean;
};

export type LoginFormFields = {
  email: TextFieldType;
  password: TextFieldType;
};

export type LoginForm = {
  fields: LoginFormFields;
  validated: boolean;
};

export type AuthForms = {
  registration: RegistrationForm;
  login: LoginForm;
};
