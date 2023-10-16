import React, { useState } from 'react';
import { Box } from '@mui/material';

import { SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { WrapperForm } from '@/components';
import { ModalOptionsConfiguration } from '@/models/commons';
import { AlertOptionsModalComponent } from '@/components/ui';
import { UploadPropertyDocsForm, ClientDataForm, LegalDocsForm } from '@/components/customer-experience';

const ValidateDocsPage = () => {
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
    console.log('TODO next step');
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
        <WrapperForm title={t('customerExperience.validateDocs.uploadDocs')} variant="secondary">
          <UploadPropertyDocsForm onSubmit={onSubmit} onCancel={onCancelProcess} />
        </WrapperForm>
        <WrapperForm title={t('customerExperience.validateDocs.legal')} variant="secondary">
          <LegalDocsForm onSubmit={onSubmit} onCancel={onCancelProcess} />
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

export default ValidateDocsPage;
