import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { RemoveRedEye } from '@mui/icons-material';
import { SupplyLot } from '@/models/portfolio';
import { Table } from '@/components';
import { formatter } from '@/utils';
import { useSupplyLot } from '@/context';
import { useTranslation } from '@/hooks';
import { useTheme } from '@mui/material';
import { SupplyLotListDialog } from './SupplyLotListDialog';

export const SupplyLotList = () => {
  const { t } = useTranslation();
  const { isLoading, supplyLots, selectedSupplyLotId, actions } = useSupplyLot();
  const { palette } = useTheme();

  const columns: GridColDef[] = [
    {
      field: 'type',
      headerName: t('portfolio.supplyLots.table.type'),
      renderCell: ({ row }: GridRenderCellParams<SupplyLot>) => t(`portfolio.common.lotType.${row.type}`),
      width: 100,
    },
    {
      field: 'status',
      headerName: t('portfolio.supplyLots.table.lotStatus'),
      renderCell: ({ row }: GridRenderCellParams<SupplyLot>) => t(`portfolio.common.lotStatus.${row.status}`),
      width: 150,
    },
    {
      field: 'number',
      headerName: t('portfolio.supplyLots.table.lotNumber'),
      width: 150,
      renderCell: ({ row }: GridRenderCellParams<SupplyLot>) => t('portfolio.supplyLots.table.cell.lotNumber', { lotNumber: row.number }),
    },
    { field: 'fullName', headerName: t('portfolio.supplyLots.table.fullName'), width: 200 },
    {
      field: 'supplyQuantity',
      headerName: t('portfolio.supplyLots.table.supplyQuantity'),
      renderCell: ({ row }: GridRenderCellParams<SupplyLot>) => formatter.number(row.supplyQuantity),
      width: 150,
    },
    {
      field: 'amountLate',
      headerName: t('portfolio.supplyLots.table.amountLate'),
      renderCell: ({ row }: GridRenderCellParams<SupplyLot>) => formatter.currency(row.amountLate),
      width: 200,
    },
    {
      field: 'collectionAmount',
      headerName: t('portfolio.supplyLots.table.collectionAmount'),
      renderCell: ({ row }: GridRenderCellParams<SupplyLot>) => formatter.currency(row.collectionAmount),
      width: 200,
    },
    { field: 'lotCreationDate', headerName: t('portfolio.supplyLots.table.lotCreationDate'), width: 200 },
    { field: 'lotUpdateDate', headerName: t('portfolio.supplyLots.table.lotUpdateDate'), width: 200 },
  ];

  const tableActions = [
    {
      tooltip: t('portfolio.supplyLots.table.customActions.seeDetails'),
      icon: <RemoveRedEye style={{ color: palette.common.tableBtnEdit }} />,
      onClick: (id: number) => {
        actions?.selectSupplyLot(id);
        actions?.getSuppliesInLot();
      },
    },
  ];

  return (
    <div>
      <Table
        variant="secondary"
        title={t('portfolio.supplyLots.table.title')}
        columns={columns}
        rows={supplyLots}
        customActions={tableActions}
        loading={isLoading}
      />

      <SupplyLotListDialog
        open={!!selectedSupplyLotId}
        onCancel={() => {
          actions?.selectSupplyLot(0);
        }}
      />
    </div>
  );
};
