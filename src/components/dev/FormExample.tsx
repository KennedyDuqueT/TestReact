import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Grid, Box } from '@mui/material';
import { Select, TextField, Checkbox, Button, NumberField, CurrencyField, TextArea } from '@/components';
import { useSnackbar } from 'notistack';

interface FormValues {
  mimonedaD: string;
  numberquantityD: string;
  catalogoptionsD: string;
  lastnameD: string;
  legalsD: boolean;
  mimoneda: string;
  numberquantity: string;
  catalogoptions: string;
  description: string;
  lastname: string;
  legals: boolean;
}

interface FormExampleProps {
  initialValues?: FormValues;
}

export const FormExample: FC<FormExampleProps> = ({ initialValues }) => {
  const form = useForm<FormValues>({
    defaultValues: initialValues || {
      mimonedaD: '45678',
      numberquantityD: '345',
      catalogoptionsD: '2',
      lastnameD: 'Jonas',
      legalsD: true,
      mimoneda: '',
      numberquantity: '',
      catalogoptions: '',
      description: '',
      lastname: '',
      legals: false,
    },
  });

  const { enqueueSnackbar } = useSnackbar();

  const { control, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log('data', data, JSON.stringify(data));
    const response = true;

    if (response) {
      enqueueSnackbar('Medidor creado exitosamente!', { variant: 'success' });
    } else {
      enqueueSnackbar('Error al crear el medidor.', { variant: 'error' });
    }
  };

  const setValues = () => {
    setValue('mimonedaD', '98989');
    setValue('numberquantityD', '765');
    setValue('catalogoptionsD', '1');
    setValue('lastnameD', 'Julieta Venegas');
    setValue('legalsD', false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CurrencyField
            name="mimonedaD"
            label="Moneda"
            rules={{ required: 'Este campo es obligatorio' }}
            control={control}
            errors={errors}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <NumberField
            name="numberquantityD"
            label="pon un numero"
            rules={{ required: 'Este campo es obligatorio' }}
            control={control}
            errors={errors}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            name="catalogoptionsD"
            label="Demo keys"
            rules={{ required: 'Esto es un demo demo' }}
            control={control}
            options={[
              { foo: 'Opción 1', bar: '1' },
              { foo: 'Opción 2', bar: '2' },
            ]}
            errors={errors}
            keyLabel="foo"
            keyValue="bar"
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField name="lastnameD" label="Campo texto" control={control} rules={{ required: 'Campo requerido' }} errors={errors} disabled />
        </Grid>
        <Grid item xs={6}>
          <Checkbox name="legalsD" label="Aceptas legales Uno" control={control} rules={{ required: 'Campo requerido' }} errors={errors} disabled />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CurrencyField name="mimoneda" label="Moneda" rules={{ required: 'Este campo es obligatorio' }} control={control} errors={errors} />
        </Grid>
        <Grid item xs={6}>
          <NumberField
            name="numberquantity"
            label="pon un numero"
            rules={{ required: 'Este campo es obligatorio' }}
            control={control}
            errors={errors}
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            name="catalogoptions"
            label="Demo keys"
            rules={{ required: 'Esto es un demo demo' }}
            control={control}
            options={[
              { foo: 'Opción 1', bar: '1' },
              { foo: 'Opción 2', bar: '2' },
            ]}
            errors={errors}
            keyLabel="foo"
            keyValue="bar"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField name="lastname" label="Campo texto" control={control} rules={{ required: 'Campo requerido' }} errors={errors} />
        </Grid>
        <Grid item xs={6}>
          <Checkbox name="legals" label="Aceptas legales" control={control} rules={{ required: 'Campo requerido' }} errors={errors} />
        </Grid>
        <Grid item xs={12}>
          <TextArea name="description" label="Descripcion" rules={{ required: 'Esto es un demo demo' }} control={control} errors={errors} />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Button buttonType="create" type="submit">
          Crear
        </Button>
        <Button onClick={setValues}>Set Values</Button>
      </Box>
    </form>
  );
};
