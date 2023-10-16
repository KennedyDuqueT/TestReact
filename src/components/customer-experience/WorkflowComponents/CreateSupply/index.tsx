import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

import { SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { CommonsModels } from '@/models';
import { WrapperForm } from '@/components';
import { ModalConfiguration } from '@/models/commons';
import { AlertResultModalComponent } from '@/components/ui';
import { NewSupplyForm } from '@/components/customer-experience';

const CreateSupplyPage = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({ buttonText: '', icon: SuccessIcon, message: '', modalTitle: '' });

  const onSubmit = (data: ModalConfiguration) => {
    setAlertModalConfig(data);
    setAlertOpenModal(true);
    router.push(CommonsModels.Routes.CUSTOMER_EXPERIENCE_CREDIT_RATING);
  };

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
  };

  return (
    <>
      <Box mb={4}>
        <WrapperForm title={t('customerExperience.createNewSupply.titleCreateNewSupply')} variant="secondary">
          <NewSupplyForm onSubmit={onSubmit} />
        </WrapperForm>
      </Box>

      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />
    </>
  );
};

export default CreateSupplyPage;
