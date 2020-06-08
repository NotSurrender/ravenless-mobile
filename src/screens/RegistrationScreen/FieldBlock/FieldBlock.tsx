import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TextField, TextFieldProps } from '../../../ui/TextField';

import { TextFieldType } from '../../../types/common';
import { AppState } from '../../../store';
import { RegistrationFormFields } from '../../../store/types/auth';

type FieldBlockProps = {
  fieldName: keyof RegistrationFormFields;
  selector: (state: AppState) => TextFieldType;
  onChange: (fieldName: keyof RegistrationFormFields, value: string) => void;
};

type Props = FieldBlockProps & Omit<TextFieldProps, 'onChangeText'>;

export const FieldBlock: FC<Props> = ({ selector, fieldName, onChange, ...props }) => {
  const field = useSelector(selector);

  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    dispatch(onChange(fieldName, value));
  };

  return <TextField {...props} {...field} onChangeText={handleChange} />;
};
