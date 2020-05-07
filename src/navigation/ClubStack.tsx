import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import AppHeaderIcon from '../components/AppHeaderIcon';
import ClubListScreen from '../screens/ClubListScreen';
import ClubScreen from '../screens/ClubScreen';

import { ClubParamList } from './ClubParamList';

const Stack = createStackNavigator<ClubParamList>();

const ClubStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => ({
          headerTitle: 'Клубы',
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
          )
        })}
        name="ClubList"
        component={ClubListScreen}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerTitle: 'Клуб',
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
          )
        })}
        name="Club"
        component={ClubScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ClubStack;
