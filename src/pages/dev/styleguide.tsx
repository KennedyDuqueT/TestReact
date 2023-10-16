import React from 'react';
import { Box, Typography } from '@mui/material';
import { WrapperForm, Divider, Button } from '@/components';
import { MainLayout } from '@/layouts';
import { ApiExample, FormExample, TableExample } from '@/components/dev';

const StyleguidePage = () => {
  return (
    <MainLayout>
      <ApiExample />
      <Divider />

      <TableExample />
      <Divider />

      <Typography variant="h5">Formulario validado</Typography>
      <Typography component="pre">
        <code>src/components/dev/FormExample.tsx</code>
      </Typography>

      <WrapperForm>
        <FormExample />
      </WrapperForm>
      <Divider />
      <Typography variant="h5">Buttons</Typography>
      <Typography component="pre">
        <code>src/components/ui/Button/Button.tsx</code>
      </Typography>

      <WrapperForm>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button buttonType="edit">Editar</Button>
          <Button buttonType="delete">Eliminar</Button>
          <Button buttonType="primary">Primario</Button>
          <Button buttonType="secondary">Secundario</Button>
          <Button buttonType="find">Buscar</Button>
          <Button buttonType="create">Crear</Button>
          <Button buttonType="cancel">Cancelar</Button>
          <Button buttonType="save">Guardar</Button>
        </Box>
      </WrapperForm>

      <Divider />
      <Typography variant="h5">WrapperForm</Typography>
      <Typography component="pre">
        <code>src/components/ui/WrapperForm/WrapperForm.tsx</code>
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <WrapperForm>Normal</WrapperForm>
        <WrapperForm title="Titulo">Con titulo</WrapperForm>
      </Box>
    </MainLayout>
  );
};

export default StyleguidePage;
