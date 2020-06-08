export type KeyboardAppearance = 'dark' | 'light';

export type DefaultResponse = {
  success: boolean;
};

export type TextFieldStatus = 'default' | 'validated' | 'error';

export type TextFieldType = {
  value: string;
  helperText: string;
  status: TextFieldStatus;
};
