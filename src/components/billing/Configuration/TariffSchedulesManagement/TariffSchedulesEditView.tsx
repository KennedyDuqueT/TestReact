import { Button, Select, TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC, useState } from 'react';
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useTheme } from '@/context';
import { useTariffSchedulesManagement } from '@/context/billing';

interface TariffSchedulesEditViewProps {
  onCancel: () => void;
  control: Control<BillingModels.TariffSchedulesInterface>;
  errors: FieldErrors<BillingModels.TariffSchedulesInterface>;
  onSaveTariffSchedules: SubmitHandler<BillingModels.TariffSchedulesInterface>;
  handleSubmit: UseFormHandleSubmit<BillingModels.TariffSchedulesInterface>;
}

const TariffSchedulesEditViewComponent: FC<TariffSchedulesEditViewProps> = ({ onCancel, onSaveTariffSchedules, errors, control, handleSubmit }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const { calculationTypes, codesConcept, currencies, rates, realValues, referenceValues, serviceTypes, status, typesRate } =
    useTariffSchedulesManagement();

  return (
    <form onSubmit={handleSubmit(onSaveTariffSchedules)}>
      <Grid container sx={{ mt: 3 }}>
        <Grid item xs={4} sx={{ pl: 2, pr: 3 }}>
          <Grid item xs={12}>
            <TextField
              name="code"
              label={t('billing.maintenance.tariffSchedulesManagement.codeFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="createDate"
              label={t('billing.maintenance.tariffSchedulesManagement.createDateTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="serviceType"
              label={t('billing.maintenance.tariffSchedulesManagement.serviceTypeFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              options={serviceTypes}
              disabled={!isEditing}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="currency"
              label={t('billing.maintenance.tariffSchedulesManagement.currencyFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              options={currencies}
              disabled={!isEditing}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ pl: 2, pr: 3 }}>
          <Grid item xs={12}>
            <Select
              name="rate"
              label={t('billing.maintenance.tariffSchedulesManagement.rateTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              options={rates}
              disabled={!isEditing}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="codeConcept"
              label={t('billing.maintenance.tariffSchedulesManagement.codeConceptFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
              options={codesConcept}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="conceptDescription"
              label={t('billing.maintenance.tariffSchedulesManagement.conceptDescriptionFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="realValue"
              label={t('billing.maintenance.tariffSchedulesManagement.realValueFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
              keyLabel="name"
              keyValue="id"
              options={realValues}
            />
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ pl: 2, pr: 3 }}>
          <Grid item xs={12}>
            <Select
              name="referenceValue"
              label={t('billing.maintenance.tariffSchedulesManagement.referenceValueFormLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              options={referenceValues}
              errors={errors}
              disabled={!isEditing}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="calculationType"
              label={t('billing.maintenance.tariffSchedulesManagement.calculationTypeFormLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              options={calculationTypes}
              errors={errors}
              disabled={!isEditing}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="typeRate"
              label={t('billing.maintenance.tariffSchedulesManagement.typeRateFormLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              options={typesRate}
              errors={errors}
              disabled={!isEditing}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="status"
              label={t('billing.maintenance.tariffSchedulesManagement.statusFormLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              options={status}
              errors={errors}
              disabled={!isEditing}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 4, pr: 3, pl: 2 }}>
          <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ mt: 4, pr: 3 }}>
          <Box sx={{ mr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancel}>
              {t('billing.maintenance.tariffSchedulesManagement.cancelButtonLabel')}
            </Button>
          </Box>

          <Box>
            {!isEditing && (
              <Button type="button" variant="contained" buttonType="save" onClick={() => setIsEditing(true)}>
                {t('billing.maintenance.tariffSchedulesManagement.editButtonLabel')}
              </Button>
            )}
            {isEditing && (
              <Button type="submit" variant="contained" buttonType="save">
                {t('billing.maintenance.tariffSchedulesManagement.saveButtonLabel')}
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default TariffSchedulesEditViewComponent;
