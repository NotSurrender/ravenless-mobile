import { produce } from 'immer';
import * as actions from '../actions/auth';

import { AuthActions } from '../types/auth/actionTypes';
import { AuthForms } from '../types/auth';
import { CurrentUser } from '../../types/auth';

type AuthState = {
  forms: AuthForms;
  currentUser: CurrentUser;
};

const authDefaultState: AuthState = {
  forms: {
    registration: {
      fields: {
        email: {
          value: '',
          helperText: '',
          status: 'default'
        },
        nickname: {
          value: '',
          helperText: '',
          status: 'default'
        },
        password: {
          value: '',
          helperText: '',
          status: 'default'
        },
        rePassword: {
          value: '',
          helperText: '',
          status: 'default'
        }
      },
      validated: false
    },
    login: {
      fields: {
        email: {
          value: '',
          helperText: '',
          status: 'default'
        },
        password: {
          value: '',
          helperText: '',
          status: 'default'
        }
      },
      validated: false
    }
  },
  currentUser: {
    _id: '',
    email: '',
    nickname: ''
  }
};

export const auth = (state = authDefaultState, action: AuthActions): AuthState =>
  produce(state, draft => {
    switch (action.type) {
      case actions.SET_REGISTRATION_FORM_TEXT_FIELD_REQUEST:
        draft.forms.registration.fields[action.fieldName].value = action.value;
        break;

      case actions.SET_REGISTRATION_FORM_TEXT_FIELD_FAILURE:
        draft.forms.registration.fields[action.fieldName].status = 'error';
        draft.forms.registration.fields[action.fieldName].helperText = action.helperText;
        break;

      case actions.SET_REGISTRATION_FORM_TEXT_FIELD_SUCCESS:
        draft.forms.registration.fields[action.fieldName].status = action.status;
        draft.forms.registration.fields[action.fieldName].helperText = action.helperText;
        break;

      case actions.SET_AUTH_FORM_IS_VALIDATED:
        draft.forms[action.formName].validated = action.validated;
        break;

      case actions.SET_LOGIN_FORM_TEXT_FIELD_REQUEST:
        draft.forms.login.fields[action.fieldName].value = action.value;
        break;

      default:
        return state;
    }
  });
