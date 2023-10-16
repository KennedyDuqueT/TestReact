import { SuccessIcon } from '@/assets';
import { BillingModels, CommonsModels } from '@/models';
import { ChronogramInterface } from '@/models/billing';
import { formatter } from '@/utils';
import { GridColDef } from '@mui/x-data-grid';

export const ChronogramFilterInitialValue: BillingModels.ChronogramFilterInterface = {
  serviceType: '',
  cycleCode: '',
  year: '',
  startMonth: '',
  endMonth: '',
  startReadDay: 0,
  startReadMonth: '',
  endReadDay: 0,
  endReadMonth: '',
};

export const dummyChronogram: ChronogramInterface[] = [
  {
    id: '123qwer',
    status: 'habilitado',
    lot: 'ABCDef123478',
    year: 2023,
    month: 7,
    cycleCode: 'Prueba 1',
    serviceType: 'Servicio 1',
    dateRelease: formatter.formatDate(new Date()),
    dateBreak: formatter.formatDate(new Date()),
    dateFrom: formatter.formatDate(new Date()),
    dateTo: formatter.formatDate(new Date()),
    billing: 'Interno',
    routeCode: ['Ruta 101', 'Ruta 102', 'Ruta 103'],
  },
  {
    id: '123456',
    status: 'inactivo',
    lot: 'ABCD1234',
    year: 2023,
    month: 5,
    cycleCode: 'Prueba 2',
    routeCode: ['Ruta 102'],
    serviceType: 'Servicio 2',
    dateRelease: formatter.formatDate(new Date()),
    dateBreak: formatter.formatDate(new Date()),
    dateFrom: formatter.formatDate(new Date()),
    dateTo: formatter.formatDate(new Date()),
    billing: 'Interno',
  },
];

export const ChronogramInitialValue: ChronogramInterface = {
  id: '',
  status: '',
  lot: '',
  year: '',
  month: '',
  cycleCode: '',
  routeCode: [''],
  serviceType: '',
  dateRelease: formatter.formatDate(new Date()),
  dateBreak: formatter.formatDate(new Date()),
  dateFrom: formatter.formatDate(new Date()),
  dateTo: formatter.formatDate(new Date()),
  billing: '',
};

export const getColumnsConfiguration = (t: (message: string) => string): GridColDef[] => {
  return [
    { field: 'status', headerName: t('billing.maintenance.chronogramManagement.statusTableLabel'), width: 110 },
    { field: 'year', headerName: t('billing.maintenance.chronogramManagement.yearTableLabel'), width: 110 },
    { field: 'month', headerName: t('billing.maintenance.chronogramManagement.monthTableLabel'), width: 110 },
    { field: 'cycleCode', headerName: t('billing.maintenance.chronogramManagement.cycleTableLabel'), width: 110 },
    { field: 'serviceType', headerName: t('billing.maintenance.chronogramManagement.serviceTypeTableLabel'), width: 110 },
    { field: 'dateRelease', headerName: t('billing.maintenance.chronogramManagement.dateReleaseTableLabel'), width: 110 },
    { field: 'dateBreak', headerName: t('billing.maintenance.chronogramManagement.dateBreakTableLabel'), width: 110 },
    { field: 'dateFrom', headerName: t('billing.maintenance.chronogramManagement.dateFromTableLabel'), width: 110 },
    { field: 'dateTo', headerName: t('billing.maintenance.chronogramManagement.dateToTableLabel'), width: 110 },
    { field: 'billing', headerName: t('billing.maintenance.chronogramManagement.billingTableLabel'), width: 110 },
  ];
};

export const getColumnsConfigurationDetail = (t: (message: string) => string): GridColDef[] => {
  return [
    { field: 'lot', headerName: t('billing.maintenance.chronogramManagement.lotTableLabel'), width: 110 },
    { field: 'year', headerName: t('billing.maintenance.chronogramManagement.yearTableLabel'), width: 110 },
    { field: 'month', headerName: t('billing.maintenance.chronogramManagement.monthTableLabel'), width: 110 },
    { field: 'cycleCode', headerName: t('billing.maintenance.chronogramManagement.cycleTableLabel'), width: 110 },
    { field: 'routeCode', headerName: t('billing.maintenance.chronogramManagement.routeTableLabel'), width: 110 },
    { field: 'dateRelease', headerName: t('billing.maintenance.chronogramManagement.dateReleaseTableLabel'), width: 110 },
    { field: 'dateBreak', headerName: t('billing.maintenance.chronogramManagement.dateBreakTableLabel'), width: 110 },
    { field: 'dateFrom', headerName: t('billing.maintenance.chronogramManagement.dateFromTableLabel'), width: 110 },
    { field: 'dateTo', headerName: t('billing.maintenance.chronogramManagement.dateToTableLabel'), width: 110 },
    { field: 'serviceType', headerName: t('billing.maintenance.chronogramManagement.serviceTypeTableLabel'), width: 110 },
    { field: 'billing', headerName: t('billing.maintenance.chronogramManagement.billingTableLabel'), width: 110 },
    { field: 'status', headerName: t('billing.maintenance.chronogramManagement.statusTableLabel'), width: 110 },
  ];
};

export const modalConfigurationInitialValue: CommonsModels.ModalConfiguration = {
  buttonText: '',
  icon: SuccessIcon,
  message: '',
  modalTitle: '',
};

export const serviceTypes = [
  { label: 'Prepago', value: '1' },
  { label: 'Pospago', value: '2' },
];
export const status = [
  { label: 'habilitado', value: '1' },
  { label: 'deshabilitado', value: '2' },
];

export const months = [
  { label: 'Enero', value: '1' },
  { label: 'Febrero', value: '2' },
  { label: 'Marzo', value: '3' },
  { label: 'Abril', value: '4' },
  { label: 'Mayo', value: '5' },
  { label: 'Junio', value: '6' },
];
