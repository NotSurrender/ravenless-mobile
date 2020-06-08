import { StyleSheet } from 'react-native';

const DEFAULT_INDENT = 8;

export const indent = (value: number): number => {
  return value * DEFAULT_INDENT;
};

export const common = StyleSheet.create({
  topIndentSmall: {
    marginTop: indent(1)
  },
  topIndentDefault: {
    marginTop: indent(2)
  },
  topIndentLarge: {
    marginTop: indent(4)
  }
});

export const MAIN_COLOR = 'rgb(24, 59, 99)';
