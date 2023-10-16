import { SimpleCatalog } from '../commons';

export interface HomologatedTableDeviceFormValues extends SimpleCatalog {
  nominalPower: number;
  useHours: number;
  useDays: number;
}

export interface HomologatedTableDevice extends HomologatedTableDeviceFormValues {
  totalReadings: number;
  devices: number;
  energyKWh: number;
  estimatedEnergyKWh: number;
}
