import { useContext } from 'react';
import { NotificationConfigContext } from './notificationConfig.context';

export const useNotificationConfig = () => useContext(NotificationConfigContext);
