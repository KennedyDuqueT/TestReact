import { createAction } from '@/utils';
import { ProcessedSupply } from '@/models/portfolio';

export enum Types {
  SET_PROCESSED_SUPPLIES = 'legalReturn/setProcessedSupplies',
}

export const reducerActions = {
  setProcessedSupplies: createAction<Types, ProcessedSupply[]>(Types.SET_PROCESSED_SUPPLIES),
};
