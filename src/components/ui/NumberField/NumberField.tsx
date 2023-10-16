import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface NumberFieldProps {
  name: string;
  control: any;
  rules?: any;
  errors?: any;
  id?: string;
  label?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
}

export const NumberField: FC<NumberFieldProps> = ({ name, control, rules, errors, id, label = 'Default Label', disabled = false, min, max }) => {
  if (!control) {
    throw new Error('El parámetro "control" es necesario para el componente NumberField y no puede ser nulo.');
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          type="number"
          label={label}
          id={id}
          size="small"
          error={!!(errors && errors[name])}
          helperText={errors && errors[name]?.message}
          fullWidth
          disabled={disabled}
          inputProps={{ min, max }}
        />
      )}
    />
  );
};
