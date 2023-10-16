import { Bank } from '@/models/portfolio';
import { delay } from '../helpers';

let bankList: Bank[] = [
  {
    id: 1,
    name: 'BanReservas',
    description:
      'Banco líder del sistema financiero y dinamizador del desarrollo social para los diferentes sectores productivos en beneficio de los dominicanos.',
  },
  {
    id: 2,
    name: 'Banco BHD',
    description: 'Banco Múltiple BHD',
  },
  {
    id: 3,
    name: 'Banco Popular',
    description: 'Banco popular dominicano',
  },
  {
    id: 4,
    name: 'Scotiabank',
    description: 'Scotiabank República Dominicana, un banco global en Canadá y las Américas.',
  },
  {
    id: 5,
    name: 'Citi',
    description: 'Citibank es la división de consumo de la empresa multinacional de servicios financieros Citigroup',
  },
];

export const getBankList = async (): Promise<Bank[]> => {
  await delay(500);

  return bankList;
};

export const createBank = async (newBank: Bank): Promise<boolean> => {
  const { length } = bankList;
  const id = length > 0 ? bankList[length - 1].id + 1 : 1;

  bankList = [...bankList, { ...newBank, id }];

  return true;
};

export const updateBank = async (updatedBank: Bank): Promise<boolean> => {
  bankList = bankList.map((status) => (status.id === updatedBank.id ? updatedBank : status));

  return true;
};

export const deleteBank = async (bankId: number): Promise<boolean> => {
  bankList = bankList.filter((status) => status.id !== bankId);

  return true;
};
