import { useContext } from 'react';
import { CashRegisterStatusConfigContext } from './cashRegisterStatusConfig.context';

export const useCashRegisterStatusConfig = () => useContext(CashRegisterStatusConfigContext);
