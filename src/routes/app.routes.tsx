import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();

import FindRoutes from './find.routes';
import LibraryRoutes from './library.routes';

type NavigationProps = {
  FindRoutes: any | undefined,
  LibraryRoutes: any | undefined,
}
export type AppRouteParamList = {
  navigation: BottomTabNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'FindRoutes' | 'LibraryRoutes'>
}

import { Ionicons } from '@expo/vector-icons';

const returnIcon = (name: string) => {
  return {
    tabBarIcon: ({ color }: { color: string }) => (<Ionicons name={name} color={color} size={24} />)
  }
}

const Routes: React.FC = () => (

  <Tabs.Navigator tabBarOptions={{ showLabel: false }}>

    <Tabs.Screen
      name="FindRoutes"
      component={FindRoutes}
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
