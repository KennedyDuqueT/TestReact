import React, { useState } from 'react';
import { Box } from '@mui/material';
import { SuccessIcon, AdvertenceIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import { PartialOperationForm, SearchBySupplyModal } from '@/components/portfolio';
import { AlertResultModalComponent, WrapperForm } from '@/components';
import { usePartialOperation } from '@/context';

export const PartialOperationPage = () => {
  const { t } = useTranslation();

  const { actions } = usePartialOperation();
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [openNotFoundAlert, setOpenNotFoundAlert] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

  const toggleSearchModal = () => {
    setOpenSearchModal((prev) => !prev);
  };

  const handleSearchSupply = async (supplyNumber: string) => {
    const result = await actions?.searchSupply(supplyNumber);

    if (result) {
      setOpenSearchModal(false);
    } else {
      setOpenNotFoundAlert(true);
    }
  };

  return (
    <MainLayout title={t('portfolio.partialOperation.pageTitle')}>
      <Box mb={4}>
        <WrapperForm title={t('portfolio.partialOperation.sectionFormTitle')} variant="secondary" onSearch={toggleSearchModal}>
          <PartialOperationForm />
        </WrapperForm>

        <SearchBySupplyModal
          open={openSearchModal}
          onClose={() => setOpenSearchModal(false)}
          onSearch={({ supply }) => {
            handleSearchSupply(supply);
          }}
        />

        <AlertResultModalComponent
          modalConfiguration={{
            icon: AdvertenceIcon,
            modalTitle: t('portfolio.partialOperation.notFoundAlert.title'),
            message: t('portfolio.partialOperation.notFoundAlert.message'),
            buttonText: t('components.alertResultModal.acceptButtonLabel'),
          }}
          openModal={openNotFoundAlert}
          onClose={() => {
            setOpenNotFoundAlert(false);
          }}
        />

        <AlertResultModalComponent
          modalConfiguration={{
            icon: SuccessIcon,
            modalTitle: t('portfolio.partialOperation.successCreationAlert.title'),
            message: t('portfolio.partialOperation.successCreationAlert.message'),
            buttonText: t('components.alertResultModal.acceptButtonLabel'),
          }}
          openModal={openSuccessAlert}
          onClose={() => {
            setOpenSuccessAlert(false);
          }}
        />
      </Box>
    </MainLayout>
  );
};

export default PartialOperationPage;
