import React, { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from '@/hooks';
import { TextField, Select, Button, AlertResultModalComponent } from '@/components';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { Box } from '@mui/material';
import { usePaperworks } from '@/context';
import { ModalConfiguration } from '@/models/commons';

interface FormValues {
  sectorCode: string;
  description: string;
}

interface SectorsAllowedToGenerateFormProps {
  initialValues?: FormValues;
  closeModal: () => void;
  editMode?: boolean;
}

const DEFAULT_FORM_VALUES: FormValues = {
  sectorCode: '',
  description: '',
};

export const SectorsAllowedToGenerateForm: FC<SectorsAllowedToGenerateFormProps> = ({ initialValues, closeModal, editMode = false }) => {
  const { t } = useTranslation();
  const { catalogSectors, sectorsActions, sectorDataEdit } = usePaperworks();
  const [openAlertModal, setOpenModal] = useState(false);
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
      const updateSector = await sectorsActions?.updateSector({
        ...data,
        id: sectorDataEdit.id,
        isCreationAllowed: true,
        isVisibilityAllowed: false,
        update: true,
        stages: [],
        name: '',
      });
      if (updateSector?.success) {
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
          icon: SuccessIcon,
          message: t('paperworks.alertResultModal.updateSuccessLabel', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
          modalTitle: t('paperworks.alertResultModal.updateSuccessModalTitle', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
        });
      } else {
        let message = t('paperworks.alertResultModal.updateErrorLabel', { entityName: t('paperworks.sectorsAreasTab.entityName') });
        if (updateSector?.message?.includes('already exists')) {
          message = `${t('paperworks.alertResultModal.updateErrorLabel', {
            entityName: t('paperworks.sectorsAreasTab.entityName'),
          })} <strong>${t('paperworks.sectorsAreasTab.errorSectorCodeAlreadySelected')}</strong>`;
        }
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
          icon: AdvertenceIcon,
          message,
          modalTitle: t('paperworks.alertResultModal.createErrorModalTitle', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
        });
      }
    } else {
      const addSector = await sectorsActions?.createSector({
        ...data,
        isCreationAllowed: true,
        isVisibilityAllowed: false,
        update: true,
        stages: [],
        name: '',
      });
      if (addSector?.success) {
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
          icon: SuccessIcon,
          message: t('paperworks.alertResultModal.createSuccessLabel', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
          modalTitle: t('paperworks.alertResultModal.createSuccessModalTitle', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
        });
        reset(DEFAULT_FORM_VALUES);
      } else {
        let message = t('paperworks.alertResultModal.createErrorLabel', { entityName: t('paperworks.sectorsAreasTab.entityName') });
        if (addSector?.message?.includes('already exists')) {
          message = `${t('paperworks.alertResultModal.createErrorLabel', {
            entityName: t('paperworks.sectorsAreasTab.entityName'),
          })} <strong>${t('paperworks.sectorsAreasTab.errorSectorCodeAlreadySelected')}</strong>`;
        }
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
          icon: AdvertenceIcon,
          message,
          modalTitle: t('paperworks.alertResultModal.createErrorModalTitle', { entityName: t('paperworks.sectorsAreasTab.entityName') }),
        });
      }
    }
    setOpenModal(true);
  };

  const onCancel = () => {
    reset();
    closeModal();
  };

  const onCloseAlertModal = () => setOpenModal(false);

  useEffect(() => {
    if (editMode) {
      reset({
        sectorCode: String(sectorDataEdit?.departmentId),
        description: sectorDataEdit?.description,
      });
    } else {
      reset({
        sectorCode: '',
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
            name="sectorCode"
            label={t('paperworks.sectorsAreasTab.sectorCodeFieldTitle')}
            rules={{ required: t('paperworks.errors.requiredField') }}
            control={control}
            options={catalogSectors}
            errors={errors}
            keyLabel="name"
            keyValue="id"
          />
          <TextField
            name="description"
            label={t('paperworks.sectorsAreasTab.descriptionFieldTitle')}
            rules={{ required: t('paperworks.errors.requiredField') }}
            control={control}
            errors={errors}
          />
          <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: 3, gap: 2 }}>
            <Button buttonType="secondary" onClick={onCancel}>
              {t('paperworks.sectorsAreasTab.btnCancel')}
            </Button>
            <Button type="submit">{t('paperworks.sectorsAreasTab.btnCreate')}</Button>
          </Box>
        </Box>
      </form>
    </>
  );
};
