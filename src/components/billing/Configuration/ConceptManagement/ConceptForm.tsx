import { Button, Checkbox, Select, TextField, WrapperForm } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC, useEffect } from 'react';
import { Control, FieldErrors, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { BillingModels } from '@/models';
import { conceptArrears, externalModesBilling } from './ConceptManagement.constants';
import { useTheme } from '@/context';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useConceptManagement, useDataMastersManagement } from '@/context/billing';

interface ConceptFormProps {
  setValue: UseFormSetValue<BillingModels.ConceptInterface>;
  control: Control<BillingModels.ConceptInterface>;
  errors: FieldErrors<BillingModels.ConceptInterface>;
  watch: UseFormWatch<BillingModels.ConceptInterface>;
  onOpenCalculationParametersModal: () => void;
}
const ConceptFormComponent: FC<ConceptFormProps> = ({
  control,
  errors,
  watch,
  onOpenCalculationParametersModal,
  setValue,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { chargeType, natureConcept, taxConcept, unitsMeasure, calculationMethod } = useConceptManagement();
  const { serviceTypes } = useDataMastersManagement();
  const affectsTaxInformation = watch('affectsTaxInformation', false);
  const lateFee = watch('lateFee', false);
  const externalBillingMode = watch('externalBillingMode', false);

  useEffect(() => {
    const externalBillingMode = watch('externalBillingMode');
    if (externalBillingMode) {
      setValue('internalBillingMode', !externalBillingMode);
    } else{
      setValue('billingModeId', '');
    }
  }, [watch('externalBillingMode')]);

  useEffect(() => {
    const internalBillingMode = watch('internalBillingMode');
    setValue('externalBillingMode', !internalBillingMode);
  }, [watch('internalBillingMode')]);

  return (
    <WrapperForm variant="secondary" title={t('billing.maintenance.conceptManagement.tabName')}>
      <Grid container sx={{ mt: 3 }}>
        <Grid item xs={6} sx={{ pr: 3 }}>
          <Grid>
            <TextField
              name="code"
              label={t('billing.maintenance.conceptManagement.codeTableLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              errors={errors}
              control={control}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <TextField
              name="description"
              label={t('billing.maintenance.conceptManagement.descriptionTableLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              errors={errors}
              control={control}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Checkbox
              name="affectsTaxInformation"
              label={t('billing.maintenance.conceptManagement.affectsTaxInformationTableLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              errors={errors}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Select
              name="natureConceptId"
              label={t('billing.maintenance.conceptManagement.natureTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={natureConcept}
              errors={errors}
              keyLabel="name"
              keyValue="id"
              disabled={!affectsTaxInformation}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Checkbox
              name="lateFee"
              label={t('billing.maintenance.conceptManagement.appliesArrearsTableLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              errors={errors}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Select
              name="lateFeeConceptId"
              label={t('billing.maintenance.conceptManagement.conceptArrearsTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={conceptArrears}
              errors={errors}
              disabled={!lateFee}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Select
              name="taxConceptId"
              label={t('billing.maintenance.conceptManagement.taxTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={taxConcept}
              errors={errors}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ pl: 3 }}>
          <Grid>
            <Select
              name="measureTypeId"
              label={t('billing.maintenance.conceptManagement.unitsMeasureTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={unitsMeasure}
              errors={errors}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Select
              name="serviceTypeId"
              label={t('billing.maintenance.conceptManagement.serviceTypeTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={serviceTypes}
              errors={errors}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
          <Grid sx={{ mt: 4.7 }}>
            <Select
              name="calculationMethodId"
              label={t('billing.maintenance.conceptManagement.calculationMethodTableLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              errors={errors}
              control={control}
              options={calculationMethod}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Checkbox
              name="internalBillingMode"
              label={t('billing.maintenance.conceptManagement.internalBillingModeTableLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              errors={errors}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
       
              
            />
            <Checkbox
              name="externalBillingMode"
              label={t('billing.maintenance.conceptManagement.externalBillingModeTableLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              errors={errors}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Select
              name="billingModeId"
              label={t('billing.maintenance.conceptManagement.externalBillingModeTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={externalModesBilling}
              errors={errors}
              disabled={!externalBillingMode}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Select
              name="chargeTypeId"
              label={t('billing.maintenance.conceptManagement.typeRateTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={chargeType}
              errors={errors}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ p: 2 }}>
          <Box sx={{ pr: 2 }}>
            <Button type="button" variant="contained" buttonType="save" onClick={onOpenCalculationParametersModal}>
              {t('billing.maintenance.conceptManagement.calculationParametersButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </WrapperForm>
  );
};

export default ConceptFormComponent;
