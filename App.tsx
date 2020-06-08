import React, { FC, useState } from 'react';
import { store } from './src/store';
import { bootstrap } from './src/bootstrap';

import { AppLoading } from 'expo';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/Routes';

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
      <Container>
        <AppNavigation />
      </Container>
    </Provider>
  );
};

export default App;
