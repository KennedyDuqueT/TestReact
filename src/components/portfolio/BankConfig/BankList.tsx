import { GridColDef } from '@mui/x-data-grid';
import { Table } from '@/components';
import { useBankConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';

export const BankList = () => {
  const { t } = useTranslation();
  const { items, actions } = useBankConfig();

  const columns: GridColDef[] = [
    { field: 'name', headerName: t('catalog.fields.name'), width: 200 },
    { field: 'description', headerName: t('catalog.fields.description'), width: 400 },
  ];

  return (
    <Table
      variant="secondary"
      columns={columns}
      rows={items}
      onEdit={(bankId) => {
        actions?.selectOne(bankId);

        setTimeout(() => {
          actions?.toggleDialogAction(DialogActions.UPDATE);
        }, 500);
      }}
      onDelete={(bankId) => {
        actions?.selectOne(bankId);
        actions?.toggleDialogAction(DialogActions.DELETE);
      }}
    />
  );
};
