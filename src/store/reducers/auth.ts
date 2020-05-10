import * as actions from '../actions/auth';

import { AuthActions } from '../types/auth';
import { RegistrationForm } from '../../types/auth';

type AuthState = {
  registrationForm: RegistrationForm;
};

const authDefaultState: AuthState = {
  registrationForm: {
    email: '',
    nickname: '',
    password: '',
    rePassword: ''
  }
};

const auth = (state = authDefaultState, action: AuthActions) => {
  switch (action.type) {
    case actions.SET_REGISTRATION_FIELD:

    default:
      return state;
  }
};

export default auth;
