import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { ActionButtons, CommonButton, Select, TextField } from '@/components';
import { useCashRegisterConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { CashRegister } from '@/models/portfolio';
import { DialogActions } from '@/models/commons';

interface FormValues extends CashRegister {}

interface Props {
  initialValues?: CashRegister;
}

export const CashRegisterForm: FC<Props> = ({ initialValues }) => {
  const { t } = useTranslation();
  const { selectedItem, catalogs, actions } = useCashRegisterConfig();
  const isUpdate = !!initialValues?.id;

  const form = useForm<FormValues>({
    defaultValues: {
      name: initialValues?.name || '',
      currency: initialValues?.currency || 0,
      type: initialValues?.type || 0,
      closingType: initialValues?.closingType || 0,
      closingDate: initialValues?.closingDate,
      account: initialValues?.account || 0,
      bank: initialValues?.bank || 0,
      status: initialValues?.status || 0,
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

  const entityName = t('portfolio.cashRegisterConfig.entityName');

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
      <Grid item xs={6}>
        <TextField
          name="name"
          label={t('catalog.fields.name')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <Select
          name="currency"
          label={t('portfolio.cashRegisterConfig.labels.currency')}
          errors={errors}
          rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          control={control}
          options={catalogs.currencies}
          keyLabel="name"
          keyValue="id"
        />
      </Grid>

      <Grid item xs={6}>
        <Select
          name="type"
          label={t('portfolio.cashRegisterConfig.labels.type')}
          errors={errors}
          rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          control={control}
          options={catalogs.types}
          keyLabel="name"
          keyValue="id"
        />
      </Grid>

      <Grid item xs={6}>
        <Select
          name="closingType"
          label={t('portfolio.cashRegisterConfig.labels.closingType')}
          errors={errors}
          rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          control={control}
          options={catalogs.closingTypes}
          keyLabel="name"
          keyValue="id"
        />
      </Grid>

      <Grid item xs={6}>
        <Select
          name="account"
          label={t('portfolio.cashRegisterConfig.labels.account')}
          errors={errors}
          rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          control={control}
          options={catalogs.accounts}
          keyLabel="name"
          keyValue="id"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          name="closingDate"
          label={t('portfolio.cashRegisterConfig.labels.closingDate')}
          errors={errors}
          rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          control={control}
          type="date"
        />
      </Grid>

      <Grid item xs={6}>
        <Select
          name="bank"
          label={t('portfolio.cashRegisterConfig.labels.bank')}
          errors={errors}
          rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          control={control}
          options={catalogs.banks}
          keyLabel="name"
          keyValue="id"
        />
      </Grid>

      <Grid item xs={6}>
        <Select
          name="status"
          label={t('portfolio.cashRegisterConfig.labels.status')}
          errors={errors}
          rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          control={control}
          options={catalogs.status}
          keyLabel="name"
          keyValue="id"
        />
      </Grid>

      <Grid item xs={12}>
        <ActionButtons buttons={formButtons} containerProps={{ mt: 0 }} />
      </Grid>
    </Grid>
  );
};
