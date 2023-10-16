import { useContext } from 'react';
import { CurrencyExchangeRateConfigContext } from './currencyExchangeRateConfig.context';

export const useCurrencyExchangeRateConfig = () => useContext(CurrencyExchangeRateConfigContext);
