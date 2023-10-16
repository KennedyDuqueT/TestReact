import { Button, Select, TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC, useState } from 'react';
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useTheme } from '@/context';
import { useCriticalReading } from '@/context/billing';

interface CriticalReadingDetailViewProps {
  onCancelDetailModal: () => void;
  control: Control<BillingModels.CriticalReadingInterface>;
  errors: FieldErrors<BillingModels.CriticalReadingInterface>;
  onSaveCriticalReading: SubmitHandler<BillingModels.CriticalReadingInterface>;
  handleSubmit: UseFormHandleSubmit<BillingModels.CriticalReadingInterface>;
}

const CriticalReadingDetailViewComponent: FC<CriticalReadingDetailViewProps> = ({
  onCancelDetailModal,
  onSaveCriticalReading,
  errors,
  control,
  handleSubmit,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const { status } = useCriticalReading();

  return (
    <form onSubmit={handleSubmit(onSaveCriticalReading)}>
      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={4} sx={{ pl: 2, pr: 2 }}>
          <Grid item xs={12}>
            <TextField
              name="supply"
              label={t('billing.batchBilling.criticalReading.supplyFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="period"
              label={t('billing.batchBilling.criticalReading.periodFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="lotCode"
              label={t('billing.batchBilling.criticalReading.lotCodeFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="status"
              label={t('billing.batchBilling.criticalReading.statusFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
              options={status}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ pr: 2, pl: 2 }}>
          <Grid item xs={12}>
            <TextField
              name="meterCode"
              label={t('billing.batchBilling.criticalReading.meterCodeFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="serialCode"
              label={t('billing.batchBilling.criticalReading.serialCodeFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="conceptCode"
              label={t('billing.batchBilling.criticalReading.conceptCodeFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="codeReading"
              label={t('billing.batchBilling.criticalReading.codeReadingFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ pr: 2, pl: 2 }}>
          <Grid item xs={12}>
            <TextField
              name="typeServices"
              label={t('billing.batchBilling.criticalReading.typeServicesFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="typeReading"
              label={t('billing.batchBilling.criticalReading.typeReadingFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="consumption"
              label={t('billing.batchBilling.criticalReading.consumptionFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 4, pr: 2 }}>
          <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ mt: 4, pr: 3 }}>
          <Box sx={{ mr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelDetailModal}>
              {t('billing.batchBilling.criticalReading.cancelButtonLabel')}
            </Button>
          </Box>

          <Box>
            {!isEditing && (
              <Button type="button" variant="contained" buttonType="save" onClick={() => setIsEditing(true)}>
                {t('billing.batchBilling.criticalReading.editButtonLabel')}
              </Button>
            )}
            {isEditing && (
              <Button type="submit" variant="contained" buttonType="save">
                {t('billing.batchBilling.criticalReading.saveButtonLabel')}
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
export default CriticalReadingDetailViewComponent;
