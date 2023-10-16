import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Button, Select, TextField } from '@/components';
import { Control, FieldErrors } from 'react-hook-form';
import { useDataMastersManagement } from '@/context/billing';

interface RateSearchViewProps {
  onConfirmation: () => void;
  onCancel: () => void;
  control: Control<BillingModels.RateInterface>;
  errors: FieldErrors<BillingModels.RateInterface>;
}

const RateConfirmViewComponent: FC<RateSearchViewProps> = ({ onConfirmation, onCancel, control, errors }) => {
  const { t } = useTranslation();
  const { serviceTypes } = useDataMastersManagement();

  return (
    <>
      <Grid container sx={{ mt: 4, pl: 2, pr: 2 }}>
        <Grid item xs={12}>
          <Select
            name="serviceTypeId"
            label={t('billing.maintenance.ratesManagement.serviceTypeFormLabel')}
            rules={{
              required: t('formValidationsErrors.requiredErrorLabel'),
            }}
            control={control}
            options={serviceTypes}
            errors={errors}
            disabled
            keyLabel="name"
            keyValue="id"
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 4 }}>
          <TextField
            name="interface1"
            label={t('billing.maintenance.ratesManagement.ValueInterfacesLabel')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            errors={errors}
            control={control}
            disabled
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 4 }}>
          <TextField
            name="description"
            label={t('billing.maintenance.ratesManagement.descriptionFormLabel')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            errors={errors}
            control={control}
            disabled
          />
        </Grid>
        <Grid container spacing={2} mt={2} justifyContent="flex-end" sx={{ mt: 4 }}>
          <Box ml={2}>
            <Button variant="contained" buttonType="cancel" onClick={onCancel}>
              {t('billing.maintenance.ratesManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box ml={2}>
            <Button variant="contained" type="submit" buttonType="save" onClick={onConfirmation}>
              {t('billing.maintenance.ratesManagement.saveButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RateConfirmViewComponent;
