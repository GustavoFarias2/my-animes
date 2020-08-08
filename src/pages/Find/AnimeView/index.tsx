import React, { useState } from 'react';

import { FindRouteParamList } from '../../../routes/find.routes';

import { ScrollView, View, Text, Image } from 'react-native';

const AnimeView: React.FC<FindRouteParamList> = ({ route }) => {

  const anime = route.params;

  const [url] = useState({ uri: anime?.attributes.coverImage.original });

  return (
    <View style={{
      flex: 1
    }}>
      <Image source={url} style={{
        width: '100%',
        height: 180,
        resizeMode: 'stretch'
      }} />

      <ScrollView style={{
        flex: 1,
        paddingHorizontal: 25
      }}>
        <Text style={{
          fontSize: 28,
          fontFamily: 'Archivo_400Regular',
          marginVertical: 10
        }}>
          {anime?.attributes.canonicalTitle}
        </Text>
        <Text style={{
          fontSize: 20,
          fontFamily: 'Archivo_400Regular'
        }}>
          {anime?.attributes.synopsis}
        </Text>
      </ScrollView>
    </View>
  )

}

export default AnimeView;