import { SimpleCatalog } from '@/models/commons';

export interface FunctionalSegmentProcessFormValues {
  totalSupply: string;
  totalOverdue: string;
  typeCurrency: string;
  overdueBills: SimpleCatalog[];
  overdueInvoice: string;
  amountFees: string;
  inclueReport: boolean;
  authorizationRequired: boolean;
}

export interface IncludeReportFormValues {
  initialContribution: string;
  payInitital: string;
}

export interface RequireAuthorizationFormValues {
  personAuthorize: string;
}
