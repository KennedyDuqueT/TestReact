import { Catalog } from './catalog';

export enum CurrencyValues {
  US = 'US',
  RD = 'RD',
  EUR = 'EUR',
  DOP = 'DOP',
}

export interface Currency extends Catalog {}
