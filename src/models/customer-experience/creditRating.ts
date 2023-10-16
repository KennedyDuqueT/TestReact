export interface ClientDataFormValues {
  company: number;
  idType: string;
  businessName: string;
  clientId: string;
}

export interface CreditRatingExternalFormValues {
  rdBuroBalance: string;
  resultCreditRating: string;
  techBuroBalance: string;
  cebBuroBalance: string;
  mcrBuroBalance: string;
  evergoBuroBalance: string;
  interenergyBuroBalance: string;
  edesBuroBalance: string;
  cancelMessage: string;
}

export interface UploadPropertyDocsFormValues {
  hasTitle: boolean;
  titleProperty: string;
  idOwnerProperty: string;
  buyContractProperty: string;
  letterRequestService: string;
  currentNotarizedPower: string;
  others: string;
}

export interface LegalDocsFormValues {
  currentMercantileRegistry: string;
  legalLetterRequestService: string;
  legalOthers: string;
}
