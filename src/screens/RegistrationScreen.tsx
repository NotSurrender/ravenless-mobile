import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Button, TextInput } from 'react-native';

import Center from '../components/Center';

import { AppState } from '../store';
import { AuthNavProps } from '../navigation/AuthParamList';
import { RegistrationForm } from '../types/auth';

const RegistrationScreen: FC<AuthNavProps<'RegistrationScreen'>> = ({ navigation }) => {
  const { email, nickname, password, rePassword } = useSelector(
    ({ auth }: AppState) => auth.registrationForm
  );
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigation.navigate('LoginScreen');
  };

  const handleChangeTextInput = (fieldName: keyof RegistrationForm) => (value: string) => {};

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={handleChangeTextInput('email')} />
      <TextInput
        placeholder="Никнейм"
        value={nickname}
        onChangeText={handleChangeTextInput('nickname')}
      />
      <TextInput
        placeholder="Парyoоль"
        value={password}
        onChangeText={handleChangeTextInput('password')}
      />
      <TextInput
        placeholder="Повторите пароль"
        value={rePassword}
        onChangeText={handleChangeTextInput('rePassword')}
      />
      <Button title="Войти" onPress={handleNavigate} />
    </View>
  );
};

export default RegistrationScreen;
