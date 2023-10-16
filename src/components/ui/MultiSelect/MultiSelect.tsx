import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { FormHelperText, MenuItem, Select, InputLabel, FormControl, Checkbox } from '@mui/material';

interface Props {
  name: string;
  control: any;
  rules?: any;
  errors?: any;
  options: Record<string, any>[];
  id?: string;
  label?: string;
  disabled?: boolean;
  keyValue?: string;
  keyLabel?: string;
}

export const MultiSelect: FC<Props> = ({
  name,
  control,
  rules,
  errors,
  options,
  id = 'select',
  label = 'Seleccionar',
  disabled = false,
  keyValue = 'id',
  keyLabel = 'name',
}) => {
  if (!control) {
    throw new Error('El parámetro "control" es necesario para el componente MultiSelect y no puede ser nulo.');
  }

  const hasError = errors[name];

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormControl sx={{ display: 'flex' }} size="small" disabled={disabled} error={hasError}>
          <InputLabel id={`${id}-label`}>{label}</InputLabel>

          <Select {...field} id={id} label={label} labelId={`${id}-label`} multiple value={field.value || []}>
            {options.map((option) => (
              <MenuItem key={option[keyValue]} value={option[keyValue]}>
                <Checkbox checked={field.value.findIndex((item: number) => item === option[keyValue]) >= 0} />
                {option[keyLabel]}
              </MenuItem>
            ))}
          </Select>
          {hasError && <FormHelperText error>{errors && errors[name]?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
