import React from 'react';

import {
  LibraryouteParamList,
  Tab
} from '../../routes/library.routes';

import {
  View,
  TouchableOpacity,
  Text,
  AsyncStorage
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Library: React.FC<LibraryouteParamList> = ({ navigation, route }) => {

  const tabs = route.params?.tabs;
  const setTabs = route.params?.setTabs;

  const handleClick = async () => {

    // const newTabs = tabs.filter((tab: Tab) => tab.name !== route.name);

    // await AsyncStorage.setItem('@my-animes/tabs', JSON.stringify(newTabs));

    // navigation.goBack()
    // setTabs(newTabs);

    console.log(route.name)
  }

  return (
    <View style={{ flex: 1 }}>
      {route.name !== "Home" && <View style={{
        height: 40,
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
      }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
          onPress={() => handleClick()}
        >
          <Ionicons
            style={{
              marginHorizontal: 7
            }}
            name='ios-remove-circle-outline'
            size={28}
          />
          <Text>
            Remove
          </Text>
        </TouchableOpacity>
      </View>}
    </View>
  )

}

export default Library;