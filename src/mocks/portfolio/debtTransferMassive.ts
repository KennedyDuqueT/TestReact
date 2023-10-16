import { BasicSupplyLot, SupplyPairForDebtTransfer } from '@/models/portfolio';
import { delay, getRandomInRange } from '../helpers';

const supplyLotsBasicList: BasicSupplyLot[] = [
  {
    id: 1,
    fullName: '#1 Remanente Junio',
  },
  {
    id: 2,
    fullName: '#2 Remanente Julio',
  },
  {
    id: 3,
    fullName: '#3 Remanente Agosto',
  },
  {
    id: 4,
    fullName: '#4 Remanente Septiembre',
  },
  {
    id: 5,
    fullName: '#5 Remanente Octubre',
  },
  {
    id: 6,
    fullName: '#6 Remanente Noviembre',
  },
  {
    id: 7,
    fullName: '#7 Remanente Diciembre',
  },
];

const supplyPairs: SupplyPairForDebtTransfer[] = [
  {
    pairId: 1,
    amountLate: 3500,
    debtSupplyNumber: 'A1234567890',
    destinationSupplyNumber: 'B1234567890',
    status: 'active',
  },
  {
    pairId: 2,
    amountLate: 3500,
    debtSupplyNumber: 'A1234567890',
    destinationSupplyNumber: 'B2234567890',
    status: 'active',
  },
  {
    pairId: 3,
    amountLate: 5000,
    debtSupplyNumber: 'L4234567890',
    destinationSupplyNumber: 'L1234567890',
    status: 'suspended',
  },
  {
    pairId: 4,
    amountLate: 1100.5,
    debtSupplyNumber: 'P5234567890',
    destinationSupplyNumber: 'P1234567890',
    status: 'active',
  },
  {
    pairId: 5,
    amountLate: 1100.5,
    debtSupplyNumber: 'P5234567890',
    destinationSupplyNumber: 'P2234567890',
    status: 'active',
  },
  {
    pairId: 6,
    amountLate: 45000,
    debtSupplyNumber: 'X1234567890',
    destinationSupplyNumber: 'X2234567890',
    status: 'suspended',
  },
  {
    pairId: 7,
    amountLate: 45000,
    debtSupplyNumber: 'X1234567890',
    destinationSupplyNumber: 'X3234567890',
    status: 'active',
  },
  {
    pairId: 8,
    amountLate: 12589.36,
    debtSupplyNumber: 'H1234567890',
    destinationSupplyNumber: 'H2234567890',
    status: 'active',
  },
  {
    pairId: 9,
    amountLate: 8999.86,
    debtSupplyNumber: 'R1234567890',
    destinationSupplyNumber: 'R2234567890',
    status: 'active',
  },
  {
    pairId: 10,
    amountLate: 250,
    debtSupplyNumber: 'Y1234567890',
    destinationSupplyNumber: 'Y2234567890',
    status: 'active',
  },
];

export const getSupplyLotsSimpleListData = async (): Promise<BasicSupplyLot[]> => {
  await delay(500);

  return supplyLotsBasicList;
};

export const getSupplyPairsData = async (supplyLotId: number): Promise<SupplyPairForDebtTransfer[]> => {
  if (supplyLotId === 0) throw new Error('No data found');

  await delay(1500);

  return supplyPairs.slice(getRandomInRange(0, supplyLotId)).map((pair) => ({
    ...pair,
    id: pair.pairId,
  }));
};
