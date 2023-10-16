import { ServiceType, SendingChannel, Notification, NotificationDynamicVar, Periodicity } from '@/models/portfolio';
import { delay } from '../helpers';

const notifications: Notification[] = [
  {
    id: 1,
    notificationNumber: 1,
    name: 'Aviso #1 - Factura disponible para pagos',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 1,
  },
  {
    id: 2,
    notificationNumber: 2,
    name: 'Aviso #2 - Recordar factura disponible para pago',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 2,
  },
  {
    id: 3,
    notificationNumber: 3,
    name: 'Aviso #3 - Recordar factura disponible para pago',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 2,
  },
  {
    id: 4,
    notificationNumber: 4,
    name: 'Aviso #4 - Recordar factura disponible para pago',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 2,
  },
  {
    id: 5,
    notificationNumber: 5,
    name: 'Aviso #5 - Factura prox. Vencimiento-corte',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 2,
  },
  {
    id: 6,
    notificationNumber: 6,
    name: 'Aviso #6 - Notificar corte-suspensión del suministro',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 5,
  },

  {
    id: 7,
    notificationNumber: 7,
    name: 'Aviso #7 - Notificar Importe total vencido',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 3,
  },
  {
    id: 8,
    notificationNumber: 8,
    name: 'Aviso #8 - Notificar Importe total vencido y corriente',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 3,
  },
  {
    id: 13,
    notificationNumber: 13,
    name: 'Aviso #8-1 - Notificar Importe total vencido y corriente (Prepago)',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 3,
  },
  {
    id: 9,
    notificationNumber: 9,
    name: 'Aviso #9 - Notificar Importe total vencido y corriente',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 3,
  },
  {
    id: 10,
    notificationNumber: 10,
    name: 'Aviso #10 - Notificar suministro cancelado por morosidad',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 6,
  },
  {
    id: 11,
    notificationNumber: 11,
    name: 'Aviso #11 - Notificar Transferencia de deuda',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 7,
  },
  {
    id: 12,
    notificationNumber: 12,
    name: 'Aviso #12 - Notificar Importe total vencido PASA A LEGAL',
    description: '',
    message: '',
    serviceTypeId: 0,
    sendingTypeId: 0,
    sendingChannelId: 0,
    days: 0,
    periodicityId: 2,
  },
];

const serviceTypes: ServiceType[] = [
  { id: 1, name: 'Instantaneo', description: 'Al momento de facturar' },
  { id: 2, name: 'Pre vencimiento', description: 'Antes del vencimiento de la factura' },
  { id: 3, name: 'Pos vencimiento', description: 'Después del vencimiento de la factura' },
];

const sendingChannels: SendingChannel[] = [
  { id: 1, name: 'Correo' },
  { id: 2, name: 'SMS' },
  { id: 3, name: 'Ambos' },
];

const periodicityOptions: Periodicity[] = [
  { id: 1, description: 'Al momento de generar la factura', name: 'Generación de Factura' },
  { id: 2, description: 'Semanal', name: 'Semanal' },
  { id: 3, description: 'Cada 10 días', name: 'Decenal' },
  { id: 4, description: 'Cada 5 días', name: 'Semana laboral' },
  { id: 5, description: 'Al momento de generar el proceso de eliminación del servicio', name: 'Eliminación del Servicio' },
  { id: 6, description: 'Al momento de generar el proceso de retiro por morosidad', name: 'Retiro por morosidad' },
  { id: 7, description: 'Al momento de generar el procesos de transferencia de deuda', name: 'Transferencia de deuda' },
];

const dynamicVars: NotificationDynamicVar[] = [
  { id: 1, name: 'Nombre cliente', value: '{{clientName}}' },
  { id: 2, name: '# de Suministro', value: '{{supplyNumber}}' },
  { id: 3, name: 'Dirección cliente', value: '{{clientAddress}}' },
  { id: 4, name: 'Fecha de vencimiento', value: '{{expirationDate}}' },
  { id: 5, name: 'Importe vencido', value: '{{debtAmount}}' },
];

export const getNotificationList = async (): Promise<Notification[]> => {
  await delay(1000);

  return notifications;
};

export const getDynamicVarList = async (): Promise<NotificationDynamicVar[]> => {
  await delay(500);

  return dynamicVars;
};

export const getServiceTypeList = async (): Promise<ServiceType[]> => {
  await delay(500);

  return serviceTypes;
};

export const getSendingChannelList = async (): Promise<SendingChannel[]> => {
  await delay(500);

  return sendingChannels;
};

export const getPeriodicityList = async (): Promise<Periodicity[]> => {
  await delay(500);

  return periodicityOptions;
};
