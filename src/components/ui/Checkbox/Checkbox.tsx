import React, { ChangeEvent } from 'react';
import { Controller } from 'react-hook-form';
import { FormControl, FormControlLabel, Checkbox as MUICheckbox, CheckboxProps as MUICheckboxProps, FormHelperText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CheckboxProps extends MUICheckboxProps {
  name: string;
  label: string;
  control: any;
  rules?: any;
  errors?: any;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: any;
  checkedIcon?: any;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, label, control, rules, errors, disabled = false, onChange, icon, checkedIcon }) => {
  const theme = useTheme();
  if (!control) {
    throw new Error('El parámetro "control" es necesario para el componente Checkbox y no puede ser nulo.');
  }

  return (
    <FormControl error={!!(errors && errors[name])}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <FormControlLabel
            control={
              <MUICheckbox
                {...field}
                checked={field.value}
                checkedIcon={checkedIcon}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  if (onChange) {
                    onChange(e);
                  }
                }}
                disabled={disabled}
                sx={{
                  color: theme.palette.common.fieldBorder,
                }}
                icon={icon}
              />
            }
            label={label}
          />
        )}
      />
      {errors && <FormHelperText>{errors && errors[name]?.message}</FormHelperText>}
    </FormControl>
  );
};
