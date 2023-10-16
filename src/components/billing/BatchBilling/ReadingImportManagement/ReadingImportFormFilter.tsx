import { Button, MultiSelect, Select, TextField, WrapperForm } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useTheme } from '@/context';
import { useReadingImport } from '@/context/billing';

interface ReadingImportFormFilterProps {
  control: Control<BillingModels.ReadingImportFilterInterface>;
  errors: FieldErrors<BillingModels.ReadingImportFilterInterface>;
  onGenerateFilterReadingImport: () => void;
  onCancelFilterReadingImport: () => void;
  isValidFormFilter: boolean;
  handleSubmit: UseFormHandleSubmit<BillingModels.ReadingImportFilterInterface>;
  onGenerateReadingImport: SubmitHandler<BillingModels.ReadingImportFilterInterface>;
}

const ReadingImportFormFilterComponent: FC<ReadingImportFormFilterProps> = ({
  errors,
  control,
  onGenerateFilterReadingImport,
  onCancelFilterReadingImport,
  isValidFormFilter,
  handleSubmit,
  onGenerateReadingImport,
}) => {
  const { t } = useTranslation();
  const { serviceTypes, months, routes, typesCustomer } = useReadingImport();
  const theme = useTheme();
  return (
    <WrapperForm variant="secondary" title={t('billing.batchBilling.readingImport.tabName')}>
      <form onSubmit={handleSubmit(onGenerateReadingImport)}>
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={6} sx={{ pl: 2, pr: 3 }}>
            <Grid item xs={12}>
              <MultiSelect
                name="typeCustomer"
                label={t('billing.batchBilling.readingImport.typeCustomerFormLabel')}
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
                label={t('billing.batchBilling.readingImport.cycleCodeFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <Select
                name="routeCode"
                label={t('billing.batchBilling.readingImport.routeCodeFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                options={routes}
                keyLabel="name"
                keyValue="id"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="year"
                label={t('billing.batchBilling.readingImport.yearFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
              />
            </Grid>
          </Grid>
          <Grid item xs={6} sx={{ pr: 2, pl: 3 }}>
            <Grid item xs={12}>
              <Select
                name="month"
                label={t('billing.batchBilling.readingImport.monthFormLabel')}
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
                label={t('billing.batchBilling.readingImport.serviceTypeFormLabel')}
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
                name="fromDate"
                label={t('billing.batchBilling.readingImport.fromDateFormLabel')}
                errors={errors}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                type="date"
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
              <TextField
                name="toDate"
                label={t('billing.batchBilling.readingImport.toDateFormLabel')}
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
          <Grid container justifyContent="flex-end" sx={{ pr: 2, mt: 4 }}>
            <Box sx={{ pr: 2 }}>
              <Button variant="contained" type="button" buttonType="cancel" onClick={onCancelFilterReadingImport}>
                {t('billing.batchBilling.readingImport.cancelButtonLabel')}
              </Button>
            </Box>
            <Box>
              <Button type="submit" variant="contained" buttonType="save" onClick={onGenerateFilterReadingImport} disabled={!isValidFormFilter}>
                {t('billing.batchBilling.readingImport.generateButtonLabel')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </WrapperForm>
  );
};

export default ReadingImportFormFilterComponent;
