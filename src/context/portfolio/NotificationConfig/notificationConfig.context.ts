import { Context, createContext } from 'react';
import { Action } from '@/utils';
import { Notification } from '@/models/portfolio';
import { State, ContextType } from './notificationConfig.types';
import { Types } from './notificationConfig.constants';

export const initialState: State = {
  isLoading: false,
  selectedNotificationId: 0,
  selectedServiceTypeId: 0,
  notificationSelected: {} as Notification,
  notifications: [],
  serviceTypes: [],
  sendingChannels: [],
  periodicityOptions: [],
  dynamicVars: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case Types.SET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    case Types.SET_SERVICE_TYPES:
      return { ...state, serviceTypes: action.payload };
    case Types.SET_SENDING_CHANNELS:
      return { ...state, sendingChannels: action.payload };
    case Types.SET_PERIODICITY_OPTIONS:
      return { ...state, periodicityOptions: action.payload };
    case Types.SET_DYNAMIC_VARS:
      return { ...state, dynamicVars: action.payload };
    case Types.SET_SELECTED_NOTIFICATION:
      return {
        ...state,
        selectedNotificationId: action.payload,
        notificationSelected: state.notifications.find((notification) => notification.id === action.payload) || ({} as Notification),
      };
    case Types.SET_SELECTED_SERVICE_TYPE:
      return { ...state, selectedServiceTypeId: action.payload };
    case Types.SET_INITIAL_STATE:
      return { ...state, isLoading: false, selectedNotificationId: 0, selectedServiceTypeId: 0, periodicityOptions: [], dynamicVars: [] };
    default:
      return state;
  }
};

export const NotificationConfigContext: Context<ContextType> = createContext(initialState);
