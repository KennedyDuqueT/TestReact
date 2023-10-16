import { Box, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { DashboardCustomizeOutlined } from '@mui/icons-material';
import { Table } from '@/components';

export const TableExample = () => {
  const columns: GridColDef[] = [
    {
      field: 'fullName',
      headerName: 'Nombre',
      width: 250,
    },
    { field: 'email', headerName: 'Correo', width: 250 },
    { field: 'roles', headerName: 'Rol', renderCell: (params) => params.value.join(', ') },
    {
      field: 'isActive',
      headerName: 'Estatus',
      renderCell: (params) => {
        return params.row.isActive ? 'Activo' : 'Inactivo';
      },
    },
  ];

  // isOptional array of aditional actions to edit & delete
  const actions = [
    {
      tooltip: 'Custom action',
      icon: <DashboardCustomizeOutlined color="secondary" />,
      onClick: (id: number) => {
        console.log(`Custom action: ${id}`);
      },
    },
  ];

  return (
    <Box mb={8}>
      <Typography variant="h5">Componente Tabla</Typography>
      <Typography component="pre">
        <code>src/components/ui/Table/Table.tsx</code>
      </Typography>

      <Typography component="pre" my={2} fontWeight={700}>
        <code>variant=&quot;primary&quot; & title=&quot;Lista de usuarios&quot;</code>
      </Typography>

      <Table
        title="Lista de usuarios"
        columns={columns}
        rows={users}
        customActions={actions}
        onEdit={(id) => {
          console.log(`onEdit action: ${id}`);
        }}
        onDelete={(id) => {
          console.log(`onDelete action: ${id}`);
        }}
      />

      <Typography component="pre" my={2} fontWeight={700}>
        <code>variant=&quot;secondary&quot; & title=&quot;Lista de usuarios&quot;</code>
      </Typography>

      <Table
        variant="secondary"
        title="Lista de usuarios"
        columns={columns}
        rows={users}
        customActions={actions}
        onEdit={(id) => {
          console.log(`onEdit action: ${id}`);
        }}
        onDelete={(id) => {
          console.log(`onDelete action: ${id}`);
        }}
      />

      <Typography component="pre" my={2} mt={4} fontWeight={700}>
        <code>variant=&quot;primary&quot; & title=undefined</code>
      </Typography>

      <Table
        columns={columns}
        rows={users}
        customActions={actions}
        onEdit={(id) => {
          console.log(`onEdit action: ${id}`);
        }}
        onDelete={(id) => {
          console.log(`onDelete action: ${id}`);
        }}
      />
    </Box>
  );
};

const users = [
  {
    id: 'fef40b7b-becc-4e53-a5fc-eaf3e104f1c8',
    email: 'eguevara@consultec-ti.com',
    fullName: 'Edgar Guevara',
    isActive: true,
    roles: ['superuser', 'admin', 'user'],
  },
  {
    id: 'ee2ab2c8-850a-441b-998a-def63576c1ee',
    email: 'jhurtado@consultec-ti.com',
    fullName: 'Jorge Hurtado',
    isActive: true,
    roles: ['superuser'],
  },
  {
    id: 'aa8e18a5-ccc0-4e47-9804-49693eea0bcd',
    email: 'dhernandez@consultec-ti.com',
    fullName: 'Daniel Hernandez',
    isActive: true,
    roles: ['user'],
  },
  {
    id: 'fef40b7b-becc-4e53-a5fc-eaf3e104f1c9',
    email: 'albor@consultec-ti.com',
    fullName: 'Armando Albor',
    isActive: false,
    roles: ['admin', 'user'],
  },
  {
    id: '96122875-4021-485d-9074-04b0341a491a',
    email: 'crodriguez@consultec-ti.com',
    fullName: 'Cristian Rodriguez',
    isActive: true,
    roles: ['user'],
  },
  {
    id: '7dad0c8c-edc5-479d-a71d-8d0df32e7e0f',
    email: 'rdominguez@consultec-ti.com',
    fullName: 'Randy Dominguez',
    isActive: false,
    roles: ['superuser'],
  },
  {
    id: 'a4d64654-b3ac-4098-9fb6-4b486a478820',
    email: 'wgarcia@consultec-ti.com',
    fullName: 'Walter Garcia',
    isActive: true,
    roles: ['admin', 'user'],
  },
  {
    id: '34b8ba15-7d29-4a87-bedb-8c5616a58d50',
    email: 'ksanchezv@consultec-ti.com',
    fullName: 'Kevin Sanchez',
    isActive: false,
    roles: ['user'],
  },
  {
    id: '641b0363-b42e-4f08-91fe-42820d3d25fc',
    email: 'mosorio@consultec-ti.com',
    fullName: 'Maria Alejandra Osorio',
    isActive: true,
    roles: ['admin', 'user'],
  },
  {
    id: '0cab7ca1-5fd6-4ab1-8f86-0b328cd83b5c',
    email: 'grocha@consultec-ti.com',
    fullName: 'Gustavo Rocha',
    isActive: true,
    roles: ['user'],
  },
  {
    id: '4d7d20cb-d565-4bf7-a8f8-08ef20f243ad',
    email: 'jjacobs@consultec-ti.com',
    fullName: 'Junior Jacobs',
    isActive: true,
    roles: ['user'],
  },
];
