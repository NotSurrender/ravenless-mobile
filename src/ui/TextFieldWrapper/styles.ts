import { StyleSheet } from 'react-native';
import { indent } from '../../styles';

export const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center'
  },
  helperText: {
    height: 20,
    paddingLeft: indent(0.5),
    color: 'red'
  },
  iconWrapper: {
    position: 'absolute',
    right: indent(2)
  }
});
