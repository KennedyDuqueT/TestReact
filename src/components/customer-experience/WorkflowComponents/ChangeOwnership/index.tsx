import React, { useState } from 'react';
import { Box } from '@mui/material';

import { SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { WrapperForm } from '@/components';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { AlertResultModalComponent, AlertOptionsModalComponent } from '@/components/ui';
import { ProcessFunctionalSegmentForm, ModificationDataNewOwnerForm } from '@/components/customer-experience';

const ChangeOwnershipPage = () => {
  const { t } = useTranslation();
  const [alertOpenModal, setAlertOpenModal] = useState(false);
  const [openAlertModalOptions, setOpenAlertOpenModalOptions] = useState(false);
  const [alertModalOptionsConfig, setAlertModalOptionsConfig] = useState<ModalConfiguration>({
    buttonText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });
  const [inputModalOptionsConfig, setInputModalOptionsConfig] = useState<ModalOptionsConfiguration>({
    buttonCancelText: '',
    buttonSucessText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  const onSubmit = (data: ModalOptionsConfiguration) => {
    setOpenAlertOpenModalOptions(true);
    setInputModalOptionsConfig(data);
  };

  const onShowMessage = (data: ModalConfiguration) => {
    setAlertOpenModal(true);
    setAlertModalOptionsConfig(data);
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
    setOpenAlertOpenModalOptions(false);
  };

  return (
    <>
      <Box mb={4}>
        <WrapperForm title={t('customerExperience.changeOwnership.formProcess')} variant="secondary">
          <ProcessFunctionalSegmentForm onSubmit={onSubmit} />
        </WrapperForm>
        <WrapperForm title={t('customerExperience.changeOwnership.modificationOwner')} variant="secondary">
          <ModificationDataNewOwnerForm onSubmit={onSubmit} onShowMessage={onShowMessage} />
        </WrapperForm>
      </Box>

      <AlertResultModalComponent modalConfiguration={alertModalOptionsConfig} onClose={onCloseAlertModal} openModal={alertOpenModal} />

      <AlertOptionsModalComponent
        modalConfiguration={inputModalOptionsConfig}
        onCancel={onCloseAlertModal}
        onSuccess={onCloseAlertModal}
        openModal={openAlertModalOptions}
      />
    </>
  );
};

export default ChangeOwnershipPage;
