import React, { Dispatch, SetStateAction } from 'react';

import { Tab } from '../../routes/library.routes';

import { View, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

interface Props {
  tabState: [Tab[], Dispatch<SetStateAction<Tab[]>>]
}

const LibraryHeader: React.FC<Props> = ({ tabState }) => {

  const [tabs, setTabs] = tabState;

  const handleClick = async () => {
    let name = 'teste 32'
    if (tabs.find((tab) => tab.name === name))
      alert('ja criada')
    else {
      const newTabs = [...tabs, { name }];

      // const newTabsString = newTabs.map((tab) => JSON.stringify(tab) + ';');

      await AsyncStorage.setItem('@my-animes/tabs', JSON.stringify(newTabs))
      
      setTabs(newTabs)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={handleClick}>
        <Ionicons name='ios-add-circle-outline' size={32} style={styles.icon} />
        <Text style={styles.add}>Add tab</Text>
      </TouchableOpacity>
    </View>
  )

}

export default LibraryHeader;