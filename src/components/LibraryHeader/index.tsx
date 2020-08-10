import React, { Dispatch, SetStateAction, useState } from 'react';

import { Tab } from '../../routes/library.routes';

import {
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  View
} from 'react-native';
import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

interface Props {
  tabState: [Tab[], Dispatch<SetStateAction<Tab[]>>]
}

const LibraryHeader: React.FC<Props> = ({ tabState }) => {

  const [tabs, setTabs] = tabState;

  const [showInput, setShowInput] = useState(false);
  const [tabName, setTabName] = useState('');

  const handleClick = async () => {

    if (!showInput)
      setShowInput(true);
    else {

      if (tabName === '')
        setShowInput(false);

      else {

        if (tabs.find((tab) => tab.name === tabName))
          alert('ja criada')
        else {

          const newTabs = [...tabs, { name: tabName }];

          await AsyncStorage.setItem('@my-animes/tabs', JSON.stringify(newTabs));

          setTabName('');
          setTabs(newTabs);
          setShowInput(false);

        }
      }

    }

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={handleClick}>
        <Ionicons name='ios-add-circle-outline' size={32} style={styles.icon} />
      </TouchableOpacity>

      <View style={{
        flex: 1,
        paddingHorizontal: 10
      }}>
        {showInput &&
          <TextInput
            style={{
              borderBottomColor: '#000',
              borderBottomWidth: 1,
              width: '95%',
              fontSize: 16,
              paddingBottom: 0
            }}
            value={tabName}
            placeholder='Tab name'
            onChangeText={(v) => setTabName(v)}
            onBlur={() => setShowInput(!showInput)}
          />}

      </View>
    </View>
  )

}

export default LibraryHeader;