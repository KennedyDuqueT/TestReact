export interface ApprovedTableFormValues {
  totalNumberRows: number;
  totalPay: string;
  totalEquipmentPower: string;
  noInterCostAuth: string;
  totalQuantityEquip: string;
  typeBail: string;
  totalKwh: string;
}

export interface LoadElecDevicesTableValues {
  typeElectrical: string;
  amountEquipment: string;
}

export interface LoadElecDevicesTableInterface {
  id: string | number;
  equipmentId: string | number;
  typeElectrical: string | number;
  nominalPower: string;
  amountEquipment: string | number;
  kwhPeriod: string | number;
  estimatedKwh: string | number;
}

export interface SubFarmCostTableInterface {
  id: string | number;
  costId: string | number;
  costBail: string | number;
  interconnectionCost: string;
  costSubfarmInter: string | number;
}
