import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

import { AuthParamList } from './AuthParamList';

const Stack = createStackNavigator<AuthParamList>();

const AuthStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        options={{
          headerTitle: 'Логин'
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Регистрация'
        }}
        name="RegistrationScreen"
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
