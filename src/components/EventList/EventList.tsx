import React, { FC } from 'react';
import styles from './styles';

import { View, FlatList, Text } from 'react-native';

import EventCard from './EventCard';

import { EventCardType } from '../../types/event';

type EventListProps = {
  data: Array<EventCardType>;
};

const EventList: FC<EventListProps> = ({ data }) => {
  return (
    <View style={styles.list}>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <EventCard data={item} />}
        />
      ) : (
        <Text>Новых мероприятий не запланировано</Text>
      )}
    </View>
  );
};

export default EventList;
