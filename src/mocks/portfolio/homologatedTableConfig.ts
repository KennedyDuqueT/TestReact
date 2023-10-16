import { HomologatedTableDevice, HomologatedTableDeviceFormValues } from '@/models/portfolio';
import { delay, getRandomInRange } from '../helpers';

let homologatedTableDeviceList: HomologatedTableDevice[] = [
  {
    id: 1,
    name: 'Lavadora',
    nominalPower: 1.5,
    useHours: 4,
    useDays: 8,
    totalReadings: 10,
    devices: 1,
    energyKWh: 1.5 * 4,
    estimatedEnergyKWh: 1.5 * 4 * 8,
  },
  {
    id: 2,
    name: 'Refrigerador',
    nominalPower: 2,
    useHours: 24,
    useDays: 30,
    totalReadings: 30,
    devices: 1,
    energyKWh: 2 * 24,
    estimatedEnergyKWh: 2 * 24 * 30,
  },
  {
    id: 3,
    name: 'Microondas',
    nominalPower: 0.12,
    useHours: 2,
    useDays: 30,
    totalReadings: 20,
    devices: 2,
    energyKWh: 0.12 * 2,
    estimatedEnergyKWh: 0.12 * 2 * 30,
  },
  {
    id: 4,
    name: 'Aire acondicionado',
    nominalPower: 3,
    useHours: 12,
    useDays: 30,
    totalReadings: 90,
    devices: 4,
    energyKWh: 3 * 12,
    estimatedEnergyKWh: 3 * 12 * 30,
  },
  {
    id: 5,
    name: 'Computadora de escritorio',
    nominalPower: 0.5,
    useHours: 8,
    useDays: 30,
    totalReadings: 30,
    devices: 3,
    energyKWh: 0.5 * 8,
    estimatedEnergyKWh: 0.5 * 8 * 30,
  },
  {
    id: 6,
    name: 'Laptop',
    nominalPower: 0.35,
    useHours: 8,
    useDays: 30,
    totalReadings: 30,
    devices: 4,
    energyKWh: 0.35 * 8,
    estimatedEnergyKWh: 0.35 * 8 * 30,
  },
];

interface DeviceEnergy {
  totalReadings: number;
  devices: number;
  energyKWh: number;
  estimatedEnergyKWh: number;
}

export const calculateEnergy = (device: HomologatedTableDeviceFormValues): DeviceEnergy => {
  const { nominalPower, useHours, useDays } = device;

  return {
    totalReadings: getRandomInRange(1, 100),
    devices: getRandomInRange(1, 10),
    energyKWh: nominalPower * useHours,
    estimatedEnergyKWh: nominalPower * useHours * useDays,
  };
};

export const getHomologatedTableDeviceList = async (): Promise<HomologatedTableDevice[]> => {
  await delay(500);

  return homologatedTableDeviceList;
};

export const createHomologatedTableDevice = async (newHomologatedTableDevice: HomologatedTableDeviceFormValues): Promise<boolean> => {
  const { length } = homologatedTableDeviceList;
  const id = length > 0 ? homologatedTableDeviceList[length - 1].id + 1 : 1;

  homologatedTableDeviceList = [
    ...homologatedTableDeviceList,
    {
      ...newHomologatedTableDevice,
      id,
      ...calculateEnergy(newHomologatedTableDevice),
    },
  ];

  return true;
};

export const updateHomologatedTableDevice = async (updatedHomologatedTableDevice: HomologatedTableDevice): Promise<boolean> => {
  homologatedTableDeviceList = homologatedTableDeviceList.map((device) =>
    device.id === updatedHomologatedTableDevice.id
      ? {
          ...updatedHomologatedTableDevice,
          ...calculateEnergy(updatedHomologatedTableDevice),
        }
      : device
  );

  return true;
};

export const deleteHomologatedTableDevice = async (homologatedTableDeviceId: number): Promise<boolean> => {
  homologatedTableDeviceList = homologatedTableDeviceList.filter((device) => device.id !== homologatedTableDeviceId);

  return true;
};
