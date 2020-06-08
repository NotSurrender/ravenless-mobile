import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import Center from '../Center';

export const Preloader: FC = () => {
  return (
    <Center>
      <ActivityIndicator size="large" />
    </Center>
  );
};
