import { delay } from '@/mocks/helpers';
import { ElectronicBillStampingInterface } from '@/models/billing';

export const saveSelectedElectronicBillStamping = async (electronicBillStampingToIds: number[]): Promise<boolean> => {
  await delay(250);
  console.log(electronicBillStampingToIds, 'IDs referencia');

  return true;
};

export const searchElectronicBillStampingSimulatedAPI = async (): Promise<ElectronicBillStampingInterface[]> => {
  await delay(250);
  return [
    {
      id: 'Prueba',
      conceptDescription: 'Prueba',
      currencyId: 'Prueba',
      customerId: 'Prueba',
      cycleId: 'Prueba',
      dateIssue: 'Prueba',
      ENFC: 'Prueba',
      exchangeRate: 'Prueba',
      expirationDate: 'Prueba',
      formOfPayment: 'Prueba',
      ITBIS: 'Prueba',
      companyName: 'Prueba',
      priceUnit: 'Prueba',
      rateId: 'Prueba',
      rateType: 'Prueba',
      subtotalWithoutITBIS: 'Prueba',
      supplyId: 'Prueba',
      total: 'Prueba',
      transactionType: 'Prueba',
      typeId: 'Prueba',
      status: 'Prueba',
    },
  ];
};
