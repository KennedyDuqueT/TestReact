import { FC, useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from '@/hooks';
import { Select, Button, AlertResultModalComponent, TextField } from '@/components';
import { Box } from '@mui/material';
import { AdvertenceIcon, SuccessIcon } from '@/assets';
import { usePaperworks } from '@/context';
import { ModalConfiguration } from '@/models/commons';
import { PaperworksParameter } from '@/models/paperworks';

interface AddParametersFormProps {
  initialValues?: PaperworksParameter;
  closeModal: () => void;
}

const DEFAULT_FORM_VALUES = {
  paramId: null,
  name: '',
  value: '',
  description: '',
};

export const ParameterForm: FC<AddParametersFormProps> = ({ initialValues, closeModal }) => {
  const { t } = useTranslation();
  const { catalogParameters, parametersActions, parameterDataEdit } = usePaperworks();

  const isUpdate = !!initialValues?.id;

  useEffect(() => {
    isUpdate ? reset(parameterDataEdit) : reset();
  }, [initialValues]);

  const [error, setError] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [alertModalConfig, setAlertModalConfig] = useState<ModalConfiguration>({
    buttonText: '',
    icon: SuccessIcon,
    message: '',
    modalTitle: '',
  });

  const { control, handleSubmit, formState, reset } = useForm<PaperworksParameter>({
    defaultValues: isUpdate ? initialValues : DEFAULT_FORM_VALUES,
  });

  const { errors } = formState;

  const onSubmitForm: SubmitHandler<PaperworksParameter> = async (data: PaperworksParameter) => {
    if (isUpdate) {
      const updateParameter = await parametersActions?.updateParameter(data);
      setError(!updateParameter?.success);

      if (updateParameter?.success) {
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.parametersTab.entityName') }),
          icon: SuccessIcon,
          message: t('paperworks.alertResultModal.updateSuccessLabel', { entityName: t('paperworks.parametersTab.entityName') }),
          modalTitle: t('paperworks.alertResultModal.updateSuccessModalTitle', { entityName: t('paperworks.parametersTab.entityName') }),
        });
      } else {
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.parametersTab.entityName') }),
          icon: AdvertenceIcon,
          message: t('paperworks.alertResultModal.updateErrorLabel', { entityName: t('paperworks.parametersTab.entityName') }),
          modalTitle: t('paperworks.alertResultModal.createErrorModalTitle', { entityName: t('paperworks.parametersTab.entityName') }),
        });
      }
    } else {
      const addParameter = await parametersActions?.createParameter(data);
      setError(!addParameter?.success);

      if (addParameter?.success) {
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.parametersTab.entityName') }),
          icon: SuccessIcon,
          message: t('paperworks.alertResultModal.createSuccessLabel', { entityName: t('paperworks.parametersTab.entityName') }),
          modalTitle: t('paperworks.alertResultModal.createSuccessModalTitle', { entityName: t('paperworks.parametersTab.entityName') }),
        });
        reset(DEFAULT_FORM_VALUES);
      } else {
        let message = t('paperworks.alertResultModal.createErrorLabel', { entityName: t('paperworks.parametersTab.entityName') });
        if (addParameter?.message?.includes('already exists')) {
          message = `${t('paperworks.alertResultModal.createErrorLabel', {
            entityName: t('paperworks.parametersTab.entityName'),
          })} <strong>${t('paperworks.alertResultModal.alreadySelected', { entityName: t('paperworks.parametersTab.entityName') })}</strong>`;
        }
        setAlertModalConfig({
          buttonText: t('paperworks.alertResultModal.acceptButtonLabel', { entityName: t('paperworks.parametersTab.entityName') }),
          icon: AdvertenceIcon,
          message,
          modalTitle: t('paperworks.alertResultModal.createErrorModalTitle', { entityName: t('paperworks.parametersTab.entityName') }),
        });
      }
    }
    setOpenAlertModal(true);
  };

  const onCancel = () => {
    reset();
    closeModal();
  };

  const onCloseAlertModal = () => {
    setOpenAlertModal(false);

    if (!error) onCancel();
  };

  return (
    <>
      <AlertResultModalComponent modalConfiguration={alertModalConfig} onClose={onCloseAlertModal} openModal={openAlertModal} />
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Select
            name="paramId"
            label={t('paperworks.parametersTab.modalAddParameter.labelSelect')}
            rules={{ required: t('paperworks.errors.requiredField') }}
            control={control}
            options={catalogParameters}
            errors={errors}
            keyLabel="name"
            keyValue="id"
          />
          <TextField
            name="name"
            label={t('paperworks.parametersTab.modalAddParameter.nameFieldTitle')}
            rules={{ required: t('paperworks.errors.requiredField') }}
            control={control}
            errors={errors}
          />
          <TextField
            name="value"
            label={t('paperworks.parametersTab.modalAddParameter.valueFieldTitle')}
            rules={{ required: t('paperworks.errors.requiredField') }}
            control={control}
            errors={errors}
          />
          <TextField
            name="description"
            label={t('paperworks.parametersTab.modalAddParameter.descriptionFieldTitle')}
            rules={{ required: t('paperworks.errors.requiredField') }}
            control={control}
            errors={errors}
          />
          <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: 3, gap: 2 }}>
            <Button buttonType="secondary" onClick={onCancel}>
              {t('paperworks.parametersTab.modalAddParameter.btnCancel')}
            </Button>
            <Button type="submit">{t('paperworks.parametersTab.modalAddParameter.btnCreate')}</Button>
          </Box>
        </Box>
      </form>
    </>
  );
};
