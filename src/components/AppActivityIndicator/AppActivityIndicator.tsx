import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import Center from '../Center';

const AppActivityIndicator: FC = () => {
  return (
    <Center>
      <ActivityIndicator size="large" />
    </Center>
  );
};

export default AppActivityIndicator;
