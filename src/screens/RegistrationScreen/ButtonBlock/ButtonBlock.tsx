import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../../store/AC/auth';
import { MAIN_COLOR } from '../../../styles';

import { View, Button, StyleProp, ViewStyle } from 'react-native';

import { AppState } from '../../../store';

type ButtonBlockProps = {
  style?: StyleProp<ViewStyle>;
};

export const ButtonBlock: FC<ButtonBlockProps> = ({ style }) => {
  const formValidated = useSelector(({ auth }: AppState) => auth.forms.registration.validated);
  const dispatch = useDispatch();

  const handleRegister = useCallback(() => {
    dispatch(register());
  }, []);

  return (
    <View style={style}>
      <Button
        disabled={!formValidated}
        title="Зарегистрироваться"
        color={MAIN_COLOR}
        onPress={handleRegister}
      />
    </View>
  );
};
