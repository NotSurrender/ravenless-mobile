import React, { FC } from 'react';
import { Text, Button } from 'react-native';

import Center from '../Center';

type LoginProps = {
  onPress: () => void;
};

const Login: FC<LoginProps> = ({ onPress }) => {
  const handleLogin = () => {};

  return (
    <Center>
      <Text>Логин</Text>
      <Button title="Войти" onPress={handleLogin} />
      <Button title="Зарегистрироваться" onPress={onPress} />
    </Center>
  );
};

export default Login;
