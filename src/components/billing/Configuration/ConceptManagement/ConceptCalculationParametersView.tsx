import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Button, NumberField, Select, TextField } from '@/components';
import { Control, FieldErrors } from 'react-hook-form';
import { currency, referenceValues, types, valuesReal } from './ConceptManagement.constants';
import { useTheme } from '@/context';
import { useConceptManagement, useDataMastersManagement } from '@/context/billing';

interface ConceptCalculationParametersViewProps {
  onCancel: () => void;
  control: Control<BillingModels.ConceptCalculationParametersInterface>;
  errors: FieldErrors<BillingModels.ConceptCalculationParametersInterface>;
}

const ConceptCalculationParametersViewComponent: FC<ConceptCalculationParametersViewProps> = ({ onCancel, control, errors }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { frequencies } = useDataMastersManagement();
  const { calculationType } = useConceptManagement();

  return (
    <>
      <Grid container>
        <Grid item xs={4} sx={{ mt: 3, mb: 3, pr: 4 }}>
          <Grid>
            <TextField
              name="conceptCode"
              label={t('billing.maintenance.conceptManagement.conceptCodeTableLabel')}
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
            <Select
              name="currency"
              label={t('billing.maintenance.conceptManagement.currencyTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={currency}
              errors={errors}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <NumberField
              name="calculationOrder"
              label={t('billing.maintenance.conceptManagement.calculationOrderTableLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              errors={errors}
              control={control}
            />
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ mt: 3, mb: 3, pr: 2, pl: 2 }}>
          <Grid>
            <NumberField
              name="printOrder"
              label={t('billing.maintenance.conceptManagement.printOrderTableLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              errors={errors}
              control={control}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Select
              name="type"
              label={t('billing.maintenance.conceptManagement.typeTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={types}
              errors={errors}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Select
              name="frequency"
              label={t('billing.maintenance.conceptManagement.frequencyTableLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              errors={errors}
              control={control}
              options={frequencies}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <TextField
              name="valueLimit"
              label={t('billing.maintenance.conceptManagement.valueLimitTableLabel')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              errors={errors}
              control={control}
            />
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ mt: 3, mb: 3, pl: 4 }}>
          <Grid>
            <Select
              name="realValue"
              label={t('billing.maintenance.conceptManagement.valueRealTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={valuesReal}
              errors={errors}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Select
              name="referenceValue"
              label={t('billing.maintenance.conceptManagement.referenceValueTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={referenceValues}
              errors={errors}
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Select
              name="calculationTypeId"
              label={t('billing.maintenance.conceptManagement.calculationTypeTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={calculationType}
              errors={errors}
              keyLabel='name'
              keyValue='id'
            />
          </Grid>
          <Grid sx={{ mt: 4 }}>
            <Box>
              <Button type="button" variant="contained" buttonType="save" width="100%">
                {t('billing.maintenance.conceptManagement.formulaButtonLabel')}
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ p: 2 }}>
          <Box sx={{ pr: 2 }}>
            <Button type="button" variant="contained" buttonType="cancel" onClick={onCancel}>
              {t('billing.maintenance.conceptManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box>
            <Button type="button" variant="contained" buttonType="save">
              {t('billing.maintenance.conceptManagement.saveButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ConceptCalculationParametersViewComponent;
