import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { ProcessedSupply, SupplyStatusValues } from '@/models/portfolio';
import { Table } from '@/components';
import { formatter } from '@/utils';
import { useLegalReturn } from '@/context';
import { useTranslation } from '@/hooks';
import { SupplyStatusTag } from '../SupplyStatusTag';

export const ProcessedSupplyList = () => {
  const { t } = useTranslation();
  const { processedSupplies } = useLegalReturn();

  const columns: GridColDef[] = [
    {
      field: 'supplyStatus',
      headerName: t('portfolio.supplyLotDetail.table.supplyStatus'),
      renderCell: ({ row }: GridRenderCellParams<ProcessedSupply>) => <SupplyStatusTag status={row.supplyStatus as SupplyStatusValues} />,

      width: 200,
    },
    {
      field: 'number',
      headerName: t('portfolio.legalReturn.labels.supplyNumber'),
      width: 200,
    },
    { field: 'meterNumber', headerName: t('portfolio.legalReturn.labels.meter'), width: 200 },
    { field: 'clientName', headerName: t('portfolio.legalReturn.labels.clientName'), width: 240 },
    {
      field: 'amountLate',
      headerName: t('portfolio.legalReturn.labels.amountLate'),
      renderCell: ({ row }: GridRenderCellParams<ProcessedSupply>) => formatter.currency(row.amountLate),
      width: 200,
    },
    { field: 'route', headerName: t('portfolio.legalReturn.labels.route'), width: 240 },
  ];

  return <Table variant="secondary" title={t('portfolio.legalReturn.tableTitle')} columns={columns} rows={processedSupplies} />;
};
