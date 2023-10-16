import { PosVerifone } from '@/models/portfolio';
import { delay } from '../helpers';

let posVerifoneList: PosVerifone[] = [
  {
    id: 1,
    name: 'Verifone 01',
    provider: 1,
  },
  {
    id: 2,
    name: 'Verifone 02',
    provider: 1,
  },
  {
    id: 3,
    name: 'Verifone 03',
    provider: 2,
  },
  {
    id: 4,
    name: 'Verifone 04',
    provider: 2,
  },
  {
    id: 5,
    name: 'Verifone 05',
    provider: 1,
  },
];

export const getPosVerifoneList = async (): Promise<PosVerifone[]> => {
  await delay(500);

  return posVerifoneList;
};

export const createPosVerifone = async (newPosVerifone: PosVerifone): Promise<boolean> => {
  const { length } = posVerifoneList;
  const id = length > 0 ? posVerifoneList[length - 1].id + 1 : 1;

  posVerifoneList = [...posVerifoneList, { ...newPosVerifone, id }];

  return true;
};

export const updatePosVerifone = async (updatedPosVerifone: PosVerifone): Promise<boolean> => {
  posVerifoneList = posVerifoneList.map((status) => (status.id === updatedPosVerifone.id ? updatedPosVerifone : status));

  return true;
};

export const deletePosVerifone = async (posVerifoneId: number): Promise<boolean> => {
  posVerifoneList = posVerifoneList.filter((status) => status.id !== posVerifoneId);

  return true;
};
