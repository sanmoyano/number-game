import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingVertical: 30,
  },
  content: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
