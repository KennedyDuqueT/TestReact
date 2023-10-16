import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { ModalConfiguration } from '@/models/commons';
import { ReturnDepositFormValues } from '@/models/customer-experience';
import { Button, Select } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { AdvertenceIcon } from '@/assets';

interface Props {
  onSubmit: () => void;
  onFail: (modalConfig: ModalConfiguration) => void;
  done: boolean;
}

export const ReturnDepositForm: FC<Props> = ({ onSubmit, onFail, done }) => {
  const { t } = useTranslation();

  const options = [
    { id: 1, name: t('customerExperience.changeContract.yes') },
    { id: 2, name: t('customerExperience.changeContract.no') },
  ];

  const form = useForm<ReturnDepositFormValues>({});

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const handleCancel = () => {
    form.reset({});
  };

  const onContinue = (values: ReturnDepositFormValues) => {
    // TODO send request to API
    if (values.hasDeposit === 2) {
      onFail({
        buttonText: t('customerExperience.contactReport.return'),
        icon: AdvertenceIcon,
        message: t('customerExperience.contactReport.maxDeposit'),
        modalTitle: t('customerExperience.contactReport.returnDeposit'),
      });
    } else {
      onSubmit();
    }
  };

  return (
    <>
      <Grid container spacing={3} mt={2} px={4}>
        <Grid item xs={12} md={6}>
          <Select
            id="contract-client-has-Deposit"
            name="hasDeposit"
            label={t('customerExperience.changeContract.clientWithDeposit')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={options}
            errors={errors}
            keyValue="id"
            keyLabel="name"
            disabled={done}
          />
        </Grid>
      </Grid>

      {done ? null : (
        <Box display="flex" width={1} justifyContent="flex-end" mt={4}>
          <Box display="flex" width={1} justifyContent="flex-end">
            <Button variant="contained" buttonType="cancel" onClick={handleCancel} style={{ marginRight: 24 }}>
              {t('customerExperience.changeContract.exit')}
            </Button>

            <Button variant="contained" buttonType="cancel" onClick={handleCancel}>
              {t('customerExperience.changeContract.transferProcess')}
            </Button>

            <Box sx={{ flex: 1 }} />

            <Button variant="contained" buttonType="abort" onClick={handleCancel} style={{ marginRight: 24 }}>
              {t('customerExperience.changeContract.finishRequest')}
            </Button>

            <Button variant="contained" buttonType="primary" onClick={handleSubmit(onContinue)}>
              {t('customerExperience.changeContract.createOp')}
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};
