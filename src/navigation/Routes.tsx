import React, { FC, useState } from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppDrawers from './AppDrawers';

const AppNavigation: FC = () => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        {authorized ? <AuthStack /> : <AppDrawers />}
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default AppNavigation;
