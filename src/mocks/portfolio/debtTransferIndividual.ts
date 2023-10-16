import { BasicSupply, SearchSupplyParams, SupplyStatusValues } from '@/models/portfolio';
import { delay } from '../helpers';

export interface SearchResponse {
  client: {
    fullName: string;
    clientNumber: string;
  };
  debtSupplies: BasicSupply[];
  destinationSupplies: BasicSupply[];
}

const resultsBySupply: { [key: string]: SearchResponse } = {
  A1234567890: {
    client: {
      fullName: 'Armando Albor Chavez',
      clientNumber: '00000001',
    },
    debtSupplies: [
      {
        id: 1,
        supplyNumber: 'A1234567890',
        status: SupplyStatusValues.SUSPENDED,
        amountLate: 8500.35,
      },
      {
        id: 100,
        supplyNumber: 'A1234567891',
        status: SupplyStatusValues.SUSPENDED,
        amountLate: 32345.68,
      },
    ],
    destinationSupplies: [
      {
        id: 2,
        supplyNumber: 'B1234567890',
        status: SupplyStatusValues.ACTIVE,
        amountLate: 0,
      },
      {
        id: 3,
        supplyNumber: 'C1234567890',
        status: SupplyStatusValues.ACTIVE,
        amountLate: 0,
      },
      {
        id: 4,
        supplyNumber: 'C1234567890',
        status: SupplyStatusValues.ACTIVE,
        amountLate: 0,
      },
    ],
  },

  B1234567890: {
    client: {
      fullName: 'Jorge Hurtado',
      clientNumber: '00000002',
    },
    debtSupplies: [
      {
        id: 5,
        supplyNumber: 'B1234567890',
        status: SupplyStatusValues.SUSPENDED,
        amountLate: 12500,
      },
    ],
    destinationSupplies: [
      {
        id: 6,
        supplyNumber: 'C1234567890',
        status: SupplyStatusValues.ACTIVE,
        amountLate: 0,
      },
    ],
  },

  C1234567890: {
    client: {
      fullName: 'Christian Rodríguez',
      clientNumber: '00000003',
    },
    debtSupplies: [
      {
        id: 7,
        supplyNumber: 'C1234567890',
        status: SupplyStatusValues.SUSPENDED,
        amountLate: 2500.45,
      },
      {
        id: 8,
        supplyNumber: 'C1234567891',
        status: SupplyStatusValues.SUSPENDED,
        amountLate: 6899,
      },
      {
        id: 9,
        supplyNumber: 'C1234567892',
        status: SupplyStatusValues.SUSPENDED,
        amountLate: 4555.5,
      },
    ],
    destinationSupplies: [
      {
        id: 10,
        supplyNumber: 'D1234567890',
        status: SupplyStatusValues.ACTIVE,
        amountLate: 0,
      },
    ],
  },
  D1234567890: {
    client: {
      fullName: 'Edgar Guevara',
      clientNumber: '00000004',
    },
    debtSupplies: [
      {
        id: 11,
        supplyNumber: 'D1234567890',
        status: SupplyStatusValues.SUSPENDED,
        amountLate: 9800.5,
      },
      {
        id: 12,
        supplyNumber: 'D1234567891',
        status: SupplyStatusValues.SUSPENDED,
        amountLate: 25000,
      },
    ],
    destinationSupplies: [
      {
        id: 13,
        supplyNumber: 'E1234567890',
        status: SupplyStatusValues.ACTIVE,
        amountLate: 0,
      },
      {
        id: 14,
        supplyNumber: 'E1234567891',
        status: SupplyStatusValues.ACTIVE,
        amountLate: 0,
      },
      {
        id: 15,
        supplyNumber: 'E1234567892',
        status: SupplyStatusValues.ACTIVE,
        amountLate: 0,
      },
    ],
  },
};

export const searchClientSupplies = async (search: SearchSupplyParams) => {
  await delay(500);

  const results = resultsBySupply[search.supply];

  return results || resultsBySupply['A1234567890'];
};
