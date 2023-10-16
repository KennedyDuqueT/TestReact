import React, { useState } from 'react';
import { Box } from '@mui/material';

import { WrapperForm } from '@/components';
import { useTranslation } from '@/hooks';
import { AlertResultModalComponent, AlertOptionsModalComponent } from '@/components/ui';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { SuccessIcon } from '@/assets';
import { ReturnDepositForm, UploadDocumentDepositForm } from '@/components/customer-experience';

const ChangeContractPage = () => {
  const { t } = useTranslation();
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [openModalOptions, setAlertOpenModalOptions] = useState(false);
  const [showSecondPart, setShowSecondPart] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({ buttonText: '', icon: SuccessIcon, message: '', modalTitle: '' });
  const [alertModalOptionsConfig, setAlertModalOptionsConfig] = useState<ModalOptionsConfiguration>({
    buttonSucessText: '',
    buttonCancelText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  const onFail = (data: ModalConfiguration) => {
    setAlertModalConfig(data);
    setAlertOpenModal(true);
  };

  const uploadSucces = (data: ModalConfiguration) => {
    setAlertModalConfig(data);
    setAlertOpenModal(true);
  };

  const onSubmit = () => {
    setShowSecondPart(true);
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
    setAlertOpenModalOptions(false);
  };

  const onFinish = (data: ModalOptionsConfiguration) => {
    setAlertModalOptionsConfig(data);
    setAlertOpenModalOptions(true);
  };

  return (
    <>
      <Box mb={4}>
        <WrapperForm title={t('customerExperience.changeContract.returnDeposit')} variant="secondary">
          <ReturnDepositForm onSubmit={onSubmit} onFail={onFail} done={showSecondPart} />
        </WrapperForm>
      </Box>

      {showSecondPart ? (
        <Box mb={4}>
          <WrapperForm title={t('customerExperience.changeContract.rowButtons')} variant="secondary">
            <UploadDocumentDepositForm onSubmit={onFinish} onFail={onFail} uploadSucces={uploadSucces} onDone={onCloseAlertModal} />
          </WrapperForm>
        </Box>
      ) : null}

      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />

      <AlertOptionsModalComponent
        modalConfiguration={alertModalOptionsConfig}
        onCancel={onCloseAlertModal}
        onSuccess={onCloseAlertModal}
        openModal={openModalOptions}
      />
    </>
  );
};

export default ChangeContractPage;
