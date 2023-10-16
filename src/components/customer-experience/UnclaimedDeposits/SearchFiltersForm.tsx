import { Box, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FC, useEffect } from 'react';

import { CancelSupplyType } from '@/models/customer-experience';
import { TextField, Button, Select } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { useSupplyRequest } from '@/context';

export const SearchFiltersForm: FC = () => {
  const { t } = useTranslation();

  const { actions, cancelSupply } = useSupplyRequest();

  const form = useForm<CancelSupplyType>({
    defaultValues: {
      supplyBalance: '$0',
      totalBalanceOverdue: '$0',
      balanceSheetStatus: '$0',
    },
  });

  const {
    control,
    formState: { errors },
    setValue,
  } = form;

  useEffect(() => {
    setValue('supplyBalance', cancelSupply.supplyBalance, { shouldTouch: false });
    setValue('totalBalanceOverdue', cancelSupply.totalBalanceOverdue, { shouldTouch: false });
    setValue('balanceSheetStatus', cancelSupply.balanceSheetStatus, { shouldTouch: false });
  }, [cancelSupply]);

  useEffect(() => {
    actions?.getCancelSupply();
  }, []);

  return (
    <>
      <Grid container spacing={3} mt={2} px={4} paddingBottom={4}>
        <Grid item xs={12} md={6}>
          <Select
            name="cycle"
            label={t('customerExperience.unclaimedDeposits.cycle')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={[]}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="startDate"
            label={t('customerExperience.unclaimedDeposits.startDate')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            type="date"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Select
            name="route"
            label={t('customerExperience.unclaimedDeposits.route')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={[]}
            errors={errors}
            keyValue="id"
            keyLabel="name"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="endDate"
            label={t('customerExperience.unclaimedDeposits.endDate')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            type="date"
          />
        </Grid>
      </Grid>

      <Box display="flex" width={1} justifyContent="flex-end" mt={4}>
        <Box display="flex" width={1} justifyContent="flex-end">
          <Box sx={{ flex: 1 }} />

          <Button variant="contained" buttonType="cancel" style={{ marginRight: 24 }}>
            {t('customerExperience.unclaimedDeposits.cleanFields')}
          </Button>

          <Button variant="contained" buttonType="primary">
            {t('customerExperience.unclaimedDeposits.lookFor')}
          </Button>
        </Box>
      </Box>
    </>
  );
};
