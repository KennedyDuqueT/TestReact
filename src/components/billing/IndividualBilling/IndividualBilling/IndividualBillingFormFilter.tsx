import { Button, MultiSelect, Select, TextField, WrapperForm } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { Control, FieldErrors, UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useTheme } from '@/context';
import { useIndividualBilling } from '@/context/billing';

interface IndividualBillingFormFilterProps {
  control: Control<BillingModels.IndividualBillingFilterInterface>;
  errors: FieldErrors<BillingModels.IndividualBillingFilterInterface>;
  onProcessIndividualBilling: (individualBillingFormFilter: BillingModels.IndividualBillingFilterInterface) => void;
  onCancelFormFilter: () => void;
  isValidFormFilter: boolean;
  formFilter: UseFormReturn<BillingModels.IndividualBillingFilterInterface>;
  handleSubmit: UseFormHandleSubmit<BillingModels.IndividualBillingFilterInterface>;
}

const IndividualBillingFormFilterComponent: FC<IndividualBillingFormFilterProps> = ({
  errors,
  control,
  onProcessIndividualBilling,
  onCancelFormFilter,
  isValidFormFilter,
  formFilter,
  handleSubmit,
}) => {
  const { t } = useTranslation();
  const { months, serviceTypes } = useIndividualBilling();
  const theme = useTheme();
  return (
    <WrapperForm variant="secondary" title={t('billing.individualBilling.individualBilling.individualBillingTitleFormLabel')}>
      <form onSubmit={handleSubmit(onProcessIndividualBilling)}>
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={6} sx={{ pl: 2, pr: 3 }}>
            <Grid item xs={12}>
              <MultiSelect
                name="serviceType"
                label={t('billing.individualBilling.individualBilling.serviceTypeFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                options={serviceTypes}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="supplyCode"
                label={t('billing.individualBilling.individualBilling.supplyCodeFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="customerName"
                label={t('billing.individualBilling.individualBilling.customerNameFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="RNC"
                label={t('billing.individualBilling.individualBilling.RNCFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="identificationCard"
                label={t('billing.individualBilling.individualBilling.identificationCardFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ pr: 2, pl: 3 }}>
            <Grid item xs={12}>
              <TextField
                name="cycleCode"
                label={t('billing.individualBilling.individualBilling.cycleCodeFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="routeCode"
                label={t('billing.individualBilling.individualBilling.routeCodeFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="year"
                label={t('billing.individualBilling.individualBilling.yearFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="month"
                label={t('billing.individualBilling.individualBilling.monthFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                options={months}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid container item xs={12} sx={{ mt: 4 }}>
              <Grid item xs={6} sx={{ pr: 2 }}>
                <TextField
                  name="fromDate"
                  label={t('billing.individualBilling.individualBilling.fromDateFormLabel')}
                  errors={errors}
                  rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                  control={control}
                  type="date"
                />
              </Grid>
              <Grid item xs={6} sx={{ pl: 2 }}>
                <TextField
                  name="toDate"
                  label={t('billing.individualBilling.individualBilling.toDateFormLabel')}
                  errors={errors}
                  rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                  control={control}
                  type="date"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 4, pr: 2 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Grid container sx={{ pl: 2, pr: 2, mt: 4 }}>
            <Grid item xs={4}>
              <Box sx={{ pr: 2 }}>
                <Button variant="contained" type="button" buttonType="cancel" onClick={onCancelFormFilter}>
                  {t('billing.individualBilling.individualBilling.clearButtonLabel')}
                </Button>
              </Box>
            </Grid>
            <Grid container item xs={8} justifyContent="flex-end">
              <Box>
                <Button
                  type="button"
                  variant="contained"
                  buttonType="primary"
                  disabled={!isValidFormFilter}
                  onClick={() => onProcessIndividualBilling(formFilter.getValues())}
                >
                  {t('billing.individualBilling.individualBilling.processButtonLabel')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </WrapperForm>
  );
};

export default IndividualBillingFormFilterComponent;
