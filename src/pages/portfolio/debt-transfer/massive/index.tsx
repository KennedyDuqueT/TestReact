import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Grid } from '@mui/material';
import { SupplyLotSelector, SupplyPairsList } from '@/components/portfolio';
import { useDebtTransferMassive } from '@/context';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import { ActionButtons, CommonButton, WrapperForm } from '@/components';

const MassiveDebtTransferPage = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { isLoading, supplyPairsList, selectedPairs, actions } = useDebtTransferMassive();

  useEffect(() => {
    actions?.getAllSupplyLots();
  }, []);

  const buttons: CommonButton[] = [
    {
      label: t('components.button.cancel'),
      type: 'cancel',
      onClick: router.back,
    },
    {
      label: t('components.button.process'),
      type: 'primary',
      onClick: () => actions?.handleProcessTransfer,
      disabled: selectedPairs.length === 0,
    },
  ];

  return (
    <MainLayout title={t('portfolio.debtTransferMassive.pageTitle')}>
      <Box mb={4}>
        <WrapperForm title={t('portfolio.debtTransferMassive.selectLotLabel')} variant="secondary">
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} md={6}>
              <SupplyLotSelector />
            </Grid>
          </Grid>
        </WrapperForm>
      </Box>

      <WrapperForm title={t('portfolio.common.supplyList')} variant="secondary">
        <SupplyPairsList loading={isLoading} data={supplyPairsList} onSelectionChange={actions!.selectPairsToTransfer} />
        <ActionButtons buttons={buttons} />
      </WrapperForm>
    </MainLayout>
  );
};

export default MassiveDebtTransferPage;
