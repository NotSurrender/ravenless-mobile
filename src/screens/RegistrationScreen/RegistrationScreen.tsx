import React, { FC } from 'react';
import { useColorScheme } from 'react-native-appearance';
import { setRegistrationFormTextField } from '../../store/AC/auth';
import { withForm } from '../../HOC/withForm';
import { common } from '../../styles';
import { styles } from './styles';

import { View } from 'react-native';
import { FieldBlock } from './FieldBlock';
import { ButtonBlock } from './ButtonBlock';

import { AuthNavProps } from '../../navigation/AuthParamList';
import { KeyboardAppearance } from '../../types/common';
import { AppState } from '../../store';

const RegistrationScreenComponent: FC<AuthNavProps<'RegistrationScreen'>> = () => {
  const scheme = useColorScheme();

  const keyboardAppearance: KeyboardAppearance = scheme === 'dark' ? 'dark' : 'light';

  return (
    <View style={common.topIndentDefault}>
      <FieldBlock
        style={common.topIndentSmall}
        selector={({ auth }: AppState) => auth.forms.registration.fields.email}
        fieldName="email"
        placeholder="Email"
        keyboardAppearance={keyboardAppearance}
        autoFocus
        maxLength={30}
        onChange={setRegistrationFormTextField}
      />

      <FieldBlock
        style={common.topIndentSmall}
        selector={({ auth }: AppState) => auth.forms.registration.fields.nickname}
        fieldName="nickname"
        placeholder="Никнейм"
        keyboardAppearance={keyboardAppearance}
        maxLength={30}
        onChange={setRegistrationFormTextField}
      />

      <FieldBlock
        style={common.topIndentSmall}
        selector={({ auth }: AppState) => auth.forms.registration.fields.password}
        fieldName="password"
        placeholder="Пароль"
        keyboardAppearance={keyboardAppearance}
        maxLength={30}
        secureTextEntry
        onChange={setRegistrationFormTextField}
      />

      <FieldBlock
        style={common.topIndentSmall}
        selector={({ auth }: AppState) => auth.forms.registration.fields.rePassword}
        fieldName="rePassword"
        placeholder="Повторите пароль"
        keyboardAppearance={keyboardAppearance}
        maxLength={30}
        secureTextEntry
        onChange={setRegistrationFormTextField}
      />

      <ButtonBlock style={[styles.buttonWrapper, common.topIndentLarge]} />
    </View>
  );
};

export const RegistrationScreen = withForm(RegistrationScreenComponent);
