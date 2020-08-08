import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <>

    <StatusBar backgroundColor='transparent' barStyle='dark-content' />

    <NavigationContainer>
      <Routes />
    </NavigationContainer>

  </>
)

export default App;
