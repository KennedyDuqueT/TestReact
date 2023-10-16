import { GenerateBillingArchiveInterface } from '@/models/billing';
import { createAction } from '@/utils';

export enum Types {
  LOAD_INITIAL_INFO = 'generateBillingArchive/loadInitialInfo',
  CALL_SAVE_GENERATE_BILLING_ARCHIVE_API = 'generateBillingArchive/callSaveGenerateBillingArchive',
  SET_TABLE_GENERATE_BILLING_ARCHIVE = 'generateBillingArchive/setTableGenerateBillingArchive',
}

export const reducerActions = {
  callSaveGenerateBillingArchive: createAction<Types, number[]>(Types.CALL_SAVE_GENERATE_BILLING_ARCHIVE_API),
  setTableGenerateBillingArchive: createAction<Types, GenerateBillingArchiveInterface>(Types.SET_TABLE_GENERATE_BILLING_ARCHIVE),
};
