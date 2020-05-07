import React, { FC } from 'react';
import classes from './styles';
import { useTheme, useNavigation } from '@react-navigation/native';
import images from '../../../../assets/images';

import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { EventCardType } from '../../../types/event';

type EventCardProps = {
  data: EventCardType;
};

const EventCard: FC<EventCardProps> = ({ data }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('EventScreen', {
      id: data.id
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <View style={{ ...classes.card, backgroundColor: colors.card }}>
        <View style={classes.header}>
          <Text style={{ ...classes.headerTitle, color: colors.text }}>{data.name}</Text>
          <MaterialIcons
            name="chevron-right"
            size={20}
            style={{ ...classes.chevronIcon, color: colors.text }}
          />
        </View>

        <View style={classes.divider} />

        <View style={classes.body}>
          <View style={classes.organizerBlock}>
            <Image style={classes.avatar} source={images[data.avatar]} />
            <View style={classes.organizerData}>
              <Text style={{ ...classes.organizerName, color: colors.text }}>{data.organizer}</Text>
              <Text style={classes.clubName}>{data.clubName}</Text>
            </View>
          </View>

          <View style={classes.description}>
            <Text style={{ ...classes.d, color: colors.text }}>{data.description}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
