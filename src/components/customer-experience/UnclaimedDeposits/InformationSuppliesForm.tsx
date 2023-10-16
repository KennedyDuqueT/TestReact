import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FC } from 'react';

import { InfoBalanceUnclaimed } from '@/models/customer-experience';
import { TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';

export const InformationSuppliesForm: FC = () => {
  const { t } = useTranslation();

  const form = useForm<InfoBalanceUnclaimed>({
    defaultValues: {
      quantitySupplies: '',
      bailBalance: '',
    },
  });

  const {
    control,
    formState: { errors },
  } = form;

  return (
    <>
      <Grid container spacing={3} mt={2} px={4} paddingBottom={4}>
        <Grid item xs={12} md={6}>
          <TextField
            name="quantitySupplies"
            label={t('customerExperience.unclaimedDeposits.quantitySupplies')}
            errors={errors}
            control={control}
            disabled
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="bailBalance" label={t('customerExperience.unclaimedDeposits.bailBalance')} errors={errors} control={control} disabled />
        </Grid>
      </Grid>
    </>
  );
};
