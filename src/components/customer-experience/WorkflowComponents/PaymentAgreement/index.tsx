import React, { useState } from 'react';
import { Box } from '@mui/material';

import { WrapperForm } from '@/components';
import { useTranslation } from '@/hooks';
import { AlertResultModalComponent, AlertOptionsModalComponent } from '@/components/ui';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { SuccessIcon } from '@/assets';
import { FunctionalSegmentProcessForm, IncludeReportForm, RequireAuthorizationForm, ChangeProps } from '@/components/customer-experience';

const PaymentAgreementPage = () => {
  const { t } = useTranslation();
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [openModalOptions, setAlertOpenModalOptions] = useState(false);
  const [showIncludeReport, setshowIncludeReport] = useState(false);
  const [showRequireAuthorization, setshowRequireAuthorization] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({ buttonText: '', icon: SuccessIcon, message: '', modalTitle: '' });
  const [alertModalOptionsConfig, setAlertModalOptionsConfig] = useState<ModalOptionsConfiguration>({
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

  const onCloseAlertModal = () => {
    setAlertOpenModal(false);
    setAlertOpenModalOptions(false);
  };

  const onFinish = (data: ModalOptionsConfiguration) => {
    setAlertModalOptionsConfig(data);
    setAlertOpenModalOptions(true);
  };

  const onChange = (data: ChangeProps) => {
    setshowIncludeReport(!!data.showIncludeReport);
    setshowRequireAuthorization(!!data.showRequireAuthorization);
  };

  return (
    <>
      <Box mb={4}>
        <WrapperForm title={t('customerExperience.paymentAgreement.funcitonalFormSegment')} variant="secondary">
          <FunctionalSegmentProcessForm onSubmit={onSubmit} onCancel={onFinish} onChange={onChange} />
        </WrapperForm>
      </Box>

      {showIncludeReport && (
        <Box mb={4}>
          <WrapperForm title={t('customerExperience.paymentAgreement.inclueReport')} variant="secondary">
            <IncludeReportForm />
          </WrapperForm>
        </Box>
      )}

      {showRequireAuthorization && (
        <Box mb={4}>
          <WrapperForm title={t('customerExperience.paymentAgreement.authorizationRequired')} variant="secondary">
            <RequireAuthorizationForm onSend={onSubmit} />
          </WrapperForm>
        </Box>
      )}

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

export default PaymentAgreementPage;
