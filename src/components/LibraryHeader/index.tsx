import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LibraryHeader: React.FC = () => {

  return (
    <View style={{
      height: 40,
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: '#fff'
    }}>
      <TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Text style={{
          fontFamily: 'Archivo_400Regular',
          fontSize: 16
        }}>
          Add tab
        </Text>
        <Ionicons
          name='ios-add-circle-outline'
          size={32}
          style={{
            marginHorizontal: 20
          }}
        />
      </TouchableOpacity>
    </View>
  )

}

export default LibraryHeader;