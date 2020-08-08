import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();

import Find from '../pages/Find/index';
import LibraryRoutes from './library.routes';

type NavigationProps = {
  Find: any | undefined,
  LibraryRoutes: any | undefined,
}

export type AppRouteParamList = {
  navigation: BottomTabNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'Find' | 'LibraryRoutes'>
}

import { Ionicons } from '@expo/vector-icons';
const returnIcon = (name: string) => {
  return {
    tabBarIcon: ({ color }: { color: string }) => (<Ionicons name={name} color={color} size={24} />)
  }
}

const Routes: React.FC = () => (

  <Tabs.Navigator>

    <Tabs.Screen
      name="Find"
      component={Find}
      options={returnIcon('ios-search')}
    />

    <Tabs.Screen
      name="LibraryRoutes"
      component={LibraryRoutes}
      options={returnIcon('ios-albums')}
    />

  </Tabs.Navigator>

)

export default Routes;
