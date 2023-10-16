import { delay } from '@/mocks/helpers';
import { IndividualBillingInterface } from '@/models/billing';
import { SimpleCatalog } from '@/models/commons';
import { formatter } from '@/utils';

export const monthsIndividualBilling: SimpleCatalog[] = [
  { name: 'Enero', id: 1 },
  { name: 'Febrero', id: 2 },
  { name: 'Marzo', id: 3 },
  { name: 'Abril', id: 4 },
  { name: 'Mayo', id: 5 },
];

export const serviceTypesIndividualBilling: SimpleCatalog[] = [
  { name: 'Residencial BT', id: 1 },
  { name: 'Comercial BT', id: 2 },
  { name: 'Residencial Prepago BT', id: 3 },
  { name: 'Comercial Prepago BT', id: 4 },
  { name: 'Comercial B2B Energia MT', id: 5 },
];

export const getServiceTypesIndividualBilling = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return serviceTypesIndividualBilling;
};

export const getMonthsIndividualBilling = async (): Promise<SimpleCatalog[]> => {
  await delay(250);

  return monthsIndividualBilling;
};

export const saveIndividualBillingSimulatedAPI = async (): Promise<boolean> => {
  await delay(250);

  return true;
};

export const confirmIndividualBillingSimulatedAPI = async (): Promise<boolean> => {
  await delay(250);

  return true;
};

export const processIndividualBillingSimulatedAPI = async (): Promise<IndividualBillingInterface[]> => {
  await delay(250);
  return [
    {
      id: '23',
      status: 'Pendiente',
      supplyCode: 'Suministro API',
      customerName: 'Jhon Doe API',
      contractedPower: '',
      routeCode: 'Ruta API',
      rateDescription: 'Descripcion API',
      meterCode: 'Medidor API',
      billingDate: 'Fecha facturación API',
      currentReadingDate: formatter.formatDate(new Date()),
      currentReading: 'Lectura actual API',
      multiple: '',
      KWHBilled: '',
      rate: '',
      consumptionBilled: '',
      billedArrears: '',
      fixedCharges: '',
      powerDelivery: '',
      receivedPower: '',
      billedPower: '',
      otherConcepts: '',
      totalReceipt: '',
      KWHPowerReceived: '',
      previousReading: '',
      previousReadingDate: '',
    },
  ];
};
export const generateIndividualBillingSimulatedAPI = async (): Promise<IndividualBillingInterface[]> => {
  await delay(250);
  return [
    {
      id: '23',
      supplyCode: 'Suministro generate API',
      customerName: 'Jhon Doe generate API',
      contractedPower: 'Poder generate API',
      routeCode: 'Ruta generate API',
      rateDescription: 'Tarifa generate API',
      meterCode: 'Medidor generate API',
      billingDate: 'Fecha facturación generate API',
      currentReadingDate: formatter.formatDate(new Date()),
      currentReading: 'Lectura actual generate API',
      multiple: 'Multiplo generate API',
      KWHBilled: 'KWHB generate API',
      rate: 'Tarifa generate API',
      consumptionBilled: 'Consumo facturado generate API',
      billedArrears: 'Mora facturada generate API',
      fixedCharges: 'Cargos fijos generate API',
      powerDelivery: 'Potencia generate API',
      receivedPower: 'PPotencia recibida generate API',
      billedPower: 'potencia facturada generate API',
      otherConcepts: 'Otros conceptos generate API',
      totalReceipt: 'Total comprobante generate API',
      KWHPowerReceived: 'KWH recibidos generate API',
      previousReading: 'Lectura anterio generate API',
      previousReadingDate: 'fecha lectura anterior generate API',
      status: 'Facturación pendiente API',
    },
    {
      id: '24',
      supplyCode: 'Suministro 2 generate API',
      customerName: 'Jhon Doe 2 generate API',
      contractedPower: 'Poder 2 generate API',
      routeCode: 'Ruta 2 generate API',
      rateDescription: 'Tarifa 2 generate API',
      meterCode: 'Medidor 2 generate API',
      billingDate: 'Fecha facturación 2 generate API',
      currentReadingDate: formatter.formatDate(new Date()),
      currentReading: 'Lectura actual 2 generate API',
      multiple: 'Multiplo 2 generate API',
      KWHBilled: 'KWHB 2 generate API',
      rate: 'Tarifa 2 generate API',
      consumptionBilled: 'Consumo facturado 2 generate API',
      billedArrears: 'Mora facturada 2 generate API',
      fixedCharges: 'Cargos fijos 2 generate API',
      powerDelivery: 'Potencia 2 generate API',
      receivedPower: 'PPotencia recibida 2 generate API',
      billedPower: 'potencia facturada 2 generate API',
      otherConcepts: 'Otros conceptos 2 generate API',
      totalReceipt: 'Total comprobante 2 generate API',
      KWHPowerReceived: 'KWH recibidos 2 generate API',
      previousReading: 'Lectura anterio 2 generate API',
      previousReadingDate: 'fecha lectura anterior 2 generate API',
      status: 'Facturación pendiente API',
    },
  ];
};
