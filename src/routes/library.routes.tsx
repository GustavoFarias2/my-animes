import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { AsyncStorage } from 'react-native';

import { RouteProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tabs = createMaterialTopTabNavigator();

import Library from '../pages/Library';
import LibraryHeader from '../components/LibraryHeader';

type NavigationProps = {
  Library: any
}

export type LibraryouteParamList = {
  navigation: MaterialTopTabNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'Library' | any>
}

export type Tab = {
  name: string
}

const LibraryRoutes: React.FC = () => {

  const [tabs, setTabs] = useState([
    { name: 'Home' }
  ]);

  useEffect(() => {
    const getTabs = async () => {
      const tabsInStorage = await AsyncStorage.getItem('@my-animes/tabs');

      tabsInStorage && setTabs(JSON.parse(tabsInStorage));
    }

    getTabs();
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
            initialParams={{ tabs, setTabs }}
          />
        ))}

      </Tabs.Navigator>
    </>
  )

}

export default LibraryRoutes;
