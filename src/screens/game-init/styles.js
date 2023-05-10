import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 16,
    color: theme.colors.black,
    textAlign: 'center',
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: theme.colors.black,
    paddingVertical: 5,
    textAlign: 'center',
  },
  input: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 1,
    minWidth: 80,
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    width: 100,
  },
  confirmedContainer: {
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  confirmedTitle: { fontSize: 16 },
});
