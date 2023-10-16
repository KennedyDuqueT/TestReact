import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useDebtTransferIndividual } from '@/context';
import { WrapperForm } from '@/components';
import { MainLayout } from '@/layouts';
import { SearchByClientOrSupplyModal, SupplyPairsList, TransferSupplySelector } from '@/components/portfolio';
import { useTranslation } from '@/hooks';

const IndividualDebtTransferPage = () => {
  const { t } = useTranslation();
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const { isLoading, supplyPairsList, actions } = useDebtTransferIndividual();

  const toggleSearchModal = () => {
    setOpenSearchModal((prev) => !prev);
  };

  return (
    <MainLayout title={t('portfolio.debtTransferIndividual.pageTitle')}>
      <Box mb={4}>
        <WrapperForm title={t('portfolio.debtTransferIndividual.searchSuppliesLabel')} variant="secondary" onSearch={toggleSearchModal}>
          <TransferSupplySelector />
        </WrapperForm>
      </Box>

      <SupplyPairsList loading={isLoading} data={supplyPairsList} tableTitle={t('portfolio.common.supplyList')} />

      <SearchByClientOrSupplyModal open={openSearchModal} onClose={() => setOpenSearchModal(false)} onSearch={actions!.searchAllSuppliesByClient} />
    </MainLayout>
  );
};

export default IndividualDebtTransferPage;
