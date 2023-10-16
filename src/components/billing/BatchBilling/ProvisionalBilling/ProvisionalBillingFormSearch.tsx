import { Button, MultiSelect, Select, TextField, WrapperForm } from '@/components/ui';
import { useTranslation } from '@/hooks';
import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { Control, FieldErrors, UseFormReturn } from 'react-hook-form';
import { BillingModels } from '@/models';
import { useTheme } from '@/context';
import { useProvisionalBilling } from '@/context/billing';

interface ProvisionalBillingFormSearchProps {
  control: Control<BillingModels.ProvisionalBillingSearchInterface>;
  errors: FieldErrors<BillingModels.ProvisionalBillingSearchInterface>;
  onSearchProvisionalBilling: (provisionalBillingFormSearch: BillingModels.ProvisionalBillingSearchInterface) => void;
  onCancelFormSearch: () => void;
  isValidFormSearch: boolean;
  formSearch: UseFormReturn<BillingModels.ProvisionalBillingSearchInterface>;
}

const ProvisionalBillingFormSearchComponent: FC<ProvisionalBillingFormSearchProps> = ({
  errors,
  control,
  onSearchProvisionalBilling,
  onCancelFormSearch,
  isValidFormSearch,
  formSearch,
}) => {
  const { t } = useTranslation();
  const { months, typesCustomer } = useProvisionalBilling();
  const theme = useTheme();
  return (
    <WrapperForm variant="secondary" title={t('billing.batchBilling.provisionalBilling.provisionalBillingTitleFormLabel')}>
      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={6} sx={{ pl: 2, pr: 3 }}>
          <Grid item xs={12}>
            <MultiSelect
              name="typeCustomer"
              label={t('billing.batchBilling.provisionalBilling.typeCustomerFormLabel')}
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
              label={t('billing.batchBilling.provisionalBilling.cycleCodeFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="month"
              label={t('billing.batchBilling.provisionalBilling.monthFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              options={months}
              keyLabel="name"
              keyValue="id"
            />
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ pr: 2, pl: 3 }}>
          <Grid item xs={12}>
            <TextField
              name="year"
              label={t('billing.batchBilling.provisionalBilling.yearFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <TextField
              name="lot"
              label={t('billing.batchBilling.provisionalBilling.lotFormLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 4, pr: 2 }}>
          <Box sx={{ borderBottom: `1px solid ${theme.currentTheme.palette.common.wrapperFormHLineBgSecondary}` }}></Box>
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ pr: 2, mt: 4 }}>
          <Box sx={{ pr: 2 }}>
            <Button variant="contained" type="button" buttonType="cancel" onClick={onCancelFormSearch}>
              {t('billing.batchBilling.provisionalBilling.cancelButtonLabel')}
            </Button>
          </Box>
          <Box>
            <Button
              type="button"
              variant="contained"
              buttonType="save"
              disabled={!isValidFormSearch}
              onClick={() => onSearchProvisionalBilling(formSearch.getValues())}
            >
              {t('billing.batchBilling.provisionalBilling.searchButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </WrapperForm>
  );
};

export default ProvisionalBillingFormSearchComponent;
