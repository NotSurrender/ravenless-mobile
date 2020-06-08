import { StyleSheet } from 'react-native';
import { indent } from '../../styles';

export const styles = StyleSheet.create({
  helperText: {
    height: 20,
    paddingLeft: indent(0.5),
    color: 'red'
  },
  input: {
    paddingTop: indent(1),
    paddingBottom: indent(1),
    paddingLeft: indent(2),
    paddingRight: indent(2),
    backgroundColor: 'white',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 8
  },
  inputValid: {
    borderWidth: 1,
    borderColor: 'green'
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'red'
  }
});
