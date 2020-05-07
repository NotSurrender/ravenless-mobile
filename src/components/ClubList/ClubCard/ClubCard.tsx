import React, { FC } from 'react';
import classes from './styles';
import { useTheme } from '@react-navigation/native';

import { View, Text } from 'react-native';

import { ClubCardType } from '../../../types/club';

type ClubCardProps = {
  data: ClubCardType;
};

const ClubCard: FC<ClubCardProps> = ({ data }) => {
  const { colors } = useTheme();

  return (
    <View style={{ ...classes.card, backgroundColor: colors.card }}>
      <Text style={{ color: colors.text }}>Имя: {data.name}</Text>
      <Text style={{ color: colors.text }}>Описание: {data.description}</Text>
    </View>
  );
};

export default ClubCard;
