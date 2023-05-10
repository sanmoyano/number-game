import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 18,
    color: theme.colors.black,
    textAlign: 'center',
    paddingVertical: 20,
    fontFamily: 'Quicksand-Bold',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: theme.colors.black,
    paddingVertical: 5,
    textAlign: 'center',
    fontFamily: 'Quicksand-Medium',
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
  confirmedTitle: { fontSize: 16, fontFamily: 'Quicksand-Medium' },
});
