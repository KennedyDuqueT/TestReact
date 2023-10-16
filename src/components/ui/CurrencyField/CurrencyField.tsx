import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface CurrencyFieldProps {
  name: string;
  control: any;
  rules?: any;
  errors?: any;
  id?: string;
  label?: string;
  disabled?: boolean;
}

export const CurrencyField: FC<CurrencyFieldProps> = ({ name, control, rules, errors, id, label = 'Coin Label', disabled = false }) => {
  if (!control) {
    throw new Error('El parámetro "control" es necesario para el componente CurrencyField y no puede ser nulo.');
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field: { onChange, value } }) => {
        const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          let value = e.target.value.replace(/[^0-9.]/g, '');
          e.target.value = value;
          if (value !== '') {
            value = parseFloat(value).toLocaleString();
          }
          onChange(e.target.value);
        };

        const formattedValue = value ? parseFloat(value).toLocaleString() : '';

        return (
          <TextField
            value={formattedValue}
            onChange={handleOnChange}
            type="text"
            label={label}
            id={id}
            size="small"
            error={!!(errors && errors[name])}
            helperText={errors && errors[name]?.message}
            fullWidth
            disabled={disabled}
            InputProps={{
              startAdornment: '$ ',
            }}
          />
        );
      }}
    />
  );
};
