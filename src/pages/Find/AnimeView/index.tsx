import React, { useState } from 'react';

import { FindRouteParamList } from '../../../routes/find.routes';

import { ScrollView, View, Text, Image } from 'react-native';
import styles from './styles';

import FloatButton from '../../../components/floatButton/index';

const AnimeView: React.FC<FindRouteParamList> = ({ route }) => {

  const anime = route.params;

  const [url] = useState({ uri: anime?.attributes.coverImage.original });

  const handleClick = () => {

  }

  return (
    <View style={styles.container}>
      <Image source={url} style={styles.image} />

      <ScrollView style={styles.scroll}>
        <Text style={styles.synopsis}>
          {anime?.attributes.synopsis}
        </Text>
      </ScrollView>

      <FloatButton action={handleClick} iconName='ios-add' />
    </View>
  )

}

export default AnimeView;