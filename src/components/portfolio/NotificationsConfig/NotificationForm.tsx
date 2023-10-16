import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Divider, Grid } from '@mui/material';
import { Notification } from '@/models/portfolio';
import { Button, NumberField, Select, TextField, WrapperForm } from '@/components';
import { useTranslation } from '@/hooks';
import { useNotificationConfig } from '@/context';
import { NotificationMessageField } from './NotificationMessageField';
import { getDefaultValueForId, notificationsWithDaysOption } from './helpers';

interface Props {
  title: string;
  notificationNumber: number;
}

type FormValues = Partial<Notification>;

export const NotificationForm: FC<Props> = ({ notificationNumber, title }) => {
  const { t } = useTranslation();
  const { sendingChannels, periodicityOptions, notificationSelected, actions } = useNotificationConfig();

  const form = useForm<FormValues>({
    defaultValues: {
      sendingChannelId: getDefaultValueForId(notificationSelected.sendingChannelId),
      description: notificationSelected.description,
      message: notificationSelected.message,
      days: notificationSelected.days,
      periodicityId: getDefaultValueForId(notificationSelected.periodicityId),
    },
  });

  const {
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = form;

  const handleUpdateMessage = (newValue: string) => {
    setValue('message', newValue);
  };

  const onSubmit = (values: FormValues) => {
    actions?.saveNotification(values);
  };

  return (
    <Box mt={4}>
      <WrapperForm
        title={t('portfolio.notificationConfig.notificationEditorTitle', { notificationNumber: title.replaceAll('#', '').replaceAll(' -', '') })}
        variant="secondary"
      >
        <Grid container spacing={3} mt={0.5}>
          <Grid item xs={12} sm={6} md={4}>
            <Select
              id="notification-config-sending-channel"
              name="sendingChannelId"
              label={t('portfolio.notificationConfig.selectChannelLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={sendingChannels}
              errors={errors}
              keyValue="id"
              keyLabel="name"
              disabled={sendingChannels.length === 0}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Select
              id="notification-config-periodicity"
              name="periodicityId"
              label={t('portfolio.notificationConfig.selectPeriodicityLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={periodicityOptions}
              errors={errors}
              keyValue="id"
              keyLabel="description"
              disabled={periodicityOptions.length === 0}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              name="description"
              label={t('portfolio.notificationConfig.description')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              errors={errors}
            />
          </Grid>

          {notificationsWithDaysOption.includes(notificationNumber) && (
            <Grid item xs={12} md={4}>
              <NumberField
                name="days"
                label={t('portfolio.notificationConfig.days')}
                rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
                control={control}
                errors={errors}
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <NotificationMessageField control={control} errors={errors} onChange={handleUpdateMessage} />
          </Grid>
        </Grid>

        <Divider sx={{ my: 2, mt: 3 }} />

        <Box display="flex" width={1} justifyContent="flex-end" mt={2}>
          <Box display="flex">
            <Button variant="contained" buttonType="cancel" onClick={actions?.clean}>
              {t('components.button.cancel')}
            </Button>

            <Box sx={{ mr: 2 }} />

            <Button variant="contained" buttonType="primary" onClick={handleSubmit(onSubmit)}>
              {t('portfolio.notificationConfig.buttons.notificationEditor')}
            </Button>
          </Box>
        </Box>
      </WrapperForm>
    </Box>
  );
};
