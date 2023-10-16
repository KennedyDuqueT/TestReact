import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { IncludeReportFormValues } from '@/models/customer-experience';
import { TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';

interface Props {
  onChange?: () => void;
}

export const IncludeReportForm: FC<Props> = () => {
  const { t } = useTranslation();

  const form = useForm<IncludeReportFormValues>({});

  const {
    control,
    formState: { errors },
  } = form;

  return (
    <>
      <Grid container spacing={3} mt={2} px={4}>
        <Grid item xs={12} md={6}>
          <TextField
            name="initialContribution"
            label={t('customerExperience.paymentAgreement.initialContribution')}
            errors={errors}
            control={control}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="payInitital" label={t('customerExperience.paymentAgreement.payInitital')} errors={errors} control={control} />
        </Grid>
      </Grid>
    </>
  );
};
