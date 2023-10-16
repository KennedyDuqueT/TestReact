import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { SupplyPairForDebtTransfer, SupplyStatusValues } from '@/models/portfolio';
import { useTranslation } from '@/hooks';
import { Table } from '@/components';
import { formatter } from '@/utils';

import { SupplyStatusTag } from '../SupplyStatusTag';
import { FC } from 'react';

interface Props {
  loading: boolean;
  data: SupplyPairForDebtTransfer[];
  onSelectionChange?: (pairIds: number[]) => void;
  tableTitle?: string;
}

export const SupplyPairsList: FC<Props> = ({ loading, data, onSelectionChange, tableTitle }) => {
  const { t } = useTranslation();

  const onSelectPairs = (pairIds: number[]) => {
    onSelectionChange && onSelectionChange(pairIds);
  };

  const columns: GridColDef[] = [
    {
      field: 'debtSupplyNumber',
      headerName: t('portfolio.debtTransferMassive.table.supplyNumber'),
      width: 200,
    },
    {
      field: 'amountLate',
      headerName: t('portfolio.debtTransferMassive.table.amountLate'),
      renderCell: ({ row }: GridRenderCellParams<SupplyPairForDebtTransfer>) => formatter.currency(row.amountLate),
      width: 200,
    },
    { field: 'destinationSupplyNumber', headerName: t('portfolio.debtTransferMassive.table.supplyNumber'), width: 200 },
    {
      field: 'status',
      headerName: t('portfolio.debtTransferMassive.table.supplyStatus'),

      renderCell: ({ row }: GridRenderCellParams<SupplyPairForDebtTransfer>) => <SupplyStatusTag status={row.status as SupplyStatusValues} />,
      width: 200,
    },
  ];

  return (
    <div>
      <Table
        title={tableTitle}
        variant="secondary"
        columns={columns}
        rows={data}
        loading={loading}
        multiselect={!!onSelectionChange}
        onRowSelectionChange={(rowSelection) => {
          onSelectPairs(rowSelection as number[]);
        }}
        columnGroupingModel={[
          {
            groupId: 'Suministro Adeudo',
            children: [{ field: 'debtSupplyNumber' }, { field: 'amountLate' }],
            headerClassName: 'test',
          },
          {
            groupId: 'Suministro Destino',
            children: [{ field: 'destinationSupplyNumber' }, { field: 'status' }],
          },
        ]}
      />
    </div>
  );
};
