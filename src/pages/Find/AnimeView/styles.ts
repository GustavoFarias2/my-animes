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
    paddingHorizontal: 25
  },
  synopsis: {
    fontSize: 20,
    marginVertical: 15,
    fontFamily: 'Archivo_400Regular',
    lineHeight: 27,
    letterSpacing:  1.4
  }
});

export default styles;
