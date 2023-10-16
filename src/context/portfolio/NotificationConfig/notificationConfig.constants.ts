import { ServiceType, SendingChannel, Notification, NotificationDynamicVar, Periodicity } from '@/models/portfolio';
import { createAction } from '@/utils';

export enum Types {
  SET_LOADING = 'notificationConfig/setLoading',
  SET_NOTIFICATIONS = 'notificationConfig/setNotifications',
  SET_SERVICE_TYPES = 'notificationConfig/setServiceTypes',
  SET_SENDING_CHANNELS = 'notificationConfig/setSendingChannels',
  SET_PERIODICITY_OPTIONS = 'notificationConfig/setPeriodicityOptions',
  SET_DYNAMIC_VARS = 'notificationConfig/setDynamicVars',
  SET_SELECTED_NOTIFICATION = 'notificationConfig/setSelectedNotification',
  SET_SELECTED_SERVICE_TYPE = 'notificationConfig/setSelectedServiceType',
  SET_INITIAL_STATE = 'notificationConfig/resetState',
}

export const reducerActions = {
  setLoading: createAction<Types, boolean>(Types.SET_LOADING),
  setNotifications: createAction<Types, Notification[]>(Types.SET_NOTIFICATIONS),
  setServiceTypes: createAction<Types, ServiceType[]>(Types.SET_SERVICE_TYPES),
  setSendingChannels: createAction<Types, SendingChannel[]>(Types.SET_SENDING_CHANNELS),
  setPeriodicityOptions: createAction<Types, Periodicity[]>(Types.SET_PERIODICITY_OPTIONS),
  setDynamicVars: createAction<Types, NotificationDynamicVar[]>(Types.SET_DYNAMIC_VARS),
  setSelectedNotification: createAction<Types, number>(Types.SET_SELECTED_NOTIFICATION),
  setSelectedServiceType: createAction<Types, number>(Types.SET_SELECTED_SERVICE_TYPE),
  setInitialState: createAction<Types, number>(Types.SET_INITIAL_STATE),
};
