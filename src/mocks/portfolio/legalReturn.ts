import { LegalReturnFormValues, ProcessedSupply } from '@/models/portfolio';
import { delay } from '../helpers';

export const processedSupplyList: ProcessedSupply[] = [
  {
    id: 1,
    number: '00001',
    meterNumber: 'AX-00104',
    supplyStatus: 'inactive',
    clientName: 'Ana Romo Palomino',
    amountLate: 2000,
    route: 'Ruta Bosques',
  },
  {
    id: 2,
    number: '00002',
    meterNumber: 'GM-00891',
    supplyStatus: 'legalReturn',
    clientName: 'Eduardo Romero Rojas',
    amountLate: 499,
    route: 'Ruta Bosques',
  },
  {
    id: 3,
    number: '00003',
    meterNumber: 'LX-00334',
    supplyStatus: 'legalReturn',
    clientName: 'José José Guzman Saenz',
    amountLate: 100,
    route: 'Ruta Bosques',
  },
  {
    id: 4,
    number: '00004',
    meterNumber: 'MM-00124',
    supplyStatus: 'inactive',
    clientName: 'Ernesto Alejandro Hernandez',
    amountLate: 9878,
    route: 'Ruta Bosques',
  },
  {
    id: 5,
    number: '00005',
    meterNumber: 'XX-00874',
    supplyStatus: 'inactive',
    clientName: 'Javier Hernandez Lagos',
    amountLate: 12589,
    route: 'Ruta Bosques',
  },
  {
    id: 6,
    number: '00006',
    meterNumber: 'KX-00984',
    supplyStatus: 'warning',
    clientName: 'Randy Rojas Sanchez',
    amountLate: 688,
    route: 'Ruta Bosques',
  },
];

export const getProcessedSupplyData = async (values: LegalReturnFormValues): Promise<ProcessedSupply[]> => {
  await delay(500);

  console.log('TODO: Implement API call to send file to Backend', values.supplyListFileToProcess);

  return processedSupplyList;
};
