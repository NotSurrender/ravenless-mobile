import React, { FC } from 'react';

import Register from '../components/Register';

import { AuthNavProps } from '../navigation/AuthParamList';

const RegisterScreen: FC<AuthNavProps<'RegisterScreen'>> = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate('LoginScreen');
  };

  return <Register onPress={handleNavigate} />;
};

export default RegisterScreen;
