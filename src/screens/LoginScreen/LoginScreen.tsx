import React, { FC } from 'react';
import { useColorScheme } from 'react-native-appearance';
import { setLoginFormTextField } from '../../store/AC/auth';
import { withForm } from '../../HOC/withForm';
import { images } from '../../../assets/images';
import { common } from '../../styles';
import { styles } from './styles';

import { View, Image } from 'react-native';
import { Form, Item, Button, Text, Label, Input, Content, Icon } from 'native-base';
import { FieldBlock } from './FieldBlock';

import { AuthNavProps } from '../../navigation/AuthParamList';
import { KeyboardAppearance } from '../../types/common';
import { AppState } from '../../store';
import { ScrollView } from 'react-native-gesture-handler';

const LoginScreenComponent: FC<AuthNavProps<'LoginScreen'>> = ({ navigation }) => {
  const scheme = useColorScheme();

  const handleNavigate = () => {
    navigation.navigate('RegistrationScreen');
  };

  const keyboardAppearance: KeyboardAppearance = scheme === 'dark' ? 'dark' : 'light';

  return (
    <>
      <Image style={{ alignSelf: 'center', width: 200, height: 80 }} source={images.logo} />
      <Content padder>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Пароль</Label>
          <Input secureTextEntry />
        </Item>
        <Button style={[common.topIndentLarge, styles.button]} rounded onPress={handleNavigate}>
          <Text>Регистрация</Text>
        </Button>
      </Content>
    </>
  );
};

export const LoginScreen = LoginScreenComponent;
