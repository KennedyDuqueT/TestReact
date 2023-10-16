import { GridColDef } from '@mui/x-data-grid';
import { Table } from '@/components';
import { useCashRegisterStatusConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';

export const CashRegisterStatusList = () => {
  const { t } = useTranslation();
  const { items, actions } = useCashRegisterStatusConfig();

  const columns: GridColDef[] = [
    { field: 'name', headerName: t('catalog.fields.name'), width: 200 },
    { field: 'description', headerName: t('catalog.fields.description'), width: 400 },
  ];

  return (
    <Table
      variant="secondary"
      columns={columns}
      rows={items}
      onEdit={(cashRegisterStatusId) => {
        actions?.selectOne(cashRegisterStatusId);

        setTimeout(() => {
          actions?.toggleDialogAction(DialogActions.UPDATE);
        }, 500);
      }}
      onDelete={(cashRegisterStatusId) => {
        actions?.selectOne(cashRegisterStatusId);
        actions?.toggleDialogAction(DialogActions.DELETE);
      }}
    />
  );
};
