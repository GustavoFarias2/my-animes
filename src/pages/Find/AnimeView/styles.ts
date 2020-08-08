import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'stretch'
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20
  },
  synopsis: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'Archivo_400Regular'
  }
});

export default styles;
