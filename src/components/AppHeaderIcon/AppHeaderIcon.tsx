import React, { FC } from 'react';
import { useTheme } from '@react-navigation/native';

import { HeaderButton } from 'react-navigation-header-buttons/index';
import { Ionicons } from '@expo/vector-icons';

type AppHeaderIconProps = {
  iconName: string;
  show: string;
  title: string;
  onPress: () => void;
  getButtonElement: () => void;
};

const AppHeaderIcon: FC<AppHeaderIconProps> = props => {
  const { colors } = useTheme();

  return <HeaderButton {...props} color={colors.text} iconSize={24} IconComponent={Ionicons} />;
};

export default AppHeaderIcon;
