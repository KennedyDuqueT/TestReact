import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { ActionButtons, CommonButton, NumberField, TextField } from '@/components';
import { usePaymentDealTypeConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { PaymentDealType } from '@/models/portfolio';
import { DialogActions } from '@/models/commons';

interface FormValues extends PaymentDealType {}

interface Props {
  initialValues?: PaymentDealType;
}

export const PaymentDealTypeForm: FC<Props> = ({ initialValues }) => {
  const { t } = useTranslation();
  const { selectedItem, actions } = usePaymentDealTypeConfig();
  const isUpdate = !!initialValues?.id;

  const form = useForm<FormValues>({
    defaultValues: {
      code: initialValues?.code || '',
      name: initialValues?.name || '',
      interestPercent: initialValues?.interestPercent || 0,
      penaltyPercent: initialValues?.penaltyPercent || 0,
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

  const entityName = t('portfolio.paymentDealTypeConfig.entityName');

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
          name="code"
          label={t('catalog.fields.code')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
          }}
        />
      </Grid>

      <Grid item xs={12}>
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
        <NumberField
          name="interestPercent"
          label={t('portfolio.paymentDealTypeConfig.labels.interestPercent')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <NumberField
          name="penaltyPercent"
          label={t('portfolio.paymentDealTypeConfig.labels.penaltyPercent')}
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
