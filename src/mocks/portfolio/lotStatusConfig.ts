import { LotStatus } from '@/models/portfolio';
import { delay } from '../helpers';

let lotStatusList: LotStatus[] = [
  {
    id: 1,
    name: 'Retiro por deuda',
    code: '',
    description: 'Lote formado por todos aquellos suministros con medidores retirados por impago',
  },
  {
    id: 2,
    name: 'Enviado a legal',
    code: 'Lote de clientes que superaron el limite de avisos de pago tardío',
    description: '',
  },
  {
    id: 3,
    name: 'Transferir deuda',
    code: '',
    description: 'Lote de aquellos suministros candidatos para transferencia',
  },
  {
    id: 4,
    name: 'Castigado',
    code: '',
    description: 'Lote con clientes castigados',
  },
];

export const getLotStatusList = async (): Promise<LotStatus[]> => {
  await delay(500);

  return lotStatusList;
};

export const createLotStatus = async (newLotStatus: LotStatus): Promise<boolean> => {
  const { length } = lotStatusList;
  const id = length > 0 ? lotStatusList[length - 1].id + 1 : 1;

  lotStatusList = [...lotStatusList, { ...newLotStatus, id }];

  return true;
};

export const updateLotStatus = async (updatedLotStatus: LotStatus): Promise<boolean> => {
  lotStatusList = lotStatusList.map((status) => (status.id === updatedLotStatus.id ? updatedLotStatus : status));

  return true;
};

export const deleteLotStatus = async (lotStatusId: number): Promise<boolean> => {
  lotStatusList = lotStatusList.filter((status) => status.id !== lotStatusId);

  return true;
};
