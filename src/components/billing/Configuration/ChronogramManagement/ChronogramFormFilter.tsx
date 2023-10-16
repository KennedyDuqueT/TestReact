import { Button, Select, TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid, Typography } from '@mui/material';
import { months, serviceTypes } from './ChronogramManagement.constants';
import { FC, LegacyRef } from 'react';
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useTheme } from '@/context';

interface ChronogramFormFilterProps {
  onFilterChronogram: SubmitHandler<BillingModels.ChronogramFilterInterface>;
  control: Control<BillingModels.ChronogramFilterInterface, any>;
  errors: FieldErrors<BillingModels.ChronogramFilterInterface>;
  handleSubmit: UseFormHandleSubmit<BillingModels.ChronogramFilterInterface>;
  formRef?: LegacyRef<HTMLFormElement>;
}

const ChronogramFormFilterComponent: FC<ChronogramFormFilterProps> = ({ control, errors, handleSubmit, onFilterChronogram, formRef }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <form ref={formRef} id="filterFormChronogram" onSubmit={handleSubmit(onFilterChronogram)}>
      <Grid container sx={{ p: 2 }}>
        <Grid item xs={8}>
          <Typography
            variant="h4"
            component="label"
            sx={{ fontSize: '21px', color: theme.currentTheme.palette.common.wrapperFormTitleSecondary, fontWeight: '700' }}
          >
            {t('billing.maintenance.chronogramManagement.tabName')}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end">
            <Button type="button" variant="contained" buttonType="export">
              {t('billing.maintenance.chronogramManagement.exportButtonLabel')}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
        </Grid>
        <Grid item xs={6} sx={{ pl: 4, pt: 2, pb: 2, pr: 2 }}>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="serviceType"
              label={t('billing.maintenance.chronogramManagement.serviceTypeTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={serviceTypes}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="cycleCode"
              label={t('billing.maintenance.chronogramManagement.cycleTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="year"
              label={t('billing.maintenance.chronogramManagement.yearTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="startMonth"
              label={t('billing.maintenance.chronogramManagement.startMonthTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={months}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="endMonth"
              label={t('billing.maintenance.chronogramManagement.endMonthTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={months}
              errors={errors}
            />
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ pr: 4, pt: 2, pb: 2, pl: 2 }}>
          <Grid item xs={12} sx={{ ml: 2, mt: 4 }}>
            <TextField
              name="startReadDay"
              label={t('billing.maintenance.chronogramManagement.startReadDayTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sx={{ ml: 2, mt: 4 }}>
            <Select
              name="startReadMonth"
              label={t('billing.maintenance.chronogramManagement.startReadMonthTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={months}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} sx={{ ml: 2, mt: 4 }}>
            <TextField
              name="endReadDay"
              label={t('billing.maintenance.chronogramManagement.endReadDayTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sx={{ ml: 2, mt: 4 }}>
            <Select
              name="endReadMonth"
              label={t('billing.maintenance.chronogramManagement.endReadMonthTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={months}
              errors={errors}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default ChronogramFormFilterComponent;
