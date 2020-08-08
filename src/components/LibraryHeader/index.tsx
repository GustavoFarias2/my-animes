import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

const LibraryHeader: React.FC = () => {

  const handleClick = () => {
    alert('clicado')
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