import React, { useState } from 'react';

import Anime from '../../../@types/anime';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  anime: Anime
}

const AnimeRow: React.FC<Props> = ({ anime }) => {

  const [url] = useState({ uri: anime.attributes.posterImage.small });

  return (
    <View key={anime.id} style={styles.container}>
      <TouchableOpacity style={styles.touchable}>

        <View style={{ flex: 1 }}>
          <Image source={url} style={styles.image} />
        </View>

        <View style={styles.info_container}>
          <View style={{ flex: 3 }}>
            <Text style={styles.title}>{anime.attributes.canonicalTitle}</Text>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
              <Text>
                Episodes: {anime.attributes.episodeCount}
              </Text>
              <Text>
                {anime.attributes.subtype} - {anime.attributes.status}
              </Text>
            </View>
          </View>

          <View style={styles.right}>
            <Text style={styles.popularity}>#{anime.attributes.popularityRank}</Text>
            <Text style={styles.ageRating}>#{anime.attributes.ageRating}</Text>
          </View>

        </View>

      </TouchableOpacity>
    </View>
  )

}

export default AnimeRow;