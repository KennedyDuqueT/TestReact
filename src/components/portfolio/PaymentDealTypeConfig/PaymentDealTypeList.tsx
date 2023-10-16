import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Table } from '@/components';
import { usePaymentDealTypeConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';
import { formatter } from '@/utils';
import { PaymentDealType } from '@/models/portfolio';

export const PaymentDealTypeList = () => {
  const { t } = useTranslation();
  const { items, actions } = usePaymentDealTypeConfig();

  const columns: GridColDef[] = [
    { field: 'code', headerName: t('catalog.fields.code'), width: 200 },
    { field: 'name', headerName: t('portfolio.paymentDealTypeConfig.labels.name'), width: 200 },
    {
      field: 'interestPercent',
      headerName: t('portfolio.paymentDealTypeConfig.labels.interestPercent'),
      width: 200,
      renderCell: ({ row }: GridRenderCellParams<PaymentDealType>) => formatter.number(row.interestPercent),
    },
    {
      field: 'penaltyPercent',
      headerName: t('portfolio.paymentDealTypeConfig.labels.penaltyPercent'),
      width: 200,
      renderCell: ({ row }: GridRenderCellParams<PaymentDealType>) => formatter.number(row.penaltyPercent),
    },
  ];

  return (
    <Table
      variant="secondary"
      columns={columns}
      rows={items}
      onEdit={(paymentDealTypeId) => {
        actions?.selectOne(paymentDealTypeId);

        setTimeout(() => {
          actions?.toggleDialogAction(DialogActions.UPDATE);
        }, 500);
      }}
      onDelete={(paymentDealTypeId) => {
        actions?.selectOne(paymentDealTypeId);
        actions?.toggleDialogAction(DialogActions.DELETE);
      }}
    />
  );
};
