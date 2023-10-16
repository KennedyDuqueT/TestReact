export interface RateInterface {
  id: number | null;
  code: string;
  description: string;
  serviceTypeId: string;
  interface1: string;
  interface2: string;
  interface3: string;
  filter1: string;
  filter2: string;
  rateTypeId: string;
  createdByUserId: number | string;
}

export const rateFormInitialValue: RateInterface = {
  id: null,
  code: '',
  description: '',
  serviceTypeId: '',
  interface1: '',
  interface2: '',
  interface3: '',
  filter1: '',
  filter2: '',
  rateTypeId: '',
  createdByUserId: 1,
};
