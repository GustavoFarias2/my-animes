import React, { useEffect, useState } from 'react';

import { RouteProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tabs = createMaterialTopTabNavigator();

import Library from '../pages/Library';
import LibraryHeader from '../components/LibraryHeader';

type NavigationProps = {
  Library: any,
}

export type LibraryouteParamList = {
  navigation: MaterialTopTabNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'Library'>
}

export type tab = {
  name: string
}

const LibraryRoutes: React.FC = () => {

  const [tabs, setTabs] = useState([
    { name: 'Library' },
    { name: 'Vendo' },
    { name: 'vo ve' },
    { name: 'ja vi' },
  ]);

  useEffect(() => {
  }, []);

  return (
    <>
      <LibraryHeader tabState={[tabs, setTabs]} />

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
