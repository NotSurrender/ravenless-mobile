import React, { FC } from 'react';

import { View, Text } from 'react-native';

import { ClubCardType } from '../../types/club';

type ClubProps = {
  data: ClubCardType;
};

const Club: FC<ClubProps> = ({ data }) => {
  return (
    <View>
      <Text>Наименование: {data.name}</Text>
      <Text>Описание: {data.description}</Text>
    </View>
  );
};

export default Club;
