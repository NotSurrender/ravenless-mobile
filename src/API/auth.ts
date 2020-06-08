import { SERVER_ADDRESS } from '../config';
import { fetchRequest } from '../utils';

import { UserToRegister, UserToLogin } from '../types/auth';
import { DefaultResponse } from '../types/common';

export const register = async (newUser: UserToRegister): Promise<DefaultResponse | never> =>
  fetchRequest(
    `${SERVER_ADDRESS}/auth/register`,
    {
      method: 'POST',
      body: newUser
    },
    false
  );

// TODO: Типизировать промис
export const login = async (user: UserToLogin): Promise<any> =>
  fetchRequest(
    `${SERVER_ADDRESS}/auth/login`,
    {
      method: 'POST',
      body: user
    },
    false
  );

export const checkEmail = async (email: string): Promise<any> =>
  fetchRequest(`${SERVER_ADDRESS}/auth/check-email?email=${email}`, null, false);
