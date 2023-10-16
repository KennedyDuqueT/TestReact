import { useContext } from 'react';
import { ProvisionalBillingContext } from './provisionalBilling.context';

export const useProvisionalBilling = () => useContext(ProvisionalBillingContext);
