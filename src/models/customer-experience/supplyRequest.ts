export enum SupplyStatusValues {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  WITH_WARNING = 'warning',
}

export interface SupplyServiceType {
  id?: number;
  name: string;
}

export interface NewSupplyFormValues {
  company: number;
  service: string;
  idType: string;
  contract: string;
  clientId: string;
  currency: string;
  businessName: string;
  client: string;
  propertyCondition: string;
  civilStatus: string;
  gender: string;
  nameSpouse: string;
  phone: string;
  phone2: string;
  idSpouse: string;
  phoneSpouse: string;
  request: string;
  email: string;
  rate: string;
  email2: string;
}
