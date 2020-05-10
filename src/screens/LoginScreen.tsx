import React, { FC } from 'react';

import Login from '../components/Login';

import { AuthNavProps } from '../navigation/AuthParamList';

const LoginScreen: FC<AuthNavProps<'LoginScreen'>> = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate('RegistrationScreen');
  };

  return <Login onPress={handleNavigate} />;
};

export default LoginScreen;
