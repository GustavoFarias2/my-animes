import React, { useEffect } from 'react';

import { RouteProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tabs = createMaterialTopTabNavigator();

import Library from '../pages/Library';
import LibraryHeader from '../components/LibraryHeader';

type NavigationProps = {
  Library: any | undefined,
}

export type LibraryouteParamList = {
  navigation: MaterialTopTabNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'Library'>
}

const LibraryRoutes: React.FC = () => {

  const tabs = [
    { name: 'Library' },
    { name: 'Vendo' },
    { name: 'vo ve' },
    { name: 'ja vi' },
  ]

  useEffect(() => {
  }, []);

  return (
    <>
      <LibraryHeader />

      <Tabs.Navigator>

        {tabs.map((tab, i) => (
          <Tabs.Screen
            key={i}
            name={tab.name}
            component={Library}
          />
        ))}

      </Tabs.Navigator>
    </>
  )

}

export default LibraryRoutes;
