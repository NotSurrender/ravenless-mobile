import { StyleSheet } from 'react-native';
import { indent } from '../../styles';

export const styles = StyleSheet.create({
  form: {
    paddingLeft: indent(4),
    paddingRight: indent(4)
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 80
  },
  buttonWrapper: {
    alignSelf: 'center'
  }
});
