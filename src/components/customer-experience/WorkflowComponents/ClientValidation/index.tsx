import React, { useState } from 'react';
import { Box } from '@mui/material';

import { SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { WrapperForm } from '@/components';
import { ShareFormValues } from '@/models/customer-experience';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { AlertResultModalComponent, AlertOptionsModalComponent } from '@/components/ui';
import { FunctionalClientValidationForm, SupplyHasAttachedDocForm } from '@/components/customer-experience';

const ClientValidationPage = () => {
  const { t } = useTranslation();
  const [customerType, setCustomerType] = useState<string>('');
  const [showSecondForm, setShowSecondForm] = useState<boolean>(false);
  const [alertOpenModal, setAlertOpenModal] = useState<boolean>(false);
  const [openAlertModalOptions, setOpenAlertOpenModalOptions] = useState<boolean>(false);
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

  const onChange = (data: ShareFormValues) => {
    setShowSecondForm(data.showSecondForm);
    setCustomerType(data.customerType);
  };

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
        <WrapperForm title={t('customerExperience.clientValidation.functionalForm')} variant="secondary">
          <FunctionalClientValidationForm onSubmit={onSubmit} onChange={onChange} hideButtons={showSecondForm} onShowMessage={onShowMessage} />
        </WrapperForm>
      </Box>

      {showSecondForm && (
        <Box mb={4}>
          <WrapperForm title={t('customerExperience.clientValidation.supplyHasAttachedDoc')} variant="secondary">
            <SupplyHasAttachedDocForm onSubmit={onSubmit} onShowMessage={onShowMessage} customerType={customerType} />
          </WrapperForm>
        </Box>
      )}

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

export default ClientValidationPage;
