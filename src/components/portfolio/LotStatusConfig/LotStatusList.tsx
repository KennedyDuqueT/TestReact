import { GridColDef } from '@mui/x-data-grid';
import { Table } from '@/components';
import { useLotStatusConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';

export const LotStatusList = () => {
  const { t } = useTranslation();
  const { items, actions } = useLotStatusConfig();

  const columns: GridColDef[] = [
    { field: 'name', headerName: t('catalog.fields.name'), width: 200 },
    { field: 'description', headerName: t('catalog.fields.description'), width: 400 },
  ];

  return (
    <Table
      variant="secondary"
      columns={columns}
      rows={items}
      onEdit={(lotStatusId) => {
        actions?.selectOne(lotStatusId);

        setTimeout(() => {
          actions?.toggleDialogAction(DialogActions.UPDATE);
        }, 500);
      }}
      onDelete={(lotStatusId) => {
        actions?.selectOne(lotStatusId);
        actions?.toggleDialogAction(DialogActions.DELETE);
      }}
    />
  );
};
