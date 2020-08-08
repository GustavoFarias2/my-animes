import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
const Tabs = createStackNavigator();

import Find from '../pages/Find/index';
import AnimeView from '../pages/Find/AnimeView/index';

import Anime from '../@types/anime';

type NavigationProps = {
  Find: any | undefined,
  AnimeView: Anime
}

export type FindRouteParamList = {
  navigation: StackNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'Find' | 'AnimeView'>
}

const FindRoutes: React.FC = () => (

  <Tabs.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>

    <Tabs.Screen
      name="Find"
      component={Find}
      options={{ headerShown: false }}
    />

    <Tabs.Screen
      name="AnimeView"
      component={AnimeView}
      options={({ route }: FindRouteParamList) => {
        return {
          headerTitle: route.params?.attributes.canonicalTitle
        }
      }}
    />

  </Tabs.Navigator>

)

export default FindRoutes;
