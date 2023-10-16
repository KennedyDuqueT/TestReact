import { delay } from '@/mocks/helpers';
import { ProvisionalBillingInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';
import { formatter } from '@/utils';

export const monthsProvisionalBilling: SimpleCatalog[] = [
  { name: 'Enero', id: 1 },
  { name: 'Febrero', id: 2 },
  { name: 'Marzo', id: 3 },
  { name: 'Abril', id: 4 },
  { name: 'Mayo', id: 5 },
];

export const typesCustomerProvisionalBilling: SimpleCatalog[] = [
  { name: 'Residencial BT', id: 1 },
  { name: 'Comercial BT', id: 2 },
  { name: 'Residencial Prepago BT', id: 3 },
  { name: 'Comercial Prepago BT', id: 4 },
  { name: 'Comercial B2B Energia MT', id: 5 },
];

export const getTypesCustomerProvisionalBilling = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return typesCustomerProvisionalBilling;
};

export const getMonthsProvisionalBilling = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return monthsProvisionalBilling;
};

export const saveSelectedProvisionalBilling = async (provisionalBillingToIds: number[]): Promise<boolean> => {
  await delay(250);
  console.log(provisionalBillingToIds, 'IDs referencia');

  return true;
};

export const searchProvisionalBillingSimulatedAPI = async (): Promise<ProvisionalBillingInterface> => {
  await delay(250);
  return {
    id: '23',
    supply: 'Suministro API',
    customerName: 'Jhon Doe API',
    contractedPower: 'Poder API',
    routeCode: 'Ruta API',
    rateDescription: 'Tarifa API',
    meterCode: 'Medidor API',
    billingDate: 'Fecha facturación API',
    currentReadingDate: formatter.formatDate(new Date()),
    currentReading: 'Lectura actual API',
    multiple: 'Multiplo API',
    KWHBilled: 'KWHB API',
    rate: 'Tarifa API',
    consumptionBilled: 'Consumo facturado API',
    billedArrears: 'Mora facturada API',
    fixedCharges: 'Cargos fijos API',
    powerDelivery: 'Potencia API',
    receivedPower: 'PPotencia recibida API',
    billedPower: 'potencia facturada API',
    otherConcepts: 'Otros conceptos API',
    totalReceipt: 'Total comprobante API',
    consumptionVariation: 'Consumo API',
    daysToBilled: 'Dias facturados API',
    KWHPowerReceived: 'KWH recibidos API',
    previousReading: 'Lectura anterio API',
    previousReadingDate: 'fecha lectura anterior API',
  };
};
