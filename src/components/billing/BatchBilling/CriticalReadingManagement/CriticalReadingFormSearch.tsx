import { Button, MultiSelect, Select, TextField, WrapperForm } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { Control, FieldErrors, UseFormReturn } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useTheme } from '@/context';
import { useCriticalReading } from '@/context/billing';

interface CriticalReadingFormSearchProps {
  control: Control<BillingModels.CriticalReadingSearchInterface>;
  errors: FieldErrors<BillingModels.CriticalReadingSearchInterface>;
  onSearchCriticalReading: (criticalReadingFormSearch: BillingModels.CriticalReadingSearchInterface) => void;
  onCancelFormSearch: () => void;
  isValidFormSearch: boolean;
  formSearch: UseFormReturn<BillingModels.CriticalReadingSearchInterface>;
}

const CriticalReadingFormSearchComponent: FC<CriticalReadingFormSearchProps> = ({
  errors,
  control,
  onSearchCriticalReading,
  onCancelFormSearch,
  isValidFormSearch,
  formSearch,
}) => {
  const { t } = useTranslation();
  const { serviceTypes, months, routes, typesCustomer } = useCriticalReading();
  const theme = useTheme();
  return (
    <WrapperForm variant="secondary" title={t('billing.batchBilling.criticalReading.criticalReadingTitleFormLabel')}>
      <form>
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={6} sx={{ pl: 2, pr: 3 }}>
            <Grid item xs={12}>
              <MultiSelect
                name="typeCustomer"
                label={t('billing.batchBilling.criticalReading.typeCustomerFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                options={typesCustomer}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="cycleCode"
                label={t('billing.batchBilling.criticalReading.cycleCodeFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="routeCode"
                label={t('billing.batchBilling.criticalReading.routeCodeFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                options={routes}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ pr: 2, pl: 3 }}>
            <Grid item xs={12}>
              <TextField
                name="year"
                label={t('billing.batchBilling.criticalReading.yearFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="month"
                label={t('billing.batchBilling.criticalReading.monthFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                options={months}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="serviceType"
                label={t('billing.batchBilling.criticalReading.serviceTypeFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                options={serviceTypes}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 4, pr: 2 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Grid container justifyContent="flex-end" sx={{ pr: 2, mt: 4 }}>
            <Box sx={{ pr: 2 }}>
              <Button variant="contained" type="button" buttonType="cancel" onClick={onCancelFormSearch}>
                {t('billing.batchBilling.criticalReading.cancelButtonLabel')}
              </Button>
            </Box>
            <Box>
              <Button
                type="button"
                variant="contained"
                buttonType="save"
                disabled={!isValidFormSearch}
                onClick={() => onSearchCriticalReading(formSearch.getValues())}
              >
                {t('billing.batchBilling.criticalReading.searchButtonLabel')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </WrapperForm>
  );
};

export default CriticalReadingFormSearchComponent;
