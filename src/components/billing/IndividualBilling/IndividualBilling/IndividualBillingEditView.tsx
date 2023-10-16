import { Button, TextField } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC, useState } from 'react';
import { Control, FieldErrors, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useTheme } from '@/context';

interface IndividualBillingDetailViewProps {
  onCancelModalEdit: () => void;
  control: Control<BillingModels.IndividualBillingInterface>;
  errors: FieldErrors<BillingModels.IndividualBillingInterface>;
  onSaveIndividualBilling: SubmitHandler<BillingModels.IndividualBillingInterface>;
  handleSubmit: UseFormHandleSubmit<BillingModels.IndividualBillingInterface>;
}

const IndividualBillingEditViewComponent: FC<IndividualBillingDetailViewProps> = ({
  onCancelModalEdit,
  onSaveIndividualBilling,
  errors,
  control,
  handleSubmit,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSaveIndividualBilling)}>
      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={3} sx={{ pl: 2, pr: 2 }}>
          <Grid item xs={12}>
            <TextField
              name="customerName"
              label={t('billing.individualBilling.individualBilling.customerNameTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="supplyCode"
              label={t('billing.individualBilling.individualBilling.supplyCodeFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="contractedPower"
              label={t('billing.individualBilling.individualBilling.contractedPowerTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="routeCode"
              label={t('billing.individualBilling.individualBilling.routeCodeTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="rateDescription"
              label={t('billing.individualBilling.individualBilling.rateDescriptionTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="billedPower"
              label={t('billing.individualBilling.individualBilling.billedPowerTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
        </Grid>
        <Grid item xs={3} sx={{ pr: 2, pl: 2 }}>
          <Grid item xs={12}>
            <TextField
              name="meterCode"
              label={t('billing.individualBilling.individualBilling.meterCodeTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="billingDate"
              label={t('billing.individualBilling.individualBilling.billingDateTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="currentReadingDate"
              label={t('billing.individualBilling.individualBilling.currentReadingDateTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="currentReading"
              label={t('billing.individualBilling.individualBilling.currentReadingTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="previousReadingDate"
              label={t('billing.individualBilling.individualBilling.previousReadingDateTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="otherConcepts"
              label={t('billing.individualBilling.individualBilling.otherConceptsTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
        </Grid>
        <Grid item xs={3} sx={{ pr: 2, pl: 2 }}>
          <Grid item xs={12}>
            <TextField
              name="previousReading"
              label={t('billing.individualBilling.individualBilling.previousReadingTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="multiple"
              label={t('billing.individualBilling.individualBilling.multipleTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="KWHBilled"
              label={t('billing.individualBilling.individualBilling.KWHBilledTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="KWHPowerReceived"
              label={t('billing.individualBilling.individualBilling.KWHPowerReceivedTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="rate"
              label={t('billing.individualBilling.individualBilling.rateTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="consumptionBilled"
              label={t('billing.individualBilling.individualBilling.consumptionBilledTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
        </Grid>
        <Grid item xs={3} sx={{ pr: 2, pl: 2 }}>
          <Grid item xs={12}>
            <TextField
              name="billedArrears"
              label={t('billing.individualBilling.individualBilling.billedArrearsTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="fixedCharges"
              label={t('billing.individualBilling.individualBilling.fixedChargesTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="powerDelivery"
              label={t('billing.individualBilling.individualBilling.powerDeliveryTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="receivedPower"
              label={t('billing.individualBilling.individualBilling.receivedPowerTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="totalReceipt"
              label={t('billing.individualBilling.individualBilling.totalReceiptTableLabel')}
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
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancelModalEdit}>
              {t('billing.individualBilling.individualBilling.cancelButtonLabel')}
            </Button>
          </Box>

          <Box>
            {!isEditing && (
              <Button type="button" variant="contained" buttonType="save" onClick={() => setIsEditing(true)}>
                {t('billing.individualBilling.individualBilling.editButtonLabel')}
              </Button>
            )}
            {isEditing && (
              <Button type="submit" variant="contained" buttonType="primary">
                {t('billing.individualBilling.individualBilling.saveButtonLabel')}
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
export default IndividualBillingEditViewComponent;
