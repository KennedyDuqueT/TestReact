export interface ChronogramFilterInterface {
  serviceType: string;
  cycleCode: string;
  year: string;
  startMonth: string;
  endMonth: string;
  startReadDay: number;
  startReadMonth: string;
  endReadDay: number;
  endReadMonth: string;
}

export interface ChronogramInterface {
  id: string;
  status: string | null;
  lot: string;
  year: number | string;
  month: number | string;
  cycleCode: string;
  routeCode: string[] | string;
  serviceType: string;
  dateRelease: string;
  dateBreak: string;
  dateFrom: string;
  dateTo: string;
  billing: string;
}
