import React, { FC } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

import { TextFieldStatus } from '../../types/common';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

export type TextFieldWrapperProps = {
  style?: StyleProp<ViewStyle>;
  status: TextFieldStatus;
  helperText: string;
};

export const TextFieldWrapper: FC<TextFieldWrapperProps> = ({
  status,
  helperText,
  style,
  children
}) => {
  return (
    <View style={style}>
      <Text style={styles.helperText}>{helperText}</Text>
      <View style={styles.inputWrapper}>
        {children}
        <View style={styles.iconWrapper}>
          {status === 'validated' ? (
            <FontAwesome5 name="check" size={24} color="green" />
          ) : status === 'error' ? (
            <FontAwesome name="close" size={24} color="red" />
          ) : null}
        </View>
      </View>
    </View>
  );
};
