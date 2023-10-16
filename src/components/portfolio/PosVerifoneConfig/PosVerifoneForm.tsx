import { FC, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Grid } from '@mui/material';
import { ActionButtons, CommonButton, Select, TextField } from '@/components';
import { usePosProviderConfig, usePosVerifoneConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { PosProvider, PosVerifone } from '@/models/portfolio';
import { DialogActions } from '@/models/commons';

interface FormValues extends PosVerifone {}

interface Props {
  initialValues?: PosVerifone;
}

export const PosVerifoneForm: FC<Props> = ({ initialValues }) => {
  const { t } = useTranslation();
  const { items: posProviders } = usePosProviderConfig();
  const { selectedItem, actions } = usePosVerifoneConfig();
  const isUpdate = !!initialValues?.id;

  const form = useForm<FormValues>({
    defaultValues: {
      name: initialValues?.name || '',
      provider: initialValues?.provider,
      commission: 0,
    },
  });

  const {
    reset,
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = form;

  const provider = useWatch({ control, name: 'provider' });

  useEffect(() => {
    isUpdate ? reset(selectedItem) : reset();
  }, [initialValues]);

  useEffect(() => {
    if (!provider) return;

    const { commission } = posProviders.find((posProvider) => posProvider.id === provider) as PosProvider;

    setValue('commission', commission);
  }, [provider]);

  const onSubmit = (values: FormValues) => {
    if (isUpdate) {
      actions?.updateOne({ ...selectedItem, ...values });
    } else {
      actions?.createOne(values);
    }
  };

  const entityName = t('portfolio.posVerifoneConfig.entityName');

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
          name="name"
          label={t('catalog.fields.name')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <Select
          name="provider"
          label={t('portfolio.posVerifoneConfig.labels.provider')}
          errors={errors}
          rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          control={control}
          options={posProviders}
          keyLabel="name"
          keyValue="id"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField name="commission" label={t('portfolio.posVerifoneConfig.labels.commission')} errors={errors} control={control} disabled />
      </Grid>

      <Grid item xs={12}>
        <ActionButtons buttons={formButtons} containerProps={{ mt: 0 }} />
      </Grid>
    </Grid>
  );
};
