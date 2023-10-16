import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Select, TextField, Button } from '@/components';
import { useForm } from 'react-hook-form';
import { serviceTypes, status } from './ChronogramManagement.constants';
import { useTheme } from '@/context';

interface ChronogramEditViewProps {
  onCancelEditChronogram: () => void;
  chronogramInfoToEdit: BillingModels.ChronogramInterface;
}

const ChronogramEditViewComponent: FC<ChronogramEditViewProps> = ({ onCancelEditChronogram, chronogramInfoToEdit }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const form = useForm<BillingModels.ChronogramInterface>({
    defaultValues: chronogramInfoToEdit,
  });
  const {
    control,
    formState: { errors, isValid },
  } = form;

  return (
    <>
      <form>
        <Grid container mt={1}>
          <Grid item xs={2} sx={{ mt: 2 }}>
            <Select
              name="status"
              label={t('billing.maintenance.chronogramManagement.statusTableLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              options={status}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Grid item xs={4} sx={{ pt: 2, pb: 2 }}>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  name="lot"
                  label={t('billing.maintenance.chronogramManagement.lotTableLabel')}
                  errors={errors}
                  rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                  control={control}
                />
              </Grid>
              <Grid item xs={6} sx={{ mt: 2, pr: 2 }}>
                <TextField
                  name="year"
                  label={t('billing.maintenance.chronogramManagement.yearTableLabel')}
                  errors={errors}
                  rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                  control={control}
                />
              </Grid>
              <Grid item xs={6} sx={{ mt: 2, pl: 2 }}>
                <TextField
                  name="month"
                  label={t('billing.maintenance.chronogramManagement.monthTableLabel')}
                  errors={errors}
                  rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                  control={control}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  name="cycleCode"
                  label={t('billing.maintenance.chronogramManagement.cycleTableLabel')}
                  errors={errors}
                  rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                  control={control}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} sx={{ pl: 4, pt: 2, pb: 2 }}>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  name="dateRelease"
                  label={t('billing.maintenance.chronogramManagement.dateReleaseTableLabel')}
                  errors={errors}
                  rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                  control={control}
                  type="date"
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  name="dateBreak"
                  label={t('billing.maintenance.chronogramManagement.dateBreakTableLabel')}
                  errors={errors}
                  rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                  control={control}
                  type="date"
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  name="dateFrom"
                  label={t('billing.maintenance.chronogramManagement.dateFromTableLabel')}
                  errors={errors}
                  rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                  control={control}
                  type="date"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} sx={{ pl: 4, pt: 2, pb: 2 }}>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  name="dateTo"
                  label={t('billing.maintenance.chronogramManagement.dateToTableLabel')}
                  errors={errors}
                  rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                  control={control}
                  type="date"
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Select
                  name="serviceType"
                  label={t('billing.maintenance.chronogramManagement.serviceTypeTableLabel')}
                  rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                  errors={errors}
                  control={control}
                  options={serviceTypes}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  name="billing"
                  label={t('billing.maintenance.chronogramManagement.billingTableLabel')}
                  errors={errors}
                  rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                  control={control}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Grid container justifyContent="flex-end" sx={{ p: 2 }}>
            <Box sx={{ pr: 2 }}>
              <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelEditChronogram}>
                {t('billing.maintenance.chronogramManagement.cancelButtonLabel')}
              </Button>
            </Box>
            <Box>
              <Button type="button" variant="contained" buttonType="save" disabled={!isValid}>
                {t('billing.maintenance.chronogramManagement.saveButtonLabel')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ChronogramEditViewComponent;
