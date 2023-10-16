import { LoadElecDevicesTableInterface, SubFarmCostTableInterface } from '@/models/customer-experience';
import { delay } from '../helpers';

const elecDevicesData: LoadElecDevicesTableInterface[] = [
  {
    id: 'ID 000001',
    equipmentId: 'ID 000001',
    typeElectrical: 'Tipo A',
    nominalPower: '10.000.00',
    amountEquipment: '10',
    kwhPeriod: '100.000.00',
    estimatedKwh: '100.000.00',
  },
];

const subFarmCostData: SubFarmCostTableInterface[] = [
  {
    id: '010',
    costId: '010',
    costBail: '$5.000.00',
    interconnectionCost: '$5.000.00',
    costSubfarmInter: '10.000.00',
  },
];

export const getElecDevicesData = async (): Promise<LoadElecDevicesTableInterface[]> => {
  await delay(500);

  return elecDevicesData;
};

export const getSubFarmCostsData = async (): Promise<SubFarmCostTableInterface[]> => {
  await delay(500);

  return subFarmCostData;
};
