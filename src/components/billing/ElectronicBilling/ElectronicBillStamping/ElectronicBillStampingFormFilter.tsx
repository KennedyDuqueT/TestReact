import { Button, Select, TextField, WrapperForm } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { Control, FieldErrors, UseFormReturn, UseFormWatch } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useTheme } from '@/context';
import { useElectronicBillStamping } from '@/context/billing';
import { formatter } from '@/utils';

interface ElectronicBillStampingFormFilterProps {
  isValid: boolean;
  form: UseFormReturn<BillingModels.ElectronicBillStampingFormInterface>;
  control: Control<BillingModels.ElectronicBillStampingFormInterface>;
  errors: FieldErrors<BillingModels.ElectronicBillStampingFormInterface>;
  onClearFormFilter: () => void;
  onUpdateFormFilter: (dataFormFilter: BillingModels.ElectronicBillStampingFormInterface) => void;
  watch: UseFormWatch<BillingModels.ElectronicBillStampingFormInterface>;
}

const ElectronicBillStampingFormFilterComponent: FC<ElectronicBillStampingFormFilterProps> = ({
  control,
  errors,
  onClearFormFilter,
  onUpdateFormFilter,
  form,
  isValid,
  watch,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { cycles, routes } = useElectronicBillStamping();
  const initialSelectedDate = watch('fromDate', '');
  const initialSelectedDatePlusThirtyDay = formatter.addDaysToADate(initialSelectedDate, 31);

  return (
    <WrapperForm variant="secondary" title={t('billing.electronicBilling.electronicBillStamping.filterFieldsTitleFormLabel')}>
      <form>
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={6} sx={{ pl: 2, pr: 3 }}>
            <Grid item xs={12}>
              <Select
                name="cycleId"
                label={t('billing.electronicBilling.electronicBillStamping.cycleCodeFormLabel')}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                options={cycles}
                errors={errors}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="routeId"
                label={t('billing.electronicBilling.electronicBillStamping.routeCodeFormLabel')}
                rules={{}}
                control={control}
                options={routes}
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
                label={t('billing.electronicBilling.electronicBillStamping.fromDateFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                type="date"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="toDate"
                label={t('billing.electronicBilling.electronicBillStamping.toDateFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                type="date"
                disabled={!initialSelectedDate}
                min={initialSelectedDate}
                max={initialSelectedDatePlusThirtyDay}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 4, pr: 2 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Grid container justifyContent="flex-end" sx={{ pr: 2, pt: 3, pl: 2 }}>
            <Box sx={{ pr: 2 }}>
              <Button type="button" variant="contained" buttonType="cancel" onClick={onClearFormFilter}>
                {t('billing.electronicBilling.electronicBillStamping.onClearFormFilter')}
              </Button>
            </Box>
            <Box>
              <Button variant="contained" type="button" buttonType="save" onClick={() => onUpdateFormFilter(form.getValues())} disabled={!isValid}>
                {t('billing.electronicBilling.electronicBillStamping.updateButtonLabel')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </WrapperForm>
  );
};

export default ElectronicBillStampingFormFilterComponent;
