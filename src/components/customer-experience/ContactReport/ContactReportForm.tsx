import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { ModalConfiguration, ModalOptionsConfiguration } from '@/models/commons';
import { ContactReportFormValues } from '@/models/customer-experience';
import { Button, Select } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { SuccessIcon, AdvertenceIcon } from '@/assets';

interface Props {
  onSubmit: () => void;
  showAlert: (modalConfig: ModalOptionsConfiguration) => void;
  onSend: (modalConfig: ModalConfiguration) => void;
}

export const ContactReportForm: FC<Props> = ({ onSubmit, showAlert, onSend }) => {
  const { t } = useTranslation();

  const optionsDigitalPayment = [
    { id: 1, name: t('customerExperience.changeContract.phone') },
    { id: 2, name: t('customerExperience.changeContract.email') },
    { id: 3, name: t('customerExperience.changeContract.whatsapp') },
  ];

  const form = useForm<ContactReportFormValues>({});

  const {
    control,
    formState: { errors },
  } = form;

  const handleCancel = () => {
    form.reset({});
  };

  const handleTransfer = () => {
    showAlert({
      buttonSucessText: t('customerExperience.changeContract.transfer'),
      buttonCancelText: t('customerExperience.changeContract.cancel'),
      icon: AdvertenceIcon,
      message: t('customerExperience.changeContract.areYouSureTransfer'),
      modalTitle: t('customerExperience.changeContract.transferRequest'),
    });
  };

  const sendLinkSuccess = (values: ContactReportFormValues, callback: () => void) => {
    if (values.paymentLink) {
      onSend({
        buttonText: t('customerExperience.changeContract.accept'),
        icon: SuccessIcon,
        message: t('customerExperience.changeContract.sendLinkSuccess'),
        modalTitle: t('customerExperience.contactReport.digitalPayment'),
      });
      callback();
      form.reset({});
    }
  };

  const onSendLink = (callback: () => void) => {
    if (control._formValues.paymentLink) {
      sendLinkSuccess({ paymentLink: control._formValues.paymentLink }, callback);
    }
  };

  const handleDigitalPayment = () => {
    showAlert({
      buttonSucessText: t('customerExperience.changeContract.continue'),
      buttonCancelText: t('customerExperience.changeContract.cancel'),
      modalTitle: t('customerExperience.contactReport.digitalPayment'),
      input: (
        <Grid container mb={6}>
          <Grid item xs={12}>
            <Select
              id="contract-report-payment-link"
              name="paymentLink"
              label={t('customerExperience.changeContract.paymentLink')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={optionsDigitalPayment}
              errors={errors}
              keyValue="id"
              keyLabel="name"
            />
          </Grid>
        </Grid>
      ),
      onReset: () => form.reset({}),
      onSubmit: onSendLink,
    });
  };

  return (
    <>
      <Grid container spacing={3} mt={2} px={4}>
        <Grid display="flex" width={1} style={{ marginBottom: 49, marginTop: 24 }}>
          <Button variant="contained" buttonType="cancel" onClick={handleTransfer} style={{ marginRight: 52, flex: 1 }}>
            {t('customerExperience.contactReport.transferProcess')}
          </Button>

          <Button variant="contained" buttonType="cancel" onClick={handleDigitalPayment} style={{ flex: 1 }}>
            {t('customerExperience.contactReport.digitalPayment')}
          </Button>
        </Grid>

        <Grid display="flex" width={1} justifyContent="flex-end">
          <Button variant="contained" buttonType="cancel" onClick={handleCancel} style={{ marginRight: 52, flex: 1 }}>
            {t('customerExperience.contactReport.sendContractEmail')}
          </Button>

          <Button variant="contained" buttonType="cancel" onClick={handleCancel} style={{ flex: 1 }}>
            {t('customerExperience.contactReport.emitReportContract')}
          </Button>
        </Grid>
      </Grid>

      <Box display="flex" width={1} justifyContent="flex-end" mt={4}>
        <Box display="flex" width={1} justifyContent="flex-end">
          <Button variant="contained" buttonType="cancel" onClick={handleCancel} style={{ marginRight: 24 }}>
            {t('customerExperience.contactReport.exit')}
          </Button>

          <Box sx={{ flex: 1 }} />

          <Button variant="contained" buttonType="primary" onClick={onSubmit}>
            {t('customerExperience.contactReport.continue')}
          </Button>
        </Box>
      </Box>
    </>
  );
};
