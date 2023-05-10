import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 0,
  },
  image: {
    width: '100%',
    height: 200,
  },
  number: {
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
  round: {
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
  buttonContainer: {
    paddingVertical: 20,
  },
});
