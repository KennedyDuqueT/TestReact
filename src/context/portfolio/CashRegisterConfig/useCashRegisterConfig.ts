import { useContext } from 'react';
import { CashRegisterConfigContext } from './cashRegisterConfig.context';

export const useCashRegisterConfig = () => useContext(CashRegisterConfigContext);
