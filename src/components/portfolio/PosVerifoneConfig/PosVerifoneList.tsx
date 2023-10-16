import { GridColDef } from '@mui/x-data-grid';
import { Table } from '@/components';
import { usePosVerifoneConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';

export const PosVerifoneList = () => {
  const { t } = useTranslation();
  const { mappedItems, actions } = usePosVerifoneConfig();

  const columns: GridColDef[] = [
    { field: 'name', headerName: t('catalog.fields.name'), width: 200 },
    { field: 'provider', headerName: t('portfolio.posVerifoneConfig.labels.provider'), width: 200 },
    { field: 'commission', headerName: t('portfolio.posVerifoneConfig.labels.commission'), width: 200 },
  ];

  return (
    <Table
      variant="secondary"
      columns={columns}
      rows={mappedItems}
      onEdit={(posVerifoneId) => {
        actions?.selectOne(posVerifoneId);

        setTimeout(() => {
          actions?.toggleDialogAction(DialogActions.UPDATE);
        }, 500);
      }}
      onDelete={(posVerifoneId) => {
        actions?.selectOne(posVerifoneId);
        actions?.toggleDialogAction(DialogActions.DELETE);
      }}
    />
  );
};
