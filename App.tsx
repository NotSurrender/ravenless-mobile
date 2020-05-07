import React, { FC, useState } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import store from './src/store';

import AppNavigation from './src/navigation/Routes';

import bootstrap from './src/bootstrap';

const App: FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={error => console.error(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
