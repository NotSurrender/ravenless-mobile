import React, { FC } from 'react';
import styles from './styles';

import { View, Text, FlatList } from 'react-native';

import ClubCard from './ClubCard';

import { ClubCardType } from '../../types/club';

type ClubListProps = {
  data: Array<ClubCardType>;
};

const ClubList: FC<ClubListProps> = ({ data }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ClubCard data={item} />}
      />
      <Text>Cписок клубов</Text>
    </View>
  );
};

export default ClubList;
