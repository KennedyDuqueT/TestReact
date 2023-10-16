import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Button, Select, TextField } from '@/components';
import { useForm } from 'react-hook-form';
import { ParameterCausesAverageFormInitialValue, ParameterFCBillingPeriodFormInitialValue } from './ParametersFormManagement.constants';
import { useTheme } from '@/context';
import { ParametersConfigTypeEnum } from './ParametersConfigEnum';
import { useDataMastersManagement } from '@/context/billing';

interface ParametersAverageBillingViewProps {
  onCancelModalForm: () => void;
  onSaveParameter: (parameter: ParametersConfigTypeEnum, dataForm: any) => void;
}

const CausesAverageBillingViewComponent: FC<ParametersAverageBillingViewProps> = ({ onCancelModalForm, onSaveParameter }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { serviceTypes } = useDataMastersManagement();
  const form = useForm<BillingModels.ParameterCausesAverageBillingInterface>({
    defaultValues: ParameterCausesAverageFormInitialValue,
  });
  const {
    control,
    formState: { errors, isValid },
  } = form;
  return (
    <form>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            name="code"
            label={t('billing.maintenance.parameterManagement.codeFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            name="description"
            label={t('billing.maintenance.parameterManagement.descriptionFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Select
            name="serviceTypeId"
            label={t('billing.maintenance.parameterManagement.serviceTypeFormLabel')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            errors={errors}
            options={serviceTypes}
            keyLabel="name"
            keyValue="id"
          />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Box sx={{ pr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelModalForm}>
              {t('billing.maintenance.parameterManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box>
            <Button
              type="button"
              variant="contained"
              buttonType="save"
              disabled={!isValid}
              onClick={() => onSaveParameter(ParametersConfigTypeEnum.CausesAverageBilling, form.getValues())}
            >
              {t('billing.maintenance.parameterManagement.saveButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const FCBillingPeriodViewComponent: FC<ParametersAverageBillingViewProps> = ({ onCancelModalForm, onSaveParameter }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { serviceTypes, frequencies } = useDataMastersManagement();
  const form = useForm<BillingModels.ParameterFCBillingPeriodInterface>({
    defaultValues: ParameterFCBillingPeriodFormInitialValue,
  });
  const {
    control,
    formState: { errors, isValid },
  } = form;
  return (
    <form>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            name="code"
            label={t('billing.maintenance.parameterManagement.codeFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Select
            name="frequencyId"
            label={t('billing.maintenance.parameterManagement.frequencyFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            options={frequencies}
            keyLabel="name"
            keyValue="id"
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            name="period"
            label={t('billing.maintenance.parameterManagement.periodFormLabel')}
            errors={errors}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Select
            name="serviceTypeId"
            label={t('billing.maintenance.parameterManagement.serviceTypeFormLabel')}
            rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            control={control}
            errors={errors}
            options={serviceTypes}
            keyLabel="name"
            keyValue="id"
          />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
            <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
          </Grid>
          <Box sx={{ pr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelModalForm}>
              {t('billing.maintenance.parameterManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box>
            <Button
              type="button"
              variant="contained"
              buttonType="save"
              disabled={!isValid}
              onClick={() => onSaveParameter(ParametersConfigTypeEnum.FCBillingPeriod, form.getValues())}
            >
              {t('billing.maintenance.parameterManagement.saveButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export { CausesAverageBillingViewComponent, FCBillingPeriodViewComponent };
