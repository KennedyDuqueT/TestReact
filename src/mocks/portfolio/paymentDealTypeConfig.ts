import { PaymentDealType } from '@/models/portfolio';
import { delay } from '../helpers';

let paymentDealTypeList: PaymentDealType[] = [
  {
    id: 1,
    name: 'Acuerdo 1',
    code: 'TA2301',
    interestPercent: 50,
    penaltyPercent: 8.5,
  },
  {
    id: 2,
    name: 'Acuerdo 2',
    code: 'TA2302',
    interestPercent: 91,
    penaltyPercent: 100,
  },
  {
    id: 3,
    name: 'Acuerdo 3',
    code: 'TA2303',
    interestPercent: 15,
    penaltyPercent: 10,
  },
  {
    id: 4,
    name: 'Acuerdo 4',
    code: 'TA2304',
    interestPercent: 2,
    penaltyPercent: 12,
  },
];

export const getPaymentDealTypeList = async (): Promise<PaymentDealType[]> => {
  await delay(500);

  return paymentDealTypeList;
};

export const createPaymentDealType = async (newPaymentDealType: PaymentDealType): Promise<boolean> => {
  const { length } = paymentDealTypeList;
  const id = length > 0 ? paymentDealTypeList[length - 1].id + 1 : 1;

  paymentDealTypeList = [...paymentDealTypeList, { ...newPaymentDealType, id }];

  return true;
};

export const updatePaymentDealType = async (updatedPaymentDealType: PaymentDealType): Promise<boolean> => {
  paymentDealTypeList = paymentDealTypeList.map((status) => (status.id === updatedPaymentDealType.id ? updatedPaymentDealType : status));

  return true;
};

export const deletePaymentDealType = async (paymentDealTypeId: number): Promise<boolean> => {
  paymentDealTypeList = paymentDealTypeList.filter((status) => status.id !== paymentDealTypeId);

  return true;
};
