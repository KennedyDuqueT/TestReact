import { SimpleCatalog } from '@/models/commons';
import { delay } from '../../helpers';
import { TariffSchedulesInterface } from '@/models/billing';
import { formatter } from '@/utils';

export const serviceTypesTariffSchedules: SimpleCatalog[] = [
  { name: 'Servicio 1 cuadros tarifarios', id: 1 },
  { name: 'Servicio 2 cuadros tarifarios', id: 2 },
];

export const currencies: SimpleCatalog[] = [
  { name: 'USD', id: 1 },
  { name: 'DOT', id: 2 },
];

export const rates: SimpleCatalog[] = [
  { name: 'Tarifa 1', id: 1 },
  { name: 'Tarifa 2', id: 2 },
];

export const codesConcept: SimpleCatalog[] = [
  { name: 'Codigo concepto 1', id: 1 },
  { name: 'Codigo concepto 2', id: 2 },
];

export const realValues: SimpleCatalog[] = [
  { name: 'Valor real 1', id: 1 },
  { name: 'Valor real 2', id: 2 },
];

export const referenceValues: SimpleCatalog[] = [
  { name: 'Valor referencia 1', id: 1 },
  { name: 'Valor referencia 2', id: 2 },
];

export const typesRate: SimpleCatalog[] = [
  { name: 'Tipo de cargos 1', id: 1 },
  { name: 'Tipo de cargos 2', id: 2 },
];

export const calculationType: SimpleCatalog[] = [
  { name: 'Tipo de calculo 1', id: 1 },
  { name: 'Tipo de calculo 2', id: 2 },
];

export const status: SimpleCatalog[] = [
  { name: 'Generado', id: 1 },
  { name: 'Revisado', id: 2 },
  { name: 'Aprobado', id: 3 },
];

export const getServiceTypesTariffSchedules = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return serviceTypesTariffSchedules;
};

export const getCurrencies = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return currencies;
};

export const getRates = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return rates;
};

export const getCodesConcept = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return codesConcept;
};

export const getRealValues = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return realValues;
};

export const getReferenceValues = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return referenceValues;
};

export const getTypesRate = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return typesRate;
};

export const getCalculationTypes = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return calculationType;
};

export const getStatus = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return status;
};

export const saveTariffSchedulesSimulatedAPI = async (): Promise<boolean> => {
  await delay(250);

  return true;
};

export const searchTariffSchedulesSimulatedAPI = async (): Promise<TariffSchedulesInterface> => {
  await delay(250);
  return {
    id: '123qwerAPI',
    code: '1 API',
    calculationType: '2',
    currency: '1',
    createDate: formatter.formatDate(new Date()),
    rate: '1',
    serviceType: '2',
    codeConcept: '1',
    conceptDescription: 'Concepto API 1',
    realValue: '1',
    referenceValue: '2',
    typeRate: '1',
    status: '3',
  };
};
