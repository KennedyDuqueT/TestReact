import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { usePartialOperation } from '@/context';
import { Table } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Invoice } from '@/models/portfolio';
import { formatter } from '@/utils';

export const InvoiceList = () => {
  const { t } = useTranslation();
  const { isLoading, invoiceList, actions } = usePartialOperation();

  const onSelectInvoices = (invoiceIds: number[]) => {
    actions?.selectInvoices(invoiceIds);
  };

  const columns: GridColDef[] = [
    {
      field: 'invoiceNumber',
      headerName: t('portfolio.partialOperation.table.invoiceNumber'),
      width: 200,
    },
    {
      field: 'date',
      headerName: t('portfolio.partialOperation.table.invoiceDate'),
      width: 200,
    },
    {
      field: 'expirationDate',
      headerName: t('portfolio.partialOperation.table.expirationDate'),
      width: 200,
    },
    {
      field: 'amount',
      headerName: t('portfolio.partialOperation.table.invoiceAmount'),
      renderCell: ({ row }: GridRenderCellParams<Invoice>) => formatter.currency(row.amount),
      width: 200,
    },
    {
      field: 'pendingAmount',
      headerName: t('portfolio.partialOperation.table.invoiceAmount'),
      renderCell: ({ row }: GridRenderCellParams<Invoice>) => formatter.currency(row.pendingAmount),
      width: 200,
    },
  ];

  return (
    <Table
      title={t('portfolio.partialOperation.table.title')}
      variant="secondary"
      columns={columns}
      rows={invoiceList}
      loading={isLoading}
      multiselect
      onRowSelectionChange={(rowSelection) => {
        onSelectInvoices(rowSelection as number[]);
      }}
    />
  );
};
