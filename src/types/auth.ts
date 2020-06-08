export type UserToRegister = {
  email: string;
  nickname: string;
  password: string;
};

export type UserToLogin = {
  email: string;
  password: string;
};

export type CurrentUser = {
  _id: string;
  email: string;
  nickname: string;
};

export type LoginResponse = {
  _id: string;
  email: string;
  nickname: string;
  token: string;
  refreshToken: string;
};
