import { useContext } from 'react';
import { BankConfigContext } from './bankConfig.context';

export const useBankConfig = () => useContext(BankConfigContext);
