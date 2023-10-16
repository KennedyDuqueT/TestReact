import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

import { SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { CommonsModels } from '@/models';
import { WrapperForm } from '@/components';
import { ModalOptionsConfiguration } from '@/models/commons';
import { AlertOptionsModalComponent } from '@/components/ui';
import { CreditRatingExternalForm, ClientDataForm } from '@/components/customer-experience';

const CreditRatingPage = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [openModalOptions, setAlertOpenModalOptions] = useState(false);
  const [alertModalOptionsConfig, setAlertModalOptionsConfig] = useState<ModalOptionsConfiguration>({
    buttonSucessText: '',
    buttonCancelText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  const onSubmit = () => {
    router.push(CommonsModels.Routes.CUSTOMER_EXPERIENCE_VALIDATE_DOCS);
  };

  const onCancelProcess = (data: ModalOptionsConfiguration) => {
    setAlertOpenModalOptions(true);
    setAlertModalOptionsConfig(data);
  };

  const onCloseAlertModal = () => {
    setAlertOpenModalOptions(false);
  };

  return (
    <>
      <Box mb={4}>
        <WrapperForm title={t('customerExperience.creditRating.dataClient')} variant="secondary">
          <ClientDataForm />
        </WrapperForm>
      </Box>

      <Box mb={4}>
        <WrapperForm title={t('customerExperience.creditRating.creditRatingExternal')} variant="secondary">
          <CreditRatingExternalForm onSubmit={onSubmit} onCancel={onCancelProcess} />
        </WrapperForm>
      </Box>

      <AlertOptionsModalComponent
        modalConfiguration={alertModalOptionsConfig}
        onCancel={onCloseAlertModal}
        onSuccess={onCloseAlertModal}
        openModal={openModalOptions}
      />
    </>
  );
};

export default CreditRatingPage;
