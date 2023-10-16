import { Box, Typography } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { CheckCircleOutline, CreditCardOffOutlined, DeleteOutlineOutlined, GavelOutlined, Loop, RemoveCircleOutline } from '@mui/icons-material';
import { Table } from '@/components';
import { useSupplyLot } from '@/context';
import { useTranslation } from '@/hooks';
import { SupplyLotActions, SupplyLotDetailItem, SupplyStatusValues } from '@/models/portfolio';
import { formatter } from '@/utils';
import { SupplyActionDialog } from './SupplyActionDialog';
import { SupplyStatusTag } from '../SupplyStatusTag';

export const SupplyLotDetail = () => {
  const { t } = useTranslation();
  const { isLoading, supplies, openActionDialog, selectedAction, isPenalizedLot, actions } = useSupplyLot();

  const handleCloseModal = () => {
    actions?.toggleActionDialog(selectedAction!, 0);
  };

  const columns: GridColDef<SupplyLotDetailItem>[] = [
    {
      field: 'supplyNumber',
      headerName: t('portfolio.supplyLotDetail.table.supplyNumber'),
      width: 100,
    },
    { field: 'measureNumber', headerName: t('portfolio.supplyLotDetail.table.measureNumber'), width: 150 },
    { field: 'clientName', headerName: t('portfolio.supplyLotDetail.table.clientName'), width: 200 },
    {
      field: 'route',
      headerName: t('portfolio.supplyLotDetail.table.route'),
      width: 150,
    },
    {
      field: 'amountLate',
      headerName: t('portfolio.supplyLotDetail.table.amountLate'),
      renderCell: ({ row }: GridRenderCellParams<SupplyLotDetailItem>) => (
        <Typography textAlign="right" width={1}>
          {formatter.currency(row.amountLate)}
        </Typography>
      ),
      width: 150,
    },
    {
      field: 'currency',
      headerName: t('portfolio.supplyLotDetail.table.currency'),
      width: 100,
    },
    {
      field: 'supplyStatus',
      headerName: t('portfolio.supplyLotDetail.table.supplyStatus'),
      renderCell: ({ row }: GridRenderCellParams<SupplyLotDetailItem>) => <SupplyStatusTag status={row.supplyStatus as SupplyStatusValues} />,
      width: 150,
    },
    {
      field: 'operationStatus',
      headerName: t('portfolio.supplyLotDetail.table.operationStatus'),
      renderCell: ({ row }: GridRenderCellParams<SupplyLotDetailItem>) =>
        row.operationStatus ? t(`supply.operationStatus.${row.operationStatus}`) : '',
      width: 200,
    },
    {
      field: 'collectionAmount',
      headerName: t('portfolio.supplyLotDetail.table.collectionAmount'),
      renderCell: ({ row }: GridRenderCellParams<SupplyLotDetailItem>) => (
        <Typography textAlign="right" width={1}>
          {formatter.currency(row.collectionAmount || 0)}
        </Typography>
      ),
      width: 150,
    },
  ];

  const commonActions = [
    {
      tooltip: t('portfolio.supplyLotDetail.table.customActions.delete'),
      icon: <DeleteOutlineOutlined color="inherit" sx={{ '&:hover': { color: 'error.main' } }} />,
      onClick: (id: number) => {
        actions?.toggleActionDialog(SupplyLotActions.DELETE, id);
      },
    },
  ];

  const tableActions = [
    {
      tooltip: t('portfolio.supplyLotDetail.table.customActions.verify'),
      icon: <CheckCircleOutline color="inherit" sx={{ '&:hover': { color: 'success.main' } }} />,
      onClick: (id: number) => {
        actions?.toggleActionDialog(SupplyLotActions.VERIFY, id);
      },
    },
    {
      tooltip: t('portfolio.supplyLotDetail.table.customActions.remove'),
      icon: <RemoveCircleOutline color="inherit" sx={{ '&:hover': { color: 'secondary.main' } }} />,
      onClick: (id: number) => {
        actions?.toggleActionDialog(SupplyLotActions.REMOVE, id);
      },
    },
    {
      tooltip: t('portfolio.supplyLotDetail.table.customActions.sendToLegal'),
      icon: <GavelOutlined color="inherit" sx={{ '&:hover': { color: 'warning.main' } }} />,
      onClick: (id: number) => {
        actions?.toggleActionDialog(SupplyLotActions.SEND_TO_LEGAL, id);
      },
    },
    {
      tooltip: t('portfolio.supplyLotDetail.table.customActions.debtTransfer'),
      icon: <CreditCardOffOutlined color="inherit" sx={{ '&:hover': { color: 'error.main' } }} />,
      onClick: (id: number) => {
        actions?.toggleActionDialog(SupplyLotActions.DEBT_TRANSFER, id);
      },
    },
    ...commonActions,
  ];

  const tableActionForPenalizedLots = [
    {
      tooltip: t('portfolio.supplyLotDetail.table.customActions.process'),
      icon: <Loop color="inherit" sx={{ '&:hover': { color: 'success.main' } }} />,
      onClick: (id: number) => {
        actions?.toggleActionDialog(SupplyLotActions.PROCESS, id);
      },
    },
    ...commonActions,
  ];

  return (
    <Box pb={4}>
      <Table
        variant="secondary"
        columns={columns}
        rows={supplies}
        customActions={isPenalizedLot ? tableActionForPenalizedLots : tableActions}
        loading={isLoading}
      />

      <SupplyActionDialog open={openActionDialog} onCancel={handleCloseModal} onAccept={actions?.handleConfirmSupplyAction!} />
    </Box>
  );
};
