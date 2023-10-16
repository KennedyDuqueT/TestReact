import { Button, Select, TextField, WrapperForm } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useTheme } from '@/context';
import { useTariffSchedulesManagement } from '@/context/billing';

interface TariffSchedulesFormFilterProps {
  onFilterTariffSchedules: SubmitHandler<BillingModels.TariffSchedulesFilterInterface>;
  control: Control<BillingModels.TariffSchedulesFilterInterface>;
  errors: FieldErrors<BillingModels.TariffSchedulesFilterInterface>;
  handleSubmit: UseFormHandleSubmit<BillingModels.TariffSchedulesFilterInterface>;
  onGenerateTariffSchedules: (tariffSchedulesToGenerateFilter: BillingModels.TariffSchedulesFilterInterface) => Promise<void>;
  formFilter: UseFormReturn<BillingModels.TariffSchedulesFilterInterface>;
}

const TariffSchedulesFormFilterComponent: FC<TariffSchedulesFormFilterProps> = ({
  onFilterTariffSchedules,
  handleSubmit,
  errors,
  control,
  onGenerateTariffSchedules,
  formFilter,
}) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const { currencies, serviceTypes } = useTariffSchedulesManagement();
  return (
    <WrapperForm variant="secondary" title={t('billing.maintenance.tariffSchedulesManagement.filterFieldsTitleFormLabel')}>
      <form onSubmit={handleSubmit(onFilterTariffSchedules)}>
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={6} sx={{ pl: 2, pr: 3 }}>
            <Grid item xs={12}>
              <Select
                name="serviceType"
                label={t('billing.maintenance.tariffSchedulesManagement.serviceTypeFormLabel')}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                options={serviceTypes}
                errors={errors}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="currency"
                label={t('billing.maintenance.tariffSchedulesManagement.currencyFormLabel')}
                rules={{}}
                control={control}
                options={currencies}
                errors={errors}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ pr: 2, pl: 3 }}>
            <Grid item xs={12}>
              <TextField
                name="fromDate"
                label={t('billing.maintenance.tariffSchedulesManagement.fromDateFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                type="date"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="toDate"
                label={t('billing.maintenance.tariffSchedulesManagement.toDateFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                type="date"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 4, pr: 2 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Grid container justifyContent="flex-end" sx={{ pr: 2, pt: 3, pl: 2 }}>
            <Box sx={{ pr: 2 }}>
              <Button variant="contained" type="submit" buttonType="save">
                {t('billing.maintenance.tariffSchedulesManagement.visualizeButtonLabel')}
              </Button>
            </Box>
            <Box>
              <Button type="button" variant="contained" buttonType="cancel" onClick={() => onGenerateTariffSchedules(formFilter.getValues())}>
                {t('billing.maintenance.tariffSchedulesManagement.generateButtonLabel')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </WrapperForm>
  );
};

export default TariffSchedulesFormFilterComponent;
