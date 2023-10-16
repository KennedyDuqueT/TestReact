import { CurrencyExchangeRate } from '@/models/portfolio';
import { delay } from '../helpers';
import { CurrencyValues } from '@/models/commons';

let currencyExchangeRateList: CurrencyExchangeRate[] = [
  {
    id: 1,
    name: '',
    company: 'Tech Brothers',
    baseCurrency: CurrencyValues.DOP,
    rateCurrency: CurrencyValues.US,
    rate: 1.5,
  },
  {
    id: 2,
    name: '',
    company: 'Tech Brothers',
    baseCurrency: CurrencyValues.DOP,
    rateCurrency: CurrencyValues.EUR,
    rate: 10,
  },
  {
    id: 3,
    name: '',
    company: 'Tech Brothers',
    baseCurrency: CurrencyValues.EUR,
    rateCurrency: CurrencyValues.US,
    rate: 4,
  },
  {
    id: 4,
    name: '',
    company: 'Tech Brothers',
    baseCurrency: CurrencyValues.EUR,
    rateCurrency: CurrencyValues.US,
    rate: 1.2,
  },
];

export const getCurrencyExchangeRateList = async (): Promise<CurrencyExchangeRate[]> => {
  await delay(500);

  return currencyExchangeRateList;
};

export const createCurrencyExchangeRate = async (newCurrencyExchangeRate: CurrencyExchangeRate): Promise<boolean> => {
  const { length } = currencyExchangeRateList;
  const id = length > 0 ? currencyExchangeRateList[length - 1].id + 1 : 1;

  currencyExchangeRateList = [...currencyExchangeRateList, { ...newCurrencyExchangeRate, id }];

  return true;
};

export const updateCurrencyExchangeRate = async (updatedCurrencyExchangeRate: CurrencyExchangeRate): Promise<boolean> => {
  currencyExchangeRateList = currencyExchangeRateList.map((status) =>
    status.id === updatedCurrencyExchangeRate.id ? updatedCurrencyExchangeRate : status
  );

  return true;
};

export const deleteCurrencyExchangeRate = async (currencyExchangeRateId: number): Promise<boolean> => {
  currencyExchangeRateList = currencyExchangeRateList.filter((status) => status.id !== currencyExchangeRateId);

  return true;
};
