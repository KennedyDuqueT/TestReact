import { Catalog } from '@/models/commons';
import { CashRegister } from '@/models/portfolio';
import { delay } from '../helpers';

let cashRegisterList: CashRegister[] = [
  {
    id: 1,
    name: 'Caja 01',
    currency: 1,
    type: 1,
    closingType: 1,
    closingDate: new Date(),
    account: 1,
    bank: 1,
    status: 1,
  },
  {
    id: 2,
    name: 'Caja 02',
    currency: 2,
    type: 2,
    closingType: 2,
    closingDate: new Date(),
    account: 2,
    bank: 2,
    status: 2,
  },
  {
    id: 3,
    name: 'Caja 03',
    currency: 3,
    type: 3,
    closingType: 2,
    closingDate: new Date(),
    account: 3,
    bank: 3,
    status: 3,
  },
  {
    id: 4,
    name: 'Caja 04',
    currency: 1,
    type: 2,
    closingType: 1,
    closingDate: new Date(),
    account: 2,
    bank: 4,
    status: 4,
  },
];

const cashRegisterTypeList: Catalog[] = [
  {
    id: 1,
    name: 'Caja tercerizada',
  },
  {
    id: 2,
    name: 'Caja fisíca',
  },
  {
    id: 3,
    name: 'Caja virtual',
  },
];

const cashRegisterClosingTypeList: Catalog[] = [
  {
    id: 1,
    name: 'Autómatico',
  },
  {
    id: 2,
    name: 'Manual',
  },
];

const currencyList: Catalog[] = [
  {
    id: 1,
    name: 'USD',
  },
  {
    id: 2,
    name: 'DOP',
  },
  {
    id: 3,
    name: 'EUR',
  },
];

const posList: Catalog[] = [
  {
    id: 1,
    name: 'Verifone 1',
  },
  {
    id: 2,
    name: 'Verifone 2',
  },
  {
    id: 3,
    name: 'Verifone 3',
  },
];

const accountList: Catalog[] = [
  {
    id: 1,
    name: '1234 5678 9112 3456',
  },
  {
    id: 2,
    name: '8267 7253 6544 9099',
  },
  {
    id: 3,
    name: '2138 9823 6673 6390',
  },
];

const statusList: Catalog[] = [
  {
    id: 1,
    name: 'Activa',
  },
  {
    id: 2,
    name: 'Deshabilitada',
  },
  {
    id: 3,
    name: 'En proceso de cierre',
  },
  {
    id: 4,
    name: 'Bloqueada',
  },
];

export const getCashRegisterList = async (): Promise<CashRegister[]> => {
  await delay(500);

  return cashRegisterList;
};

export const createCashRegister = async (newCashRegister: CashRegister): Promise<boolean> => {
  const { length } = cashRegisterList;
  const id = length > 0 ? cashRegisterList[length - 1].id + 1 : 1;

  cashRegisterList = [...cashRegisterList, { ...newCashRegister, id }];

  return true;
};

export const updateCashRegister = async (updatedCashRegister: CashRegister): Promise<boolean> => {
  cashRegisterList = cashRegisterList.map((status) => (status.id === updatedCashRegister.id ? updatedCashRegister : status));

  return true;
};

export const deleteCashRegister = async (cashRegisterId: number): Promise<boolean> => {
  cashRegisterList = cashRegisterList.filter((status) => status.id !== cashRegisterId);

  return true;
};

export const getCurrencyList = async (): Promise<Catalog[]> => {
  await delay(50);

  return currencyList;
};

export const getCashRegisterTypeList = async (): Promise<Catalog[]> => {
  await delay(50);

  return cashRegisterTypeList;
};

export const getCashRegisterClosingTypeList = async (): Promise<Catalog[]> => {
  await delay(50);

  return cashRegisterClosingTypeList;
};

export const getPosList = async (): Promise<Catalog[]> => {
  await delay(50);

  return posList;
};

export const getAccountList = async (): Promise<Catalog[]> => {
  await delay(50);

  return accountList;
};

export const getStatusList = async (): Promise<Catalog[]> => {
  await delay(50);

  return statusList;
};
