import { Company } from '@/models/commons';
import { Invoice, OrderType, Reason, SupplyForOperation } from '@/models/portfolio';
import { delay } from '../helpers';

const companies: Company[] = [
  {
    id: 1,
    name: 'Tech Brothers',
  },
  {
    id: 2,
    name: 'CEB',
  },
  {
    id: 3,
    name: 'INTERENERGIA',
  },
];

const orderTypes: OrderType[] = [
  {
    id: 1,
    name: 'Suspensión',
  },
  {
    id: 2,
    name: 'Verificación',
  },
  {
    id: 3,
    name: 'Retiro',
  },
];

const reasons: Reason[] = [
  {
    id: 1,
    name: 'Retiro Interno',
  },
  {
    id: 2,
    name: 'Anomalía',
  },
  {
    id: 3,
    name: 'Morosidad',
  },
  {
    id: 4,
    name: 'Cliente no localizado',
  },
];

const invoiceList: Invoice[] = [
  {
    id: 1,
    invoiceNumber: '0000000001',
    date: new Date().toLocaleString(),
    expirationDate: new Date().toLocaleString(),
    amount: 1000,
    pendingAmount: 50,
  },
  {
    id: 2,
    invoiceNumber: '0000000002',
    date: new Date().toLocaleString(),
    expirationDate: new Date().toLocaleString(),
    amount: 450,
    pendingAmount: 150,
  },
  {
    id: 3,
    invoiceNumber: '0000000003',
    date: new Date().toLocaleString(),
    expirationDate: new Date().toLocaleString(),
    amount: 6999,
    pendingAmount: 500.5,
  },
  {
    id: 4,
    invoiceNumber: '0000000004',
    date: new Date().toLocaleString(),
    expirationDate: new Date().toLocaleString(),
    amount: 2500,
    pendingAmount: 0,
  },
  {
    id: 5,
    invoiceNumber: '0000000005',
    date: new Date().toLocaleString(),
    expirationDate: new Date().toLocaleString(),
    amount: 32689.87,
    pendingAmount: 4580,
  },
];

export const getSupplyInvoices = async (supplyId: number): Promise<Invoice[]> => {
  console.log('[TODO]: Implement get action with supplyId', supplyId);

  await delay(500);

  return invoiceList;
};

export const getCompanyList = async (): Promise<Company[]> => {
  await delay(250);

  return companies;
};

export const getOrderTypeList = async (): Promise<OrderType[]> => {
  await delay(250);

  return orderTypes;
};

export const getReasonList = async (): Promise<Reason[]> => {
  await delay(250);

  return reasons;
};

export const searchSupplyBySupplyNumber = async (supplyNumber: string): Promise<SupplyForOperation | false> => {
  if (supplyNumber !== '123456789') return false;

  await delay(250);

  return {
    id: 1,
    contractNumber: 'AB12UIH2023-762',
    contractType: 'Contrato Prepago',
    meterNumber: 'B102030',
    serviceType: 'Servicio 2',
  };
};
