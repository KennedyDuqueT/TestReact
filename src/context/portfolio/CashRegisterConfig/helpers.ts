import { CashRegister, CashRegisterMapped } from '@/models/portfolio';
import { CashRegisterCatalogs } from './cashRegisterConfig.types';

export const mapCashRegisterItems = (items: CashRegister[], catalogs: CashRegisterCatalogs): CashRegisterMapped[] =>
  items.map((cashRegisterItem) => ({
    ...cashRegisterItem,
    currency: catalogs.currencies.find((currency) => currency.id === cashRegisterItem.currency)?.name || '',
    type: catalogs.types.find((type) => type.id === cashRegisterItem.type)?.name || '',
    closingType: catalogs.closingTypes.find((closingType) => closingType.id === cashRegisterItem.closingType)?.name || '',
    account: catalogs.accounts.find((account) => account.id === cashRegisterItem.account)?.name || '',
    bank: catalogs.banks.find((bank) => bank.id === cashRegisterItem.bank)?.name || '',
    status: catalogs.status.find((status) => status.id === cashRegisterItem.status)?.name || '',
  })) as CashRegisterMapped[];
