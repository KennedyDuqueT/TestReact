import { GridColDef } from '@mui/x-data-grid';
import { Table } from '@/components';
import { usePosProviderConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';

export const PosProviderList = () => {
  const { t } = useTranslation();
  const { items, actions } = usePosProviderConfig();

  const columns: GridColDef[] = [
    { field: 'name', headerName: t('catalog.fields.name'), width: 200 },
    { field: 'commission', headerName: t('portfolio.posProviderConfig.labels.commission'), width: 200 },
    { field: 'description', headerName: t('catalog.fields.description'), width: 400 },
  ];

  return (
    <Table
      variant="secondary"
      columns={columns}
      rows={items}
      onEdit={(posProviderId) => {
        actions?.selectOne(posProviderId);

        setTimeout(() => {
          actions?.toggleDialogAction(DialogActions.UPDATE);
        }, 500);
      }}
      onDelete={(posProviderId) => {
        actions?.selectOne(posProviderId);
        actions?.toggleDialogAction(DialogActions.DELETE);
      }}
    />
  );
};
