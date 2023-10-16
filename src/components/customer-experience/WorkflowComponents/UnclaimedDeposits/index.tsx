import React, { useState } from 'react';
import { Box } from '@mui/material';

import { MainLayout } from '@/layouts';
import { SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { WrapperForm } from '@/components';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { AlertResultModalComponent, AlertOptionsModalComponent } from '@/components/ui';
import { InformationSuppliesForm, SearchFiltersForm, SearchResultsTable } from '@/components/customer-experience';

const UnclaimedDepositsPage = () => {
  const { t } = useTranslation();
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [openAlertConfirmModal, setOpenAlertConfirmModal] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({ buttonText: '', icon: SuccessIcon, message: '', modalTitle: '' });
  const [alertConfirmModalConfig, setAlertConfirmModalConfig] = useState<ModalOptionsConfiguration>({
    buttonSucessText: '',
    buttonCancelText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  const onSubmit = (data: ModalConfiguration) => {
    setAlertModalConfig(data);
    setAlertOpenModal(true);
  };

  const onConfirm = (data: ModalOptionsConfiguration) => {
    setAlertConfirmModalConfig(data);
    setOpenAlertConfirmModal(true);
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
    setOpenAlertConfirmModal(false);
  };

  return (
    <MainLayout title={t('customerExperience.unclaimedDeposits.unclaimedDeposit')}>
      <Box mb={4}>
        <WrapperForm variant="secondary" title={t('customerExperience.unclaimedDeposits.informationSupplies')}>
          <InformationSuppliesForm />
        </WrapperForm>
      </Box>

      <Box mb={4}>
        <WrapperForm variant="secondary" title={t('customerExperience.unclaimedDeposits.searchFilters')}>
          <SearchFiltersForm />
        </WrapperForm>
      </Box>

      <Box mb={4}>
        <WrapperForm variant="secondary">
          <SearchResultsTable onSubmit={onSubmit} onConfirm={onConfirm} />
        </WrapperForm>
      </Box>

      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />

      <AlertOptionsModalComponent
        modalConfiguration={alertConfirmModalConfig}
        onCancel={onCloseAlertModal}
        onSuccess={alertConfirmModalConfig.onSubmit as () => void}
        openModal={openAlertConfirmModal}
      />
    </MainLayout>
  );
};

export default UnclaimedDepositsPage;
