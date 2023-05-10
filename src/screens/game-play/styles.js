import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../constants';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingVertical: 30,
  },
  content: {
    height: height * 0.3,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 90,
  },
});
