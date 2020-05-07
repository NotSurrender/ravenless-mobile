import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppHeaderIcon from '../components/AppHeaderIcon';
import EventListScreen from '../screens/EventListScreen';
import EventScreen from '../screens/EventScreen';
import CreateEventScreen from '../screens/CreateEventScreen';

import { EventParamList } from './EventParamList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const Stack = createStackNavigator<EventParamList>();

const EventStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => ({
          headerTitle: 'Мероприятия',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Toggle drawer"
                iconName="ios-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Create event"
                iconName="ios-create"
                onPress={() => {
                  navigation.push('CreateEventScreen');
                }}
              />
            </HeaderButtons>
          )
        })}
        name="EventListScreen"
        component={EventListScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Мероприятие'
        }}
        name="EventScreen"
        component={EventScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Создание нового мероприятия'
        }}
        name="CreateEventScreen"
        component={CreateEventScreen}
      />
    </Stack.Navigator>
  );
};

export default EventStack;
