import React, { Dispatch, SetStateAction } from 'react';

import { tab } from '../../routes/library.routes';

import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

interface Props {
  tabState: [tab[], Dispatch<SetStateAction<tab[]>>]
}

const LibraryHeader: React.FC<Props> = ({ tabState }) => {

  const [tabs, setTabs] = tabState;

  const handleClick = () => {
    let name = 'teste 32'
    if (tabs.find((tab) => tab.name === name))
      alert('ja criada')
    else
      setTabs([...tabs, { name }])
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