import { SupplyServiceType, CancelSupplyType } from '@/models/customer-experience';
import { delay } from '../helpers';

const servicesData: SupplyServiceType[] = [
  {
    id: 1,
    name: 'Service 1',
  },
  {
    id: 2,
    name: 'Service 2',
  },
];

const cancelSupplyData: CancelSupplyType = {
  supplyBalance: '$10.000.00',
  totalBalanceOverdue: '$15.000.00',
  balanceSheetStatus: 'Vencido a 30 dias',
};

export const getServicesData = async (): Promise<SupplyServiceType[]> => {
  await delay(500);

  return servicesData;
};

export const getCancelSupplyInfo = async (): Promise<CancelSupplyType> => {
  await delay(500);

  return cancelSupplyData;
};
