import { delay } from '@/mocks/helpers';
import { GenerateBillingArchiveInterface } from '@/models/billing';
import { formatter } from '@/utils';

export const saveSelectedGenerateBillingArchive = async (generateBillingArchiveToIds: number[]): Promise<boolean> => {
  await delay(250);
  console.log(generateBillingArchiveToIds, 'IDs referencia');

  return true;
};

export const generateBillingArchiveSimulatedAPI = async (): Promise<GenerateBillingArchiveInterface> => {
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
    KWHPowerReceived: 'KWH recibidos API',
    previousReading: 'Lectura anterio API',
    previousReadingDate: 'fecha lectura anterior API',
  };
};
