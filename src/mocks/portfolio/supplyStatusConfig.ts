import { SupplyStatus, LotStatusValues as LotStatus } from '@/models/portfolio';
import { delay } from '../helpers';

let supplyStatusList: SupplyStatus[] = [
  {
    id: 1,
    name: 'Suspendido',
    code: LotStatus.SUSPENDED,
    description: 'El suministro se retira cuando el cliente no cumple con su adeudo',
  },
  {
    id: 2,
    name: 'Desconectado',
    code: LotStatus.DISCONNECTED,
    description: '',
  },
  {
    id: 3,
    name: 'Enviado a legal',
    code: LotStatus.SEND_TO_LEGAL,
    description: 'La deuda de un suministro se transfiere autómaticamente a otro suminstro sin deuda',
  },
  {
    id: 4,
    name: 'Castigo Cartera',
    code: LotStatus.PENALIZED,
    description: '',
  },
];

export const getSupplyStatusList = async (): Promise<SupplyStatus[]> => {
  await delay(500);

  return supplyStatusList;
};

export const createSupplyStatus = async (newSupplyStatus: SupplyStatus): Promise<boolean> => {
  const { length } = supplyStatusList;
  const id = length > 0 ? supplyStatusList[length - 1].id + 1 : 1;

  supplyStatusList = [...supplyStatusList, { ...newSupplyStatus, id }];

  return true;
};

export const updateSupplyStatus = async (updatedSupplyStatus: SupplyStatus): Promise<boolean> => {
  supplyStatusList = supplyStatusList.map((status) => (status.id === updatedSupplyStatus.id ? updatedSupplyStatus : status));

  return true;
};

export const deleteSupplyStatus = async (supplyStatusId: number): Promise<boolean> => {
  supplyStatusList = supplyStatusList.filter((status) => status.id !== supplyStatusId);

  return true;
};
