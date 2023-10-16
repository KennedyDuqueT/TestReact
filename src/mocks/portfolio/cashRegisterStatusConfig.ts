import { CashRegisterStatus } from '@/models/portfolio';
import { delay } from '../helpers';

let cashRegisterStatusList: CashRegisterStatus[] = [
  {
    id: 1,
    name: 'Abierta',
    description: 'La caja ha sido abierta',
  },
  {
    id: 2,
    name: 'Cerrada',
    description: 'La caja fue cerrada',
  },
  {
    id: 3,
    name: 'Bloqueada',
    description: 'La caja fue bloqueada por alguna situación anormal',
  },
  {
    id: 4,
    name: 'Revisada',
    description: '',
  },
];

export const getCashRegisterStatusList = async (): Promise<CashRegisterStatus[]> => {
  await delay(500);

  return cashRegisterStatusList;
};

export const createCashRegisterStatus = async (newCashRegisterStatus: CashRegisterStatus): Promise<boolean> => {
  const { length } = cashRegisterStatusList;
  const id = length > 0 ? cashRegisterStatusList[length - 1].id + 1 : 1;

  cashRegisterStatusList = [...cashRegisterStatusList, { ...newCashRegisterStatus, id }];

  return true;
};

export const updateCashRegisterStatus = async (updatedCashRegisterStatus: CashRegisterStatus): Promise<boolean> => {
  cashRegisterStatusList = cashRegisterStatusList.map((status) => (status.id === updatedCashRegisterStatus.id ? updatedCashRegisterStatus : status));

  return true;
};

export const deleteCashRegisterStatus = async (cashRegisterStatusId: number): Promise<boolean> => {
  cashRegisterStatusList = cashRegisterStatusList.filter((status) => status.id !== cashRegisterStatusId);

  return true;
};
