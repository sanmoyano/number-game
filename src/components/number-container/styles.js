import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 10,
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
});
