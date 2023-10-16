import { PosProvider } from '@/models/portfolio';
import { delay } from '../helpers';

let posProviderList: PosProvider[] = [
  {
    id: 1,
    name: 'Azul',
    code: '',
    description: '',
    commission: 5,
  },
  {
    id: 2,
    name: 'Carnet',
    code: '',
    description: '',
    commission: 3.5,
  },
];

export const getPosProviderList = async (): Promise<PosProvider[]> => {
  await delay(500);

  return posProviderList;
};

export const createPosProvider = async (newPosProvider: PosProvider): Promise<boolean> => {
  const { length } = posProviderList;
  const id = length > 0 ? posProviderList[length - 1].id + 1 : 1;

  posProviderList = [...posProviderList, { ...newPosProvider, id }];

  return true;
};

export const updatePosProvider = async (updatedPosProvider: PosProvider): Promise<boolean> => {
  posProviderList = posProviderList.map((status) => (status.id === updatedPosProvider.id ? updatedPosProvider : status));

  return true;
};

export const deletePosProvider = async (posProviderId: number): Promise<boolean> => {
  posProviderList = posProviderList.filter((status) => status.id !== posProviderId);

  return true;
};
