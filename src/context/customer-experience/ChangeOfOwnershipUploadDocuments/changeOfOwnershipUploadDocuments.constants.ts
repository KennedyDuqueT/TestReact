import { createAction } from '@/utils';
import { CatalogModel } from '@/models/customer-experience';

export enum Types {
  // Set Catalogs
  SET_CATALOG_CUSTOMER_TYPE = 'paperworks/setCatalogCustomerType',
}

export const reducerActions = {
  setCatalogCustomerType: createAction<Types, CatalogModel[]>(Types.SET_CATALOG_CUSTOMER_TYPE),
};
