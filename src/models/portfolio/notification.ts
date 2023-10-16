import { Catalog } from '../commons';

export interface Notification {
  id?: number;
  name: string;
  description: string;
  notificationNumber: number;
  message: string;
  serviceTypeId: number;
  sendingTypeId: number;
  sendingChannelId: number;
  days: number;
  periodicityId: number;
}

export interface NotificationDynamicVar {
  id?: number;
  name: string;
  value: string;
}

export interface ServiceType extends Catalog {}
export interface SendingType extends Catalog {}
export interface SendingChannel extends Catalog {}
export interface Periodicity extends Catalog {}
