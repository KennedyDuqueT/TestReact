import { delay } from '@/mocks/helpers';
import { CriticalReadingInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';
import { formatter } from '@/utils';

export const serviceTypesCriticalReading: SimpleCatalog[] = [
  { name: 'Servicio 1', id: 1 },
  { name: 'Servicio 2', id: 2 },
];

export const monthsCriticalReading: SimpleCatalog[] = [
  { name: 'Enero', id: 1 },
  { name: 'Febrero', id: 2 },
  { name: 'Marzo', id: 3 },
  { name: 'Abril', id: 4 },
  { name: 'Mayo', id: 5 },
];

export const statusCriticalReading: SimpleCatalog[] = [
  { name: 'Pendiente de Lectura.', id: 1 },
  { name: 'Lectura completada.', id: 2 },
];

export const typesCustomerCriticalReading: SimpleCatalog[] = [
  { name: 'Residencial BT', id: 1 },
  { name: 'Comercial BT', id: 2 },
  { name: 'Residencial Prepago BT', id: 3 },
  { name: 'Comercial Prepago BT', id: 4 },
  { name: 'Comercial B2B Energia MT', id: 5 },
];

export const routesCriticalReading: SimpleCatalog[] = [
  { name: 'Ruta lectura 1', id: 1 },
  { name: 'Ruta lectura 2', id: 2 },
];

export const getServiceTypesCriticalReading = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return serviceTypesCriticalReading;
};

export const getTypesCustomerCriticalReading = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return typesCustomerCriticalReading;
};

export const getMonthsCriticalReading = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return monthsCriticalReading;
};

export const getStatusCriticalReading = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return statusCriticalReading;
};

export const getRoutesCriticalReading = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return routesCriticalReading;
};

export const saveCriticalReadingSimulatedAPI = async (): Promise<boolean> => {
  await delay(250);

  return true;
};
export const saveSelectedCriticalReading = async (criticalReadingToIds: number[]): Promise<boolean> => {
  await delay(250);
  console.log(criticalReadingToIds, 'IDs referencia');
  return true;
};

export const searchCriticalReadingSimulatedAPI = async (): Promise<CriticalReadingInterface> => {
  await delay(250);
  return {
    id: '1',
    status: 'Generado',
    cycleCode: '0001 API',
    supply: formatter.formatDate(new Date()),
    downloadDate: formatter.formatDate(new Date()),
    meterCode: '00001 Meter API',
    quantityReadings: '1/3 lecturas API',
    routeCode: 'Ruta API',
    typeCustomer: [1, 2],
    codeReading: 'Lectura API',
    conceptCode: 'Concepto API',
    consumption: 'Consumo API',
    lotCode: 'Lote API',
    period: 'Periodo API',
    serialCode: 'Serial N° API',
    typeReading: 'Automatica API',
    typeServices: 'Postpago API',
  };
};
