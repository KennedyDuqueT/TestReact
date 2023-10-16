import { ServiceType, SendingChannel, Notification, NotificationDynamicVar, Periodicity } from '@/models/portfolio';

export interface State {
  isLoading: boolean;
  selectedNotificationId: number;
  selectedServiceTypeId: number;
  notificationSelected: Notification;
  notifications: Notification[];
  serviceTypes: ServiceType[];
  sendingChannels: SendingChannel[];
  periodicityOptions: Periodicity[];
  dynamicVars: NotificationDynamicVar[];
}

export interface Actions {
  getAllNotifications: () => void;
  getAllDynamicVars: (id: number) => void;
  getAllNeededCatalogs: () => void;
  getPeriodicityByNotification: (id: number) => void;
  selectNotification: (id: number) => void;
  selectServiceType: (id: number) => void;
  saveNotification: (notification: Partial<Notification>) => void;
  clean: () => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
