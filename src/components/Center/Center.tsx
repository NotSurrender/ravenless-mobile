import React, { FC } from 'react';
import classes from './styles';
import { View } from 'react-native';

const Center: FC = ({ children }) => {
  return <View style={classes.center}>{children}</View>;
};

export default Center;
