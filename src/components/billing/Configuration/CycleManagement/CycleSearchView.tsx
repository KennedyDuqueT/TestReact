import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Select, TextField, Button } from '@/components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { cycleInitialValue } from '@/models/billing';
import { useDataMastersManagement } from '@/context/billing';

interface CycleSearchViewProps {
  onSearch: SubmitHandler<BillingModels.CycleInterface>;
  onCancel: () => void;
}

const CycleSearchViewComponent: FC<CycleSearchViewProps> = ({ onSearch, onCancel }) => {
  const { t } = useTranslation();
  const { serviceTypes } = useDataMastersManagement();
  const form = useForm<BillingModels.CycleInterface>({
    defaultValues: cycleInitialValue,
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  return (
    <>
      <form onSubmit={handleSubmit(onSearch)}>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label={t('billing.maintenance.cyclesManagement.cycleCodeModalLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="serviceTypeId"
              label={t('billing.maintenance.cyclesManagement.serviceTypeModalLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={serviceTypes}
              errors={errors}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
        </Grid>
        <Grid container mt={4} justifyContent="flex-end">
          <Box ml={2}>
            <Button variant="contained" buttonType="cancel" onClick={onCancel}>
              {t('billing.maintenance.cyclesManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box ml={2}>
            <Button variant="contained" type="submit" buttonType="save" disabled={!isValid}>
              {t('billing.maintenance.cyclesManagement.searchButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </form>
    </>
  );
};

export default CycleSearchViewComponent;
