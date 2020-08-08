import React, { useRef } from 'react';

import Anime from '../../@types/anime';

import useFetch from '../../hooks/useFetch';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import TextInput from '../../components/inputs/text/index';

import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import AnimeRow from './AnimeRow/index';

const Find: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const { data, error } = useFetch('anime');

  const handleSubmit = () => { }

  if (!data)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
        <ActivityIndicator size='large' />
      </View>
    )

  else
    return (
      <View style={{ flex: 1 }}>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <TextInput name='search' customStyle={{ marginTop: 40 }} placeholder='Search for an Anime' />
        </Form>

        <ScrollView style={{ padding: 10 }}>

          {data.data.map((anime: Anime) => <AnimeRow key={anime.id} anime={anime} />)}

        </ScrollView>
      </View>
    )
}

export default Find;