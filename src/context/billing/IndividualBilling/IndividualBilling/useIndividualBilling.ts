import { useContext } from 'react';
import { IndividualBillingContext } from './individualBilling.context';

export const useIndividualBilling = () => useContext(IndividualBillingContext);
