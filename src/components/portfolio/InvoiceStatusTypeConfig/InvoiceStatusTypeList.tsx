import { GridColDef } from '@mui/x-data-grid';
import { Table } from '@/components';
import { useInvoiceStatusTypeConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';

export const InvoiceStatusTypeList = () => {
  const { t } = useTranslation();
  const { items, actions } = useInvoiceStatusTypeConfig();

  const columns: GridColDef[] = [
    { field: 'name', headerName: t('catalog.fields.name'), width: 200 },
    { field: 'code', headerName: t('portfolio.invoiceStatusTypeConfig.labels.code'), width: 100 },
    { field: 'description', headerName: t('catalog.fields.description'), width: 400 },
  ];

  return (
    <Table
      variant="secondary"
      columns={columns}
      rows={items}
      onEdit={(invoiceStatusTypeId) => {
        actions?.selectOne(invoiceStatusTypeId);

        setTimeout(() => {
          actions?.toggleDialogAction(DialogActions.UPDATE);
        }, 500);
      }}
      onDelete={(invoiceStatusTypeId) => {
        actions?.selectOne(invoiceStatusTypeId);
        actions?.toggleDialogAction(DialogActions.DELETE);
      }}
    />
  );
};
