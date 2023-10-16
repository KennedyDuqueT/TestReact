import React, { useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

import { SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { WrapperForm } from '@/components';
import { ModalConfiguration } from '@/models/commons';
import { AlertResultModalComponent, Modal } from '@/components/ui';
import { CancelSupplyForm } from '@/components/customer-experience';
import { greenText } from './CancelSupply.styles';

const CancelSupplyPage = () => {
  const { t } = useTranslation();
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [openLoadModal, setLoadOpenModal] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({ buttonText: '', icon: SuccessIcon, message: '', modalTitle: '' });

  const onSubmit = (data: ModalConfiguration) => {
    setAlertModalConfig(data);
    setAlertOpenModal(true);
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  const toggleLoad = (value: boolean) => {
    setLoadOpenModal(value);
  };

  return (
    <>
      <Box mb={4}>
        <WrapperForm variant="secondary" title={t('customerExperience.cancelSupply.contractCancelForm')}>
          <CancelSupplyForm onSubmit={onSubmit} toggleLoad={toggleLoad} />
        </WrapperForm>
      </Box>

      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />

      <Modal
        key={`${openLoadModal}`}
        title={t('customerExperience.cancelSupply.checkingCurrent')}
        maxWidth="sm"
        open={openLoadModal}
        handleClose={() => setLoadOpenModal(false)}
      >
        <Box display="flex" py={12} justifyContent="center">
          <CircularProgress size={30} />
          <Typography
            dangerouslySetInnerHTML={{
              __html: t('customerExperience.cancelSupply.verifyingClient'),
            }}
            sx={greenText}
          ></Typography>
        </Box>
      </Modal>
    </>
  );
};

export default CancelSupplyPage;
