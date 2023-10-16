import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { ModalConfiguration } from '@/models/commons';
import { RequireAuthorizationFormValues } from '@/models/customer-experience';
import { Button, TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { SuccessIcon } from '@/assets';

interface Props {
  onSend: (modalConfig: ModalConfiguration) => void;
}

export const RequireAuthorizationForm: FC<Props> = ({ onSend }) => {
  const { t } = useTranslation();

  const form = useForm<RequireAuthorizationFormValues>({});

  const {
    control,
    formState: { errors },
  } = form;

  const sendEmail = () => {
    onSend({
      buttonText: t('customerExperience.paymentAgreement.accept'),
      icon: SuccessIcon,
      message: t('customerExperience.paymentAgreement.authMessageGenerated'),
      modalTitle: t('customerExperience.paymentAgreement.emailSent'),
    });
  };

  return (
    <>
      <Grid container spacing={3} mt={2} px={4}>
        <Grid item xs={12} md={6}>
          <TextField
            name="personAuthorize"
            label={t('customerExperience.paymentAgreement.personAuthorize') + ' 1'}
            errors={errors}
            control={control}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Button variant="contained" buttonType="primary" onClick={() => sendEmail()}>
            {t('customerExperience.paymentAgreement.send')}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
