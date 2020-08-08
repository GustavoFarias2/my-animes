import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import theme from './assets/theme';

import { StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <>

    <StatusBar backgroundColor='transparent' barStyle='dark-content' />

    <NavigationContainer theme={theme}>
      <Routes />
    </NavigationContainer>

  </>
)

export default App;
