import { Box, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FC, useEffect } from 'react';

import { CancelSupplyType } from '@/models/customer-experience';
import { ModalConfiguration } from '@/models/commons';
import { TextField, Button } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { AdvertenceIcon } from '@/assets';
import { useSupplyRequest } from '@/context';

interface Props {
  onSubmit: (data: ModalConfiguration) => void;
  toggleLoad: (value: boolean) => void;
}

export const CancelSupplyForm: FC<Props> = ({ onSubmit, toggleLoad }) => {
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

  const onContinue = () => {
    toggleLoad(true);
    setTimeout(() => {
      toggleLoad(false);
      onSubmit({
        buttonText: t('customerExperience.cancelSupply.return'),
        icon: AdvertenceIcon,
        message: t('customerExperience.cancelSupply.haveOverdueDebts'),
        modalTitle: t('customerExperience.cancelSupply.overdueDebts'),
      });
    }, 1000);
  };

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
          <TextField name="supplyBalance" label={t('customerExperience.cancelSupply.supplyBalance')} errors={errors} control={control} disabled />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="totalBalanceOverdue"
            label={t('customerExperience.cancelSupply.totalBalanceOverdue')}
            errors={errors}
            control={control}
            disabled
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="balanceSheetStatus"
            label={t('customerExperience.cancelSupply.balanceSheetStatus')}
            errors={errors}
            control={control}
            disabled
          />
        </Grid>

        <Grid item xs={12} md={6} display="flex">
          <Button variant="contained" style={{ flex: 1 }}>
            {t('customerExperience.cancelSupply.detailed')}
          </Button>
        </Grid>

        <Grid item xs={12} md={6} display="flex">
          <Button variant="contained" style={{ flex: 1 }}>
            {t('customerExperience.cancelSupply.issueForm')}
          </Button>
        </Grid>
      </Grid>

      <Box display="flex" width={1} justifyContent="flex-end" mt={7} px={4}>
        <Box display="flex" width={1} justifyContent="flex-end">
          <Button variant="contained" buttonType="cancel" style={{ marginRight: 24 }}>
            {t('customerExperience.cancelSupply.transferProcedure')}
          </Button>
          <Button variant="contained" buttonType="cancel">
            {t('customerExperience.cancelSupply.transferCustomer')}
          </Button>

          <Box sx={{ flex: 1 }} />

          <Button variant="contained" buttonType="abort" style={{ marginRight: 24 }}>
            {t('customerExperience.cancelSupply.finalizeProcedure')}
          </Button>
          <Button variant="contained" buttonType="primary" onClick={onContinue}>
            {t('customerExperience.cancelSupply.evolveProcess')}
          </Button>
        </Box>
      </Box>
    </>
  );
};
