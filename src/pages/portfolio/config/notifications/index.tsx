import React, { useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import { NotificationForm, NotificationSelector } from '@/components/portfolio';
import { useNotificationConfig } from '@/context';
import { MainLayout } from '@/layouts';
import { useTranslation } from '@/hooks';

const NotificationsConfigPage = () => {
  const { t } = useTranslation();
  const { selectedNotificationId, notifications, actions } = useNotificationConfig();

  const selectedNotification = useMemo(
    () => notifications.find((notification) => notification.id === selectedNotificationId),
    [selectedNotificationId]
  );

  useEffect(() => {
    actions?.getAllNeededCatalogs();
    actions?.getAllNotifications();
  }, []);

  return (
    <MainLayout title={t('portfolio.notificationConfig.pageTitle')}>
      <Box pb={40}>
        <NotificationSelector />

        {selectedNotification && <NotificationForm title={selectedNotification?.name} notificationNumber={selectedNotification.notificationNumber} />}
      </Box>
    </MainLayout>
  );
};

export default NotificationsConfigPage;
