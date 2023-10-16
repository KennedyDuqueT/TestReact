import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Table } from '@/components';
import { useHomologatedTableConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { HomologatedTableDevice } from '@/models/portfolio';
import { formatter } from '@/utils';

export const HomologatedTableDeviceList = () => {
  const { t } = useTranslation();
  const { items, actions } = useHomologatedTableConfig();

  const columns: GridColDef[] = [
    {
      field: '',
      headerName: t('catalog.fields.id'),
      renderCell: ({ row }: GridRenderCellParams<HomologatedTableDevice>) => `${row.id}`,
      width: 80,
    },
    { field: 'name', headerName: t('catalog.fields.name'), width: 200 },
    {
      field: 'nominalPower',
      headerName: t('portfolio.homologatedTableDevicesConfig.labels.nominalPower'),
      renderCell: ({ row }: GridRenderCellParams<HomologatedTableDevice>) => formatter.number(row.nominalPower),
      width: 200,
    },
    { field: 'useHours', headerName: t('portfolio.homologatedTableDevicesConfig.labels.useHours'), width: 200 },
    { field: 'useDays', headerName: t('portfolio.homologatedTableDevicesConfig.labels.useDays'), width: 200 },
    { field: 'totalReadings', headerName: t('portfolio.homologatedTableDevicesConfig.labels.totalReadings'), width: 100 },
    { field: 'devices', headerName: t('portfolio.homologatedTableDevicesConfig.labels.devices'), width: 100 },
    {
      field: 'energyKWh',
      headerName: t('portfolio.homologatedTableDevicesConfig.labels.energyKWh'),
      renderCell: ({ row }: GridRenderCellParams<HomologatedTableDevice>) => formatter.number(row.energyKWh),
      width: 200,
    },
    {
      field: 'estimatedEnergyKWh',
      headerName: t('portfolio.homologatedTableDevicesConfig.labels.estimatedEnergyKWh'),
      renderCell: ({ row }: GridRenderCellParams<HomologatedTableDevice>) => formatter.number(row.estimatedEnergyKWh),
      width: 200,
    },
  ];

  return (
    <Table
      variant="secondary"
      columns={columns}
      rows={items}
      onEdit={(supplyStatusId) => {
        actions?.selectOne(supplyStatusId);

        setTimeout(() => {
          actions?.toggleDialogAction(DialogActions.UPDATE);
        }, 500);
      }}
      onDelete={(supplyStatusId) => {
        actions?.selectOne(supplyStatusId);
        actions?.toggleDialogAction(DialogActions.DELETE);
      }}
    />
  );
};
