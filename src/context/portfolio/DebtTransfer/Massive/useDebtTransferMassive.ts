import { useContext } from 'react';
import { DebtTransferMassiveContext } from './debtTransferMassive.context';

export const useDebtTransferMassive = () => useContext(DebtTransferMassiveContext);
