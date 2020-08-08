import React from 'react';

import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular
} from '@expo-google-fonts/montserrat';

import AppRoutes from './app.routes';

const Routes = () => {

  const [fontLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular
  });

  if (!fontLoaded)
    return <></>
  else
    return <AppRoutes />

}

export default Routes;
