import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface TextAreaProps {
  name: string;
  label: string;
  control: any;
  rules?: any;
  errors?: any;
  disabled?: boolean;
  rows?: number;
}

export const TextArea: FC<TextAreaProps> = ({ name, label, control, rules, errors, disabled = false, rows }) => {
  if (!control) {
    throw new Error('El parámetro "control" es necesario para el componente TextArea y no puede ser nulo.');
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          multiline
          error={!!(errors && errors[name])}
          helperText={errors && errors[name]?.message}
          fullWidth
          disabled={disabled}
          rows={rows}
        />
      )}
    />
  );
};
