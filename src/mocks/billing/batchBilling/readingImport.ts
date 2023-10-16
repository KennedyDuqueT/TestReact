import { delay } from '@/mocks/helpers';
import { ReadingImportInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';
import { formatter } from '@/utils';

export const serviceTypesReadingImport: SimpleCatalog[] = [
  { name: 'Servicio 1', id: 1 },
  { name: 'Servicio 2', id: 2 },
];

export const months: SimpleCatalog[] = [
  { name: 'Enero', id: 1 },
  { name: 'Febrero', id: 2 },
  { name: 'Marzo', id: 3 },
  { name: 'Abril', id: 4 },
  { name: 'Mayo', id: 5 },
];

export const typesCustomer: SimpleCatalog[] = [
  { name: 'Residencial BT', id: 1 },
  { name: 'Comercial BT', id: 2 },
  { name: 'Residencial Prepago BT', id: 3 },
  { name: 'Comercial Prepago BT', id: 4 },
  { name: 'Comercial B2B Energia MT', id: 5 },
];

export const routes: SimpleCatalog[] = [
  { name: 'Ruta lectura 1', id: 1 },
  { name: 'Ruta lectura 2', id: 2 },
];

export const getServiceTypesReadingImport = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return serviceTypesReadingImport;
};

export const getTypesCustomer = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return typesCustomer;
};

export const getMonths = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return months;
};

export const getRoutes = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return routes;
};

export const saveReadingImportAutomaticSimulatedAPI = async (): Promise<boolean> => {
  await delay(250);

  return true;
};

export const saveReadingImportManualSimulatedAPI = async (): Promise<boolean> => {
  await delay(250);

  return true;
};

export const searchReadingImportSimulatedAPI = async (): Promise<ReadingImportInterface> => {
  await delay(250);
  return {
    id: '1',
    status: 'Generado',
    orderCode: '0001 API',
    supply: formatter.formatDate(new Date()),
    company: 'Tech Brothers',
    customerName: 'Jhon Doe',
    action: 'Servicio API',
    routeCode: 'Ruta API',
    meterCode: '1 API',
    reading: 'Automatica API',
  };
};
