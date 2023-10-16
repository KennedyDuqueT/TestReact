import { useForm } from 'react-hook-form';
import { FC } from 'react';

import { ClientDataFormValues } from '@/models/customer-experience';
import { TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Grid } from '@mui/material';

export const ClientDataForm: FC = () => {
  const { t } = useTranslation();

  const form = useForm<ClientDataFormValues>({});

  const {
    control,
    formState: { errors },
  } = form;

  return (
    <>
      <Grid container spacing={3} mt={2} px={4} paddingBottom={4}>
        <Grid item xs={12} md={6}>
          <TextField name="company" label={t('customerExperience.creditRating.company')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="idType" label={t('customerExperience.creditRating.idType')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="businessName" label={t('customerExperience.creditRating.businessName')} errors={errors} control={control} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="clientId" label={t('customerExperience.creditRating.clientId')} errors={errors} control={control} />
        </Grid>
      </Grid>
    </>
  );
};
