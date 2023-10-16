import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { ActionButtons, CommonButton, TextField } from '@/components';
import { useHomologatedTableConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { HomologatedTableDevice, HomologatedTableDeviceFormValues } from '@/models/portfolio';
import { DialogActions } from '@/models/commons';

interface FormValues extends HomologatedTableDevice {}

interface Props {
  initialValues?: HomologatedTableDeviceFormValues;
}

export const HomologatedTableDeviceForm: FC<Props> = ({ initialValues }) => {
  const { t } = useTranslation();
  const { selectedItem, actions } = useHomologatedTableConfig();
  const isUpdate = !!initialValues?.id;

  const form = useForm<FormValues>({
    defaultValues: {
      name: initialValues?.name || '',
      nominalPower: initialValues?.nominalPower || 0,
      useHours: initialValues?.useHours || 0,
      useDays: initialValues?.useDays || 0,
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

  const entityName = t('portfolio.homologatedTableDevicesConfig.entityName');

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
        <TextField
          name="nominalPower"
          label={t('portfolio.homologatedTableDevicesConfig.labels.nominalPower')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          name="useHours"
          label={t('portfolio.homologatedTableDevicesConfig.labels.useHours')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          name="useDays"
          label={t('portfolio.homologatedTableDevicesConfig.labels.useDays')}
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
