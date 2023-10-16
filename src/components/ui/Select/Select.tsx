import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { FormHelperText, MenuItem, Select as SelectMUI, InputLabel, FormControl } from '@mui/material';
import { useTranslation } from '@/hooks';

interface Props {
  name: string;
  control: any;
  options: Record<string, any>[];
  id?: string;
  rules?: any;
  errors?: any;
  label?: string;
  disabled?: boolean;
  keyValue?: string;
  keyLabel?: string;
  addDefaultNoneOption?: boolean;
}

export const Select: FC<Props> = ({
  name,
  control,
  rules,
  errors,
  options,
  id = 'select',
  label = 'Native select',
  disabled = false,
  keyValue = 'value',
  keyLabel = 'label',
  addDefaultNoneOption = false,
}) => {
  if (!control) {
    throw new Error('El parámetro "control" es necesario para el componente Select y no puede ser nulo.');
  }

  const hasError = errors[name];
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormControl sx={{ display: 'flex' }} size="small" disabled={disabled} error={hasError}>
          <InputLabel id={`${id}-label`}>{label}</InputLabel>
          <SelectMUI {...field} id={id} label={label} labelId={`${id}-label`}>
            {addDefaultNoneOption && (
              <MenuItem key={`${id}-none-option`} value={''}>
                {t('components.common.noneLabel')}
              </MenuItem>
            )}
            {options.map((option) => (
              <MenuItem key={option[keyValue]} value={option[keyValue]}>
                {option[keyLabel]}
              </MenuItem>
            ))}
          </SelectMUI>

          {hasError && <FormHelperText error>{errors && errors[name]?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
