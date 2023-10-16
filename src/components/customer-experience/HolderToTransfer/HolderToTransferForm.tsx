import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { HolderToTransferFormValues } from '@/models/customer-experience';
import { Button, TextField, TextArea } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { SuccessIcon } from '@/assets';

interface Props {
  onSubmit: (modalConfig: ModalConfiguration) => void;
  onCancel: (modalConfig: ModalOptionsConfiguration) => void;
  showAlert: (modalConfig: ModalOptionsConfiguration) => void;
}

export const HolderToTransferForm: FC<Props> = ({ onSubmit, onCancel, showAlert }) => {
  const { t } = useTranslation();

  const form = useForm<HolderToTransferFormValues>({
    defaultValues: { totalTransfer: '$10.000.000' },
  });

  const {
    control,
    formState: { errors },
  } = form;

  const handleProcess = () => {
    showAlert({
      buttonSucessText: t('customerExperience.transferBail.accept'),
      buttonCancelText: t('customerExperience.transferBail.cancel'),
      modalTitle: t('customerExperience.transferBail.process'),
      input: (
        <Grid container mb={6}>
          <Grid item xs={12}>
            <TextField name="totalTransfer" label={t('customerExperience.transferBail.totalTransfer')} errors={errors} control={control} />
          </Grid>
        </Grid>
      ),
      onReset: () => form.reset({}),
    });
  };

  const handleFinish = () => {
    onCancel({
      buttonSucessText: t('customerExperience.changeOwnership.save'),
      buttonCancelText: t('components.button.cancel'),
      modalTitle: t('customerExperience.changeOwnership.finishProcedure'),
      message: t('customerExperience.changeOwnership.finishProcedureMessage'),
      input: (
        <Grid container mb={6} mt={5}>
          <Grid item xs={12}>
            <TextArea
              name="cancelMessage"
              label={t('customerExperience.changeOwnership.observations')}
              errors={errors}
              control={control}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              rows={4}
            />
          </Grid>
        </Grid>
      ),
      onReset: () => form.reset({}),
      onSubmit: () => form.reset({}),
    });
  };

  const onContinue = () => {
    // TODO send request to API
    onSubmit({
      buttonText: t('customerExperience.transferBail.accept'),
      icon: SuccessIcon,
      message: t('customerExperience.transferBail.transferredTotal'),
      modalTitle: t('customerExperience.transferBail.amountAddes'),
    });
  };

  return (
    <>
      <Grid container spacing={3} mt={2} px={4}>
        <Grid item xs={12} md={6}>
          <TextField name="clientUser" label={t('customerExperience.transferBail.clientUser')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="supply" label={t('customerExperience.transferBail.supply')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="customerId" label={t('customerExperience.transferBail.customerId')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="totalTransferred" label={t('customerExperience.transferBail.totalTransferred')} errors={errors} control={control} />
        </Grid>
      </Grid>

      <Box display="flex" width={1} justifyContent="flex-end" mt={4} px={4}>
        <Box display="flex" width={1} justifyContent="flex-end">
          <Button variant="contained" buttonType="cancel" style={{ marginRight: 24 }} onClick={handleProcess}>
            {t('customerExperience.transferBail.transferCheckout')}
          </Button>

          <Box sx={{ flex: 1 }} />

          <Button variant="contained" buttonType="abort" onClick={handleFinish} style={{ marginRight: 24 }}>
            {t('customerExperience.transferBail.finishProcedure')}
          </Button>

          <Button variant="contained" buttonType="primary" onClick={onContinue}>
            {t('customerExperience.transferBail.following')}
          </Button>
        </Box>
      </Box>
    </>
  );
};
