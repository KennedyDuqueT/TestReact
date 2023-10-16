import React from 'react';
import { Box, Divider, TextField, Grid } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Bail } from '@/models/portfolio';
import { Table } from '@/components';
import { useTranslation } from '@/hooks';
import { Button } from '@/components/ui';
import { WrapperForm } from '@/components';
import { CheckBox } from '@mui/icons-material';
import { useTheme } from '@mui/material';

export const BailAgreementComponent: React.FC = () => {
  const { t } = useTranslation();
  const { palette } = useTheme();
  const isLoading = false;

  const columns: GridColDef[] = [
    {
      field: 'status',
      headerName: t('bailAgreement.invoiceStatus'),
      renderCell: ({ row }: GridRenderCellParams<Bail>) => t('bailAgreement.lotNumber', { lotNumber: row.invoiceIssueDate }),
      width: 100,
    },
    {
      field: 'number',
      headerName: t('bailAgreement.invoiceNumber'),
      renderCell: ({ row }: GridRenderCellParams<Bail>) => t('bailAgreement.lotNumber', { lotNumber: row.invoiceIssueDate }),
      width: 100,
    },
    {
      field: 'invoiceIssueDate',
      headerName: t('bailAgreement.invoiceIssueDate'),
      width: 100,
      renderCell: ({ row }: GridRenderCellParams<Bail>) => t('bailAgreement.lotNumber', { lotNumber: row.invoiceIssueDate }),
    },
    {
      field: 'invoiceDueDate',
      headerName: t('bailAgreement.invoiceDueDate'),
      width: 100,
      renderCell: ({ row }: GridRenderCellParams<Bail>) => t('bailAgreement.lotNumber', { lotNumber: row.invoiceDueDate }),
    },
    {
      field: 'amount',
      headerName: t('bailAgreement.amount'),
      width: 100,
      renderCell: ({ row }: GridRenderCellParams<Bail>) => t('bailAgreement.lotNumber', { lotNumber: row.amount }),
    },

    {
      field: 'payments',
      headerName: t('bailAgreement.payments'),
      width: 100,
      renderCell: ({ row }: GridRenderCellParams<Bail>) => t('bailAgreement.lotNumber', { lotNumber: row.payments }),
    },
    {
      field: 'pendingBalance',
      headerName: t('bailAgreement.pendingBalance'),
      width: 100,
      renderCell: ({ row }: GridRenderCellParams<Bail>) => t('bailAgreement.lotNumber', { lotNumber: row.pendingBalance }),
    },
    {
      field: 'totalBalance',
      headerName: t('bailAgreement.totalBalance'),
      width: 100,
      renderCell: ({ row }: GridRenderCellParams<Bail>) => t('bailAgreement.lotNumber', { lotNumber: row.totalBalance }),
    },
    {
      field: 'overdue',
      headerName: t('bailAgreement.overdue'),
      width: 100,
      renderCell: ({ row }: GridRenderCellParams<Bail>) => t('bailAgreement.lotNumber', { lotNumber: row.overdue }),
    },
  ];

  const tableActions = [
    {
      tooltip: t('bailAgreement.selectBail'),
      icon: <CheckBox style={{ color: palette.common.tableBtnEdit }} />,
      onClick: (id: any) => {
        console.log(id);
      },
    },
  ];

  return (
    <>
      <Box mb={4} width={'95%'}>
        <WrapperForm title={t('bailAgreement.searchUser')} variant="secondary">
          <Grid spacing={3} mt={3}>
            <Grid item>
              <TextField label={t('bailAgreement.supplyNumber')} type="number" style={{ width: '50%', marginBottom: '35px' }} />
            </Grid>
          </Grid>
          <Divider />
          <Grid spacing={3} mt={1}>
            <Grid item style={{ textAlign: 'right' }}>
              <Button
                variant="contained"
                buttonType="primary"
                style={{ width: '110px', fontWeight: '600', marginTop: '5px', marginLeft: '10px' }}
                color="primary"
              >
                {t('bailAgreement.search')}
              </Button>
            </Grid>
          </Grid>
        </WrapperForm>
      </Box>
      <Box mb={4} width={'95%'}>
        <WrapperForm title={t('bailAgreement.supplyInformation')} variant="secondary">
          <Grid item container spacing={2} mt={1}>
            <Grid item xs={6}>
              <TextField
                label={t('bailAgreement.supplyNumber')}
                type="number"
                style={{ width: '100%', marginBottom: '35px', paddingRight: '20px' }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField label={t('bailAgreement.currentBailAmountCharged')} style={{ width: '100%', marginBottom: '35px' }} />
            </Grid>
          </Grid>

          <Grid item container spacing={2} mt={1}>
            <Grid item xs={6}>
              <TextField label={t('bailAgreement.nameSocialReason')} style={{ width: '100%', marginBottom: '35px', paddingRight: '20px' }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label={t('bailAgreement.clientID')} style={{ width: '100%', marginBottom: '35px' }} />
            </Grid>
          </Grid>
        </WrapperForm>
      </Box>
      <Box mb={4} width={'95%'}>
        <WrapperForm title={t('bailAgreement.bailAgreementForm')} variant="secondary">
          <Grid item container spacing={2} mt={1}>
            <Grid item xs={6}>
              <TextField
                label={t('bailAgreement.quantityFees')}
                type="number"
                style={{ width: '100%', marginBottom: '35px', paddingRight: '20px' }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField label={t('bailAgreement.startingAmount')} style={{ width: '100%', marginBottom: '35px' }} />
            </Grid>
          </Grid>

          <Grid item container spacing={2} mt={1}>
            <Grid item xs={6}>
              <TextField label={t('bailAgreement.amountFees')} type="number" style={{ width: '100%', marginBottom: '35px', paddingRight: '20px' }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label={t('bailAgreement.dateInvoice2ndInstallment')} type="date" style={{ width: '100%', marginBottom: '35px' }} />
            </Grid>
          </Grid>

          <Table
            variant="secondary"
            title={t('bailAgreement.accordingSupplyTable')}
            columns={columns}
            rows={[]}
            customActions={tableActions}
            loading={isLoading}
          />

          <Grid item container spacing={2} mt={1}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                buttonType="secondary"
                style={{ width: '110px', fontWeight: '600', marginTop: '5px', marginLeft: '10px' }}
                color="primary"
              >
                {t('bailAgreement.exit')}
              </Button>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
              <Button
                variant="contained"
                buttonType="primary"
                disabled
                style={{ width: '110px', fontWeight: '600', marginTop: '5px', marginLeft: '10px' }}
                color="primary"
              >
                {t('bailAgreement.process')}
              </Button>
            </Grid>
          </Grid>
        </WrapperForm>
      </Box>
    </>
  );
};
