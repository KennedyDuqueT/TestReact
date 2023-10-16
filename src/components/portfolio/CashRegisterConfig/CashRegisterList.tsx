import { GridColDef } from '@mui/x-data-grid';
import { Table } from '@/components';
import { useCashRegisterConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';

export const CashRegisterList = () => {
  const { t } = useTranslation();
  const { mappedItems, actions } = useCashRegisterConfig();

  const columns: GridColDef[] = [
    { field: 'name', headerName: t('catalog.fields.name'), width: 200 },
    { field: 'status', headerName: t('portfolio.cashRegisterConfig.labels.status'), width: 150 },
    { field: 'type', headerName: t('portfolio.cashRegisterConfig.labels.type'), width: 150 },
    { field: 'account', headerName: t('portfolio.cashRegisterConfig.labels.account'), width: 200 },
    { field: 'bank', headerName: t('portfolio.cashRegisterConfig.labels.bank'), width: 150 },
    { field: 'currency', headerName: t('portfolio.cashRegisterConfig.labels.currency'), width: 100 },
    { field: 'closingType', headerName: t('portfolio.cashRegisterConfig.labels.closingType'), width: 200 },
  ];

  return (
    <Table
      variant="secondary"
      columns={columns}
      rows={mappedItems}
      onEdit={(cashRegisterId) => {
        actions?.selectOne(cashRegisterId);

        setTimeout(() => {
          actions?.toggleDialogAction(DialogActions.UPDATE);
        }, 500);
      }}
      onDelete={(cashRegisterId) => {
        actions?.selectOne(cashRegisterId);
        actions?.toggleDialogAction(DialogActions.DELETE);
      }}
    />
  );
};
