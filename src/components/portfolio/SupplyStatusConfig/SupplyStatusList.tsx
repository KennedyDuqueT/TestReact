import { GridColDef } from '@mui/x-data-grid';
import { Table } from '@/components';
import { useSupplyStatusConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';

export const SupplyStatusList = () => {
  const { t } = useTranslation();
  const { items, actions } = useSupplyStatusConfig();

  const columns: GridColDef[] = [
    { field: 'name', headerName: t('catalog.fields.name'), width: 200 },
    { field: 'description', headerName: t('catalog.fields.description'), width: 400 },
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
