export interface RouteInterface {
  id: number | null;
  name: string;
  cycleId: number | string;
  description: string;
  sectorId: number | string;
  zoneId: number | string;
  frequencyId: number | string;
  serviceTypeId: number | string;
  billingModeId: number | string;
  createdByUserId: number | string;
}

export const routeInitialValue: RouteInterface = {
  id: 0,
  name: '',
  description: '',
  cycleId: '',
  sectorId: '',
  zoneId: '',
  frequencyId: '',
  serviceTypeId: '',
  billingModeId: '',
  createdByUserId: 1,
};
