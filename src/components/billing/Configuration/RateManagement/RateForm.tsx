import { Select, TextField, WrapperForm } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Grid } from '@mui/material';
import { FC, LegacyRef } from 'react';
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useDataMastersManagement, useRateManagement } from '@/context/billing';

interface RateFormProps {
  handleSubmit: UseFormHandleSubmit<BillingModels.RateInterface>;
  control: Control<BillingModels.RateInterface, any>;
  errors: FieldErrors<BillingModels.RateInterface>;
  onSubmit: SubmitHandler<BillingModels.RateInterface>;
  formRef?: LegacyRef<HTMLFormElement>;
}

const RateFormComponent: FC<RateFormProps> = ({ control, errors, handleSubmit, formRef, onSubmit }) => {
  const { t } = useTranslation();
  const { rateTypes } = useRateManagement();
  const { serviceTypes } = useDataMastersManagement();

  return (
    <WrapperForm title={t('billing.maintenance.ratesManagement.tabName')} variant="secondary">
      <form id="createOrEditFormRate" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={6} sx={{ pl: 2, pr: 3 }}>
            <Grid item xs={12} sx={{}}>
              <TextField
                name="code"
                label={t('billing.maintenance.ratesManagement.rateCodeFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="description"
                label={t('billing.maintenance.ratesManagement.descriptionFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="serviceTypeId"
                label={t('billing.maintenance.ratesManagement.serviceTypeFormLabel')}
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
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="interface1"
                label={t('billing.maintenance.ratesManagement.interface1FormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="interface2"
                label={t('billing.maintenance.ratesManagement.interface2FormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ pl: 3, pr: 2 }}>
            <Grid item xs={12}>
              <TextField
                name="interface3"
                label={t('billing.maintenance.ratesManagement.interface3FormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="filter1"
                label={t('billing.maintenance.ratesManagement.filter1FormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="filter2"
                label={t('billing.maintenance.ratesManagement.filter2FormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="rateTypeId"
                label={t('billing.maintenance.ratesManagement.rateTypeFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                options={rateTypes}
                keyLabel="shortDescription"
                keyValue="id"
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </WrapperForm>
  );
};

export default RateFormComponent;
