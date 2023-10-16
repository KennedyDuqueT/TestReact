import { useContext } from 'react';
import { PaymentDealTypeConfigContext } from './paymentDealTypeConfig.context';

export const usePaymentDealTypeConfig = () => useContext(PaymentDealTypeConfigContext);
