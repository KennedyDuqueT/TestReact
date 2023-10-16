import { Catalog } from '../commons';

export interface PaymentDealType extends Catalog {
  interestPercent: number;
  penaltyPercent: number;
}
