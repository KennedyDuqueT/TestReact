import { useContext } from 'react';
import { DebtTransferIndividualContext } from './debtTransferIndividual.context';

export const useDebtTransferIndividual = () => useContext(DebtTransferIndividualContext);
