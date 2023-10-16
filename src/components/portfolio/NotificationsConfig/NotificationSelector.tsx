import { FC, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Box, Divider, Grid } from '@mui/material';
import { useNotificationConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { Button, Select, WrapperForm } from '@/components';

interface FormValues {
  serviceType: number;
  notification: number;
}

interface Props {}

export const NotificationSelector: FC<Props> = () => {
  const { t } = useTranslation();
  const { serviceTypes, notifications, actions } = useNotificationConfig();

  const form = useForm<FormValues>({
    defaultValues: {},
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSumbit = (values: FormValues) => {
    actions?.selectServiceType(Number(values.serviceType));
    actions?.selectNotification(Number(values.notification));
  };

  const serviceTypeId = useWatch({ control, name: 'serviceType' });
  const notificationId = useWatch({ control, name: 'notification' });
  const isValid = serviceTypeId > 0 && notificationId > 0;

  useEffect(() => {
    actions?.selectServiceType(0);
    actions?.selectNotification(0);
  }, [notificationId, serviceTypeId]);

  return (
    <>
      <WrapperForm title={t('portfolio.notificationConfig.notificationSelectorTitle')} variant="secondary">
        <Grid container spacing={3} mt={0.5}>
          <Grid item xs={12} md={6}>
            <Select
              id="portfolio-service-type"
              name="serviceType"
              label={t('portfolio.notificationConfig.selectServiceTypeLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={serviceTypes}
              errors={errors}
              keyValue="id"
              keyLabel="name"
              disabled={serviceTypes.length === 0}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Select
              id="portfolio-notification"
              name="notification"
              label={t('portfolio.notificationConfig.selectNotificationLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={notifications}
              errors={errors}
              keyValue="id"
              keyLabel="name"
              disabled={notifications.length === 0 || serviceTypeId < 1}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 2, mt: 3 }} />

        <Box display="flex" width={1} justifyContent="flex-end" mt={0}>
          <Box display="flex">
            <Button variant="contained" buttonType="primary" onClick={handleSubmit(onSumbit)} disabled={!isValid}>
              {t('portfolio.notificationConfig.buttons.notificationEditor')}
            </Button>
          </Box>
        </Box>
      </WrapperForm>
    </>
  );
};
