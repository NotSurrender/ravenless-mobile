import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

export const Center: FC = ({ children }) => {
  return <View style={styles.center}>{children}</View>;
};
