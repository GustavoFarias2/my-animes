import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 'auto',
    height: 180,
    resizeMode: 'stretch'
  },
  info_container: {
    flex: 2,
    flexDirection: 'row',
    paddingLeft: 8
  },
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular'
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  popularity: {
    fontSize: 18,
    fontFamily: 'Montserrat_700Bold',
  },
  ageRating: {
    fontSize: 14,
    fontFamily: 'Montserrat_700Bold',
    alignSelf: 'flex-end'
  }
});

export default styles;
