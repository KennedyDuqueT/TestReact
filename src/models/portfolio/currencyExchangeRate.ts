import { Catalog } from '../commons';

export interface CurrencyExchangeRate extends Catalog {
  company: string;
  baseCurrency: string;
  rateCurrency: string;
  rate: number;
}
