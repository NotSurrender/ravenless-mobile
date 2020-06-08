import React, { FC } from 'react';
import { styles } from './styles';

import { TextInput, TextInputProps, KeyboardType, ViewStyle, StyleProp } from 'react-native';
import { TextFieldWrapper } from '../TextFieldWrapper';

import { KeyboardAppearance, TextFieldType } from '../../types/common';

export type TextFieldProps = {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  keyboardType?: KeyboardType;
  maxLength?: number;
  keyboardAppearance?: KeyboardAppearance;
  secureTextEntry?: boolean;
  autoFocus?: boolean;
  onChangeText: (value: string) => void;
};

type Props = TextInputProps & TextFieldProps & TextFieldType;

export const TextField: FC<Props> = ({ style, helperText, status, ...props }) => {
  return (
    <TextFieldWrapper style={style} helperText={helperText} status={status}>
      <TextInput
        {...props}
        style={[
          styles.input,
          status === 'validated' ? styles.inputValid : status === 'error' ? styles.inputError : null
        ]}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </TextFieldWrapper>
  );
};

TextField.defaultProps = {
  helperText: '',
  value: '',
  placeholder: '',
  maxLength: 100,
  secureTextEntry: false,
  autoFocus: false
};
