import { PropsWithChildren, ElementType } from 'react';
import {
  RouteManagementProvider,
  TariffSchedulesManagementProvider,
  CycleManagementProvider,
  RateManagementProvider,
  ReadingImportProvider,
  CriticalReadingProvider,
  GenerateBillingArchiveProvider,
  ProvisionalBillingProvider,
  DataMastersManagementProvider,
  IndividualBillingProvider,
  ParameterManagementProvider,
  ElectronicBillStampingProvider,
  ConceptManagementProvider,
} from './billing';
import {
  SupplyRequestProvider,
  ApprovedTableProvider,
  InvoiceInitalAmountProvider,
  UnclaimedDepositsProvider,
  ChangeOfOwnershipUploadDocumentsProvider,
} from './customer-experience';
import {
  DebtTransferIndividualProvider,
  DebtTransferMassiveProvider,
  HomologatedTableConfigProvider,
  InvoiceStatusTypeConfigProvider,
  LegalReturnProvider,
  LotStatusConfigProvider,
  NotificationConfigProvider,
  PartialOperationProvider,
  PaymentDealTypeConfigProvider,
  SupplyLotProvider,
  SupplyStatusConfigProvider,
  CurrencyExchangeRateConfigProvider,
  BankConfigProvider,
  CashRegisterStatusConfigProvider,
  CashRegisterConfigProvider,
  PosProviderConfigProvider,
  PosVerifoneConfigProvider,
} from './portfolio';

interface Props extends PropsWithChildren {}

export const AppContextProvider = (props: Props): any => {
  const providers = [
    CycleManagementProvider,
    CriticalReadingProvider,
    DebtTransferIndividualProvider,
    DebtTransferMassiveProvider,
    DataMastersManagementProvider,
    ElectronicBillStampingProvider,
    GenerateBillingArchiveProvider,
    HomologatedTableConfigProvider,
    IndividualBillingProvider,
    InvoiceStatusTypeConfigProvider,
    LegalReturnProvider,
    LotStatusConfigProvider,
    NotificationConfigProvider,
    PartialOperationProvider,
    ProvisionalBillingProvider,
    RateManagementProvider,
    ReadingImportProvider,
    RouteManagementProvider,
    PaymentDealTypeConfigProvider,
    SupplyLotProvider,
    SupplyRequestProvider,
    ApprovedTableProvider,
    SupplyStatusConfigProvider,
    TariffSchedulesManagementProvider,
    CurrencyExchangeRateConfigProvider,
    ParameterManagementProvider,
    BankConfigProvider,
    InvoiceInitalAmountProvider,
    CashRegisterStatusConfigProvider,
    UnclaimedDepositsProvider,
    ChangeOfOwnershipUploadDocumentsProvider,
    CashRegisterConfigProvider,
    PosProviderConfigProvider,
  ];

  const CombinedProviders = providers.reduce(
    (AccumulatedComponents: ElementType, CurrentComponent: ElementType) => {
      return function Combined({ children }: Props): JSX.Element {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );

  return <CombinedProviders>{props.children}</CombinedProviders>;
};
