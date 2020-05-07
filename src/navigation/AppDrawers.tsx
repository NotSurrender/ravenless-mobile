import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import EventStack from './EventStack';
import ClubStack from './ClubStack';

import { AppParamList } from './AppParamList';

const Drawer = createDrawerNavigator<AppParamList>();

const AppDrawers: FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Events">
      <Drawer.Screen
        options={{
          title: 'Мероприятия'
        }}
        name="Events"
        component={EventStack}
      />
      <Drawer.Screen
        options={{
          title: 'Клубы'
        }}
        name="Clubs"
        component={ClubStack}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawers;
