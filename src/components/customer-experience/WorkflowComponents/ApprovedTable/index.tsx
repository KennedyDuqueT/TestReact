import React, { useState } from 'react';
import { Box } from '@mui/material';

import { SuccessIcon } from '@/assets';
import { useTranslation } from '@/hooks';
import { WrapperForm, Button } from '@/components';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { AlertResultModalComponent, AlertOptionsModalComponent } from '@/components/ui';
import { ApprovedTableForm, LoadElecDevicesTable, SubFarmCostTable } from '@/components/customer-experience';

const ApprovedTablePage = () => {
  const { t } = useTranslation();
  const [openAlertModal, setAlertOpenModal] = useState(false);
  const [openModalOptions, setAlertOpenModalOptions] = useState(false);
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

  const onAdd = (data: ModalOptionsConfiguration) => {
    setAlertModalOptionsConfig(data);
    setAlertOpenModalOptions(true);
  };

  return (
    <>
      <Box mb={4}>
        <WrapperForm variant="secondary">
          <LoadElecDevicesTable onSubmit={onSubmit} onAdd={onAdd} onClose={onCloseAlertModal} />
        </WrapperForm>
        <Box mb={3} />
        <WrapperForm variant="secondary">
          <SubFarmCostTable />
        </WrapperForm>
        <Box mb={3} />
        <WrapperForm
          title={t('customerExperience.approvedTable.bailSummary')}
          variant="secondary"
          customButton={() => (
            <Button variant="contained" buttonType="export">
              {t('customerExperience.approvedTable.export')}
            </Button>
          )}
        >
          <ApprovedTableForm onSubmit={onSubmit} />
        </WrapperForm>
      </Box>

      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />

      {alertModalOptionsConfig.onSubmit != undefined && (
        <AlertOptionsModalComponent
          modalConfiguration={alertModalOptionsConfig}
          onCancel={() => {
            onCloseAlertModal();
            alertModalOptionsConfig.onReset?.();
          }}
          onSuccess={() => alertModalOptionsConfig.onSubmit?.(onCloseAlertModal)}
          openModal={openModalOptions}
        />
      )}
    </>
  );
};

export default ApprovedTablePage;
