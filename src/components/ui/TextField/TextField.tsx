import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { default as MUITextField } from '@mui/material/TextField';

interface TextFieldProps {
  name: string;
  control: any;
  rules?: any;
  errors?: any;
  id?: string;
  label?: string;
  disabled?: boolean;
  type?: string;
  max?: string;
  min?: string;
}

export const TextField: FC<TextFieldProps> = ({
  name,
  control,
  rules,
  errors,
  id,
  label = 'Default Label',
  disabled = false,
  type = 'text',
  max,
  min,
}) => {
  if (!control) {
    throw new Error('El parámetro "control" es necesario para el componente TextField y no puede ser nulo.');
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <MUITextField
          {...field}
          label={label}
          id={id}
          size="small"
          error={!!(errors && errors[name])}
          helperText={errors && errors[name]?.message}
          fullWidth
          type={type}
          disabled={disabled}
          inputProps={{
            max: max,
            min: min,
          }}
        />
      )}
    />
  );
};
