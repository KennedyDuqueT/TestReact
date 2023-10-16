import React, { FC, useRef } from 'react';
import { Controller } from 'react-hook-form';
import { default as MUITextField } from '@mui/material/TextField';
import { Box, Typography } from '@mui/material';
import { Button } from '@/components/ui';

interface InputFileProps {
  name: string;
  control: any;
  rules?: any;
  errors?: any;
  id?: string;
  label?: string;
  disabled?: boolean;
  type?: string;
  buttonLabel: string;
  emptyFileLabel: string;
}

export const InputFile: FC<InputFileProps> = ({
  name,
  control,
  rules,
  errors,
  id,
  label = 'Default Label',
  disabled = false,
  type = 'text',
  buttonLabel,
  emptyFileLabel,
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onRef = () => {
    if (inputFileRef?.current?.click) {
      inputFileRef.current.click();
    }
  };

  if (!control) {
    throw new Error('El parámetro "control" es necesario para el componente InputFile y no puede ser nulo.');
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Box sx={{ position: 'relative' }}>
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
            focused
            inputRef={inputFileRef}
          />
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ position: 'absolute', top: 7, zIndex: 1, backgroundColor: 'white', margin: '0 12px', width: 'calc(100% - 24px)', padding: '2px 0' }}
          >
            <Button
              variant="contained"
              buttonType="primary"
              sx={{ padding: '3px 9px !important', fontSize: 12, minWidth: 'unset', height: 20 }}
              onClick={onRef}
            >
              {buttonLabel}
            </Button>
            <Typography
              sx={{ textAlign: 'center', flex: 1, overflow: 'hidden', whiteSpace: 'nowrap', marginLeft: '6px' }}
              dangerouslySetInnerHTML={{
                __html: control._formValues.document || emptyFileLabel,
              }}
            ></Typography>
          </Box>
        </Box>
      )}
    />
  );
};
