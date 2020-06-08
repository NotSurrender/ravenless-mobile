import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Input, Item, Label } from 'native-base';
import { TextField, TextFieldProps } from '../../../ui/TextField';

import { TextFieldType } from '../../../types/common';
import { LoginFormFields } from '../../../store/types/auth';
import { AppState } from '../../../store';

type FieldBlockProps = {
  fieldName: keyof LoginFormFields;
  selector: (state: AppState) => TextFieldType;
  onChange: (fieldName: keyof LoginFormFields, value: string) => void;
};

type Props = FieldBlockProps & Omit<TextFieldProps, 'onChangeText'>;

export const FieldBlock: FC<Props> = ({ selector, fieldName, onChange, ...props }) => {
  const field = useSelector(selector);

  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    dispatch(onChange(fieldName, value));
  };

  return (
    <Item floatingLabel>
      <Label>Email</Label>
      <Input value={field.value} onChangeText={handleChange} />;
    </Item>
  );

  // return <TextField {...props} {...field} onChangeText={handleChange} />;
};
