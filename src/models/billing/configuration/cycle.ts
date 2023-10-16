export interface CycleInterface {
  id: number | null;
  name: string;
  description: string;
  sectorId: number | string;
  zoneId: number | string;
  frequencyId: number | string;
  serviceTypeId: number | string;
  billingModeId: number | string;
  createdByUserId: number | string;
}

export const cycleInitialValue: CycleInterface = {
  id: 0,
  name: '',
  description: '',
  sectorId: '',
  zoneId: '',
  frequencyId: '',
  serviceTypeId: '',
  billingModeId: '',
  createdByUserId: '1',
};
