import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { ActionButtons, CommonButton, TextField, NumberField } from '@/components';
import { useCurrencyExchangeRateConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { CurrencyExchangeRate } from '@/models/portfolio';
import { DialogActions } from '@/models/commons';

interface FormValues extends CurrencyExchangeRate {}

interface Props {
  initialValues?: CurrencyExchangeRate;
}

export const CurrencyExchangeRateForm: FC<Props> = ({ initialValues }) => {
  const { t } = useTranslation();
  const { selectedItem, actions } = useCurrencyExchangeRateConfig();
  const isUpdate = !!initialValues?.id;

  const form = useForm<FormValues>({
    defaultValues: {
      company: initialValues?.company || '',
      baseCurrency: initialValues?.baseCurrency || '',
      rateCurrency: initialValues?.rateCurrency || '',
      rate: initialValues?.rate || 0,
    },
  });

  const {
    reset,
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  useEffect(() => {
    isUpdate ? reset(selectedItem) : reset();
  }, [initialValues]);

  const onSubmit = (values: FormValues) => {
    if (isUpdate) {
      actions?.updateOne({ ...selectedItem, ...values });
    } else {
      actions?.createOne(values);
    }
  };

  const entityName = t('portfolio.currencyExchangeRateConfig.entityName');

  const formButtons: CommonButton[] = [
    {
      label: t('components.button.cancel'),
      type: 'cancel',
      onClick: () => actions?.toggleDialogAction(isUpdate ? DialogActions.UPDATE : DialogActions.CREATE),
    },
    {
      label: t(`catalog.actions.${isUpdate ? 'update' : 'create'}`, { entityName }),
      type: 'primary',
      onClick: handleSubmit(onSubmit),
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          name="company"
          label={t('portfolio.currencyExchangeRateConfig.labels.company')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="baseCurrency"
          label={t('portfolio.currencyExchangeRateConfig.labels.baseCurrency')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="rateCurrency"
          label={t('portfolio.currencyExchangeRateConfig.labels.rateCurrency')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <NumberField
          name="rate"
          label={t('portfolio.currencyExchangeRateConfig.labels.rate')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <ActionButtons buttons={formButtons} containerProps={{ mt: 0 }} />
      </Grid>
    </Grid>
  );
};
