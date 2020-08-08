import React from 'react';

import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular
} from '@expo-google-fonts/montserrat';

import {
  Archivo_400Regular,
  Archivo_700Bold
} from '@expo-google-fonts/archivo';

import AppRoutes from './app.routes';

const Routes = () => {

  const [fontLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
    Archivo_400Regular,
    Archivo_700Bold
  });

  if (!fontLoaded)
    return <></>
  else
    return <AppRoutes />

}

export default Routes;
