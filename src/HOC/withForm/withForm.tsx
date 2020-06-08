import React, { FC, ComponentType } from 'react';
import { images } from '../../../assets/images';
import { styles } from './styles';
import { common } from '../../styles';

import { ScrollView, Image, View } from 'react-native';

export const withForm = <T extends object>(Component: ComponentType<T>): FC<T> => ({
  children,
  ...props
}) => {
  return (
    <ScrollView style={[styles.form, common.topIndentDefault]}>
      <Image style={styles.logo} source={images.logo} />

      <View style={common.topIndentDefault}>
        <Component {...(props as T)} />
      </View>

      {children}
    </ScrollView>
  );
};
