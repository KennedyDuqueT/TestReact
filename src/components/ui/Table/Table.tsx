import React, { FC } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { DataGrid, GridColDef, GridDensity, GridRenderCellParams, GridColumnGroupingModel, GridRowId, GridPaginationModel } from '@mui/x-data-grid';
import { Edit, SearchOutlined } from '@mui/icons-material';
import CancelIcon from '@mui/icons-material/Cancel';
import { useTranslation } from '@/hooks';
import { ExportMenu, WrapperForm } from '@/components';
import { TableActions, TableAction } from './TableActions';
import { useTheme } from '@mui/material/styles';
import { DEFAULT_PAGE_SIZE, DEFAULT_PAGINATION_OPTIONS } from '@/models/commons';

interface Props {
  columns: GridColDef[];
  rows: any[];
  rowCount?: number;
  multiselect?: boolean;
  density?: GridDensity;
  customActions?: TableAction[];
  loading?: boolean;
  columnGroupingModel?: GridColumnGroupingModel;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onDeleteMany?: (ids: number[]) => void;
  onSearch?: (query: string) => void;
  onRowSelectionChange?: (selectedIds: GridRowId[]) => void;
  onExportExcel?: () => void;
  onExportPdf?: () => void;
  onExportImage?: () => void;
  onPaginationChange?: (pagination: GridPaginationModel) => void;
  variant?: 'primary' | 'secondary';
  title?: string;
}

export const Table: FC<Props> = ({
  columns,
  rows,
  rowCount,
  onEdit,
  onDelete,
  customActions,
  multiselect,
  density = 'standard',
  loading,
  columnGroupingModel,
  onSearch,
  onRowSelectionChange,
  onExportExcel,
  onExportPdf,
  onExportImage,
  onPaginationChange,
  variant = 'primary',
  title = '',
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const actions: TableAction[] = [
    ...(onEdit
      ? [
          {
            tooltip: t('components.table.edit'),
            icon: <Edit style={{ color: theme.palette.common.tableBtnEdit }} />,
            onClick: onEdit,
          },
        ]
      : []),
    ...(onDelete
      ? [
          {
            tooltip: t('components.table.delete'),
            icon: <CancelIcon />,
            onClick: onDelete,
          },
        ]
      : []),
    ...(customActions ? customActions : []),
  ];

  const colums: GridColDef[] = [
    ...columns,
    ...(actions.length > 0
      ? [
          {
            field: 'id',
            headerName: t('components.table.actions'),
            width: actions.length > 3 ? actions.length * 48 : 144,
            sortable: false,
            renderCell: ({ row }: GridRenderCellParams) => {
              return <TableActions rowId={row.id} actions={actions} />;
            },
          },
        ]
      : []),
  ];

  const searchIsEnabled = !!onSearch;
  const exportIsEnabled = !!onExportExcel || !!onExportImage || !!onExportPdf;
  const titleColumnColor = variant === 'primary' ? '#058548' : '#4D4D4F';
  const titleColumnWeight = variant === 'primary' ? 'bold' : 'normal';

  return (
    <WrapperForm title={title} variant={variant}>
      <Grid item xs={12} sx={{ mt: 2, width: '100%' }}>
        {rows.length === 0 ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="200px">
            {t('components.table.emptyData')}
          </Box>
        ) : (
          <DataGrid
            sx={{
              px: searchIsEnabled ? 3 : undefined,
              '& .MuiDataGrid-columnHeaderTitle': { color: titleColumnColor, fontWeight: titleColumnWeight },
            }}
            rows={rows}
            columns={colums}
            disableColumnFilter
            disableRowSelectionOnClick
            pageSizeOptions={DEFAULT_PAGINATION_OPTIONS}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: DEFAULT_PAGE_SIZE,
                },
              },
            }}
            loading={loading}
            density={density}
            columnHeaderHeight={60}
            checkboxSelection={multiselect}
            onRowSelectionModelChange={
              onRowSelectionChange
                ? (newRowSelectionModel) => {
                    onRowSelectionChange(newRowSelectionModel);
                  }
                : undefined
            }
            experimentalFeatures={columnGroupingModel ? { columnGrouping: true } : undefined}
            columnGroupingModel={columnGroupingModel}
            slots={{
              toolbar: searchIsEnabled
                ? () => (
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ py: 2.5 }}>
                      <Button size="medium" color="secondary">
                        <SearchOutlined sx={{ mr: 1 }} />
                        {t('components.table.search')}
                      </Button>
                      {exportIsEnabled && <ExportMenu excel pdf />}
                    </Box>
                  )
                : undefined,
            }}
            onPaginationModelChange={onPaginationChange}
            componentsProps={{
              pagination: {
                labelRowsPerPage: t('components.table.rowsPerPage'),
                labelDisplayedRows(paginationInfo) {
                  const { from, to, count } = paginationInfo;

                  return `${from}-${to} ${t('components.table.of')} ${count}`;
                },
              },
            }}
            rowCount={rowCount}
          />
        )}
      </Grid>
    </WrapperForm>
  );
};
