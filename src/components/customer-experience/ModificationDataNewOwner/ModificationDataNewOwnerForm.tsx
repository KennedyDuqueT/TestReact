import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { ModificationDataNewOwnerFormValues } from '@/models/customer-experience';
import { Button, Select, TextField, Checkbox, TextArea } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { SuccessIcon, AdvertenceIcon } from '@/assets';

interface Props {
  onSubmit: (modalConfig: ModalOptionsConfiguration) => void;
  onShowMessage: (modalConfig: ModalConfiguration) => void;
}

export const ModificationDataNewOwnerForm: FC<Props> = ({ onSubmit, onShowMessage }) => {
  const { t } = useTranslation();

  const socialNetworkOptions = [
    { id: 1, name: t('customerExperience.changeOwnership.twitter') },
    { id: 2, name: t('customerExperience.changeOwnership.instagram') },
    { id: 3, name: t('customerExperience.changeOwnership.telegram') },
    { id: 4, name: t('customerExperience.changeOwnership.whatsApp') },
  ];

  const form = useForm<ModificationDataNewOwnerFormValues>({});

  const {
    control,
    formState: { errors },
  } = form;

  const onTransfer = () => {
    // TODO transfer step
  };

  const onSaveSocial = () => {
    if (!!control._formValues.socialNetworks && !!control._formValues.socialNetwork) {
      onShowMessage({
        buttonText: t('customerExperience.changeOwnership.accept'),
        icon: SuccessIcon,
        message: t('customerExperience.changeOwnership.doneSaveSocial'),
        modalTitle: t('customerExperience.changeOwnership.savedSocial'),
      });
    }
  };

  const onFinishProcess = () => {
    onSubmit({
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

  const onSubmitAll = () => {
    onShowMessage({
      buttonText: t('customerExperience.changeOwnership.return'),
      icon: AdvertenceIcon,
      message: t('customerExperience.changeOwnership.overdueMessage'),
      modalTitle: t('customerExperience.changeOwnership.overdueDebts'),
    });
  };

  return (
    <>
      <Grid container spacing={4} mt={2} px={4} paddingBottom={4}>
        <Grid item xs={12} md={6}>
          <TextField name="phone" label={t('customerExperience.changeOwnership.phone')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="email" label={t('customerExperience.changeOwnership.email')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="phone2" label={t('customerExperience.changeOwnership.phone') + ' 2'} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="email2" label={t('customerExperience.changeOwnership.email') + ' 2'} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            name="socialNetworks"
            label={t('customerExperience.changeOwnership.socialNetworks')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={socialNetworkOptions}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item flex={1}>
              <TextField
                name="socialNetwork"
                label={t('customerExperience.changeOwnership.socialNetwork')}
                disabled={!control._formValues.socialNetworks}
                errors={errors}
                control={control}
              />
            </Grid>

            <Grid item ml={3}>
              <Button
                variant="contained"
                onClick={onSaveSocial}
                buttonType={!!control._formValues.socialNetworks && !!control._formValues.socialNetwork ? 'primary' : 'cancel'}
              >
                {t('customerExperience.changeOwnership.save')}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Checkbox
            name="transferDeposit"
            label={t('customerExperience.changeOwnership.transferDeposit')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12} md={6}></Grid>

        <Grid item xs={12} md={6}>
          <Button variant="contained" buttonType="primary" width={'100%'}>
            {t('customerExperience.changeOwnership.generateForm')}
          </Button>
        </Grid>
      </Grid>

      <Box display="flex" width={1} justifyContent="flex-end" mt={4} px={4}>
        <Box display="flex" width={1} justifyContent="flex-end">
          <Button
            variant="contained"
            buttonType="cancel"
            disabled={!control._formValues.socialNetworks}
            onClick={onTransfer}
            style={{ marginRight: 24 }}
          >
            {t('customerExperience.changeOwnership.transferCashier')}
          </Button>

          <Box sx={{ flex: 1 }} />

          <Button variant="contained" buttonType="abort" onClick={onFinishProcess} style={{ marginRight: 24 }}>
            {t('customerExperience.changeOwnership.finishProcess')}
          </Button>

          <Button variant="contained" buttonType="primary" onClick={onSubmitAll} disabled={!control._formValues.socialNetworks}>
            {t('customerExperience.changeOwnership.evolveProcess')}
          </Button>
        </Box>
      </Box>
    </>
  );
};
