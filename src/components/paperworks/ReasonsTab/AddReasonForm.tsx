import React, { FC, useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from '@/hooks';
import { Select, Button, AlertResultModalComponent, TextField } from '@/components';
import { Box } from '@mui/material';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { usePaperworks } from '@/context';
import { ModalConfiguration } from '@/models/commons';

interface FormValues {
  reasonCode: string;
  description: string;
}

interface AddReasonsFormProps {
  initialValues?: FormValues;
  closeModal: () => void;
  editMode?: boolean;
}

const DEFAULT_FORM_VALUES = {
  reasonCode: '',
  description: '',
};

export const AddReasonForm: FC<AddReasonsFormProps> = ({ initialValues, closeModal, editMode = false }) => {
  const { t } = useTranslation();
  const { catalogReasons, reasonsActions, reasonsDataEdit } = usePaperworks();
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({
    buttonText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  const { control, handleSubmit, formState, reset } = useForm<FormValues>({
    defaultValues: initialValues || DEFAULT_FORM_VALUES,
  });

  const { errors } = formState;

  const onSubmitForm: SubmitHandler<FormValues> = async (data) => {
    if (editMode) {
      const updateReason = await reasonsActions?.updateReason(data);
      if (updateReason?.success) {
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.reasonsTab.entityName') }),
          icon: SuccessIcon,
          message: t('paperworks.alertResultModal.updateSuccessLabel', { entityName: t('paperworks.reasonsTab.entityName') }),
          modalTitle: t('paperworks.alertResultModal.updateSuccessModalTitle', { entityName: t('paperworks.reasonsTab.entityName') }),
        });
      } else {
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.reasonsTab.entityName') }),
          icon: AdvertenceIcon,
          message: t('paperworks.alertResultModal.updateErrorLabel', { entityName: t('paperworks.reasonsTab.entityName') }),
          modalTitle: t('paperworks.alertResultModal.createErrorModalTitle', { entityName: t('paperworks.reasonsTab.entityName') }),
        });
      }
    } else {
      const addReason = await reasonsActions?.createReason(data);
      if (addReason?.success) {
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.reasonsTab.entityName') }),
          icon: SuccessIcon,
          message: t('paperworks.alertResultModal.createSuccessLabel', { entityName: t('paperworks.reasonsTab.entityName') }),
          modalTitle: t('paperworks.alertResultModal.createSuccessModalTitle', { entityName: t('paperworks.reasonsTab.entityName') }),
        });
        reset(DEFAULT_FORM_VALUES);
      } else {
        let message = t('paperworks.alertResultModal.createErrorLabel', { entityName: t('paperworks.reasonsTab.entityName') });
        if (addReason?.message?.includes('already exists')) {
          message = `${t('paperworks.alertResultModal.createErrorLabel', {
            entityName: t('paperworks.reasonsTab.entityName'),
          })} <strong>${t('paperworks.alertResultModal.alreadySelected', { entityName: t('paperworks.reasonsTab.entityName') })}</strong>`;
        }
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.reasonsTab.entityName') }),
          icon: AdvertenceIcon,
          message,
          modalTitle: t('paperworks.alertResultModal.createErrorModalTitle', { entityName: t('paperworks.reasonsTab.entityName') }),
        });
      }
    }
    setOpenAlertModal(true);
  };

  const onCancel = () => {
    reset();
    closeModal();
  };

  const onCloseAlertModal = () => setOpenAlertModal(false);

  useEffect(() => {
    if (editMode) {
      reset({
        reasonCode: String(reasonsDataEdit?.reasonCode),
        description: reasonsDataEdit?.description,
      });
    } else {
      reset({
        reasonCode: '',
        description: '',
      });
    }
  }, [editMode]);

  return (
    <>
      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Select
            name="reasonCode"
            label={t('paperworks.reasonsTab.modalAddReason.labelSelect')}
            rules={{ required: t('paperworks.errors.requiredField') }}
            control={control}
            options={catalogReasons}
            errors={errors}
            keyLabel="name"
            keyValue="id"
          />
          <TextField
            name="description"
            label={t('paperworks.reasonsTab.modalAddReason.descriptionFieldTitle')}
            rules={{ required: t('paperworks.errors.requiredField') }}
            control={control}
            errors={errors}
          />
          <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: 3, gap: 2 }}>
            <Button buttonType="secondary" onClick={onCancel}>
              {t('paperworks.reasonsTab.modalAddReason.btnCancel')}
            </Button>
            <Button type="submit">{t('paperworks.reasonsTab.modalAddReason.btnCreate')}</Button>
          </Box>
        </Box>
      </form>
    </>
  );
};
