import React, { FC } from 'react';
import { Text, Button } from 'react-native';

import Center from '../Center';

type RegisterProps = {
  onPress: () => void;
};

const Register: FC<RegisterProps> = ({ onPress }) => {
  return (
    <Center>
      <Text>Регистрация</Text>
      <Button title="Войти" onPress={onPress} />
    </Center>
  );
};

export default Register;
