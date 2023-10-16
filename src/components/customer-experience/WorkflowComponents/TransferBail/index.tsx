import React, { useState } from 'react';
import { Box } from '@mui/material';

import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { useTranslation } from '@/hooks';
import { SuccessIcon, AdvertenceIcon } from '@/assets';
import { WrapperForm } from '@/components';
import { AlertOptionsModalComponent, AlertResultModalComponent } from '@/components/ui';
import { HolderToTransferForm } from '@/components/customer-experience';

const TransferBailPage = () => {
  const { t } = useTranslation();
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [openAlertModalOptions, setAlertOpenModalOptions] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({ buttonText: '', icon: SuccessIcon, message: '', modalTitle: '' });
  const [alertModalOptionsConfig, setAlertModalOptionsConfig] = useState<ModalOptionsConfiguration>({
    buttonCancelText: '',
    buttonSucessText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  const onSend = (data: ModalConfiguration) => {
    setAlertModalConfig(data);
    setAlertOpenModal(true);
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  const onCloseAlertModalOptions = () => {
    setAlertOpenModalOptions(false);

    if (alertModalOptionsConfig.onReset) {
      alertModalOptionsConfig.onReset();
    }

    if (alertModalOptionsConfig.icon) {
      setAlertModalConfig({
        modalTitle: t('customerExperience.changeContract.transferRequest'),
        buttonText: t('customerExperience.changeContract.return'),
        icon: AdvertenceIcon,
        message: t('customerExperience.changeContract.agentNoAvailable'),
      });
      setAlertOpenModal(true);
    }
  };

  const onCancelProcess = (data: ModalOptionsConfiguration) => {
    setAlertOpenModalOptions(true);
    setAlertModalOptionsConfig(data);
  };

  const showAlert = (data: ModalOptionsConfiguration) => {
    setAlertModalOptionsConfig(data);
    setAlertOpenModalOptions(true);
  };

  const onSuccess = () => {
    if (alertModalOptionsConfig.onSubmit) {
      alertModalOptionsConfig.onSubmit(() => setAlertOpenModalOptions(false));
    }

    if (alertModalOptionsConfig.icon) {
      setAlertOpenModalOptions(false);
      setAlertModalConfig({
        modalTitle: t('customerExperience.changeContract.transferRequest'),
        buttonText: t('customerExperience.changeContract.accept'),
        icon: SuccessIcon,
        message: t('customerExperience.changeContract.requestTransferSuccess'),
      });
      setAlertOpenModal(true);
    }
  };

  return (
    <>
      <Box mb={4}>
        <WrapperForm title={t('customerExperience.transferBail.holderTransfer')} variant="secondary">
          <HolderToTransferForm onSubmit={onSend} onCancel={onCancelProcess} showAlert={showAlert} />
        </WrapperForm>
      </Box>

      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />

      <AlertOptionsModalComponent
        modalConfiguration={alertModalOptionsConfig}
        onCancel={onCloseAlertModalOptions}
        onSuccess={onSuccess}
        openModal={openAlertModalOptions}
      />
    </>
  );
};

export default TransferBailPage;
