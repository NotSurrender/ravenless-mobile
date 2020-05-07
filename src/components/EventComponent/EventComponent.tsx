import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';

import { EventType } from '../../types/event';

type EventComponentProps = {
  data: EventType;
};

const EventComponent: FC<EventComponentProps> = ({ data }) => {
  return (
    <View>
      <Text>{data.name}</Text>
      <Text>{data.place}</Text>
      <Text>{data.description}</Text>
    </View>
  );
};

export default EventComponent;
