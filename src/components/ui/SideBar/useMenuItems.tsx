import { useRouter } from 'next/router';
import { Paid, Plagiarism, Wallet, PeopleOutline } from '@mui/icons-material';
import { useTranslation } from '@/hooks';
import { CommonsModels } from '@/models';

export interface MenuItem {
  name: string;
  route?: string;
  subMenuItems?: MenuItem[];
  icon?: JSX.Element;
  isActive?: boolean;
}

export const useMenuItems = (): { items: MenuItem[] } => {
  const { t } = useTranslation();
  const { asPath } = useRouter();
  const routes = CommonsModels.Routes;

  const menuItems: MenuItem[] = [
    {
      name: t('sidebar.paperworks.title'),
      route: routes.ADMIN_PAPERWORK,
      icon: <Plagiarism />,
      isActive: asPath.includes(routes.ADMIN_PAPERWORK),
    },
    {
      name: t('sidebar.portfolio.title'),
      subMenuItems: [
        { name: t('sidebar.portfolio.dashboard'), route: routes.PORTFOLIO_DASHBOARD },
        { name: t('sidebar.portfolio.supplyLots'), route: routes.PORTFOLIO_SUPPLY_LOTS },
        { name: t('sidebar.portfolio.debtTransferMassive'), route: routes.PORTFOLIO_MASSIVE_DEBT_TRANSFER },
        { name: t('sidebar.portfolio.debtTransferIndividual'), route: routes.PORTFOLIO_INDIVIDUAL_DEBT_TRANSFER },
        { name: t('sidebar.portfolio.notificationsConfig'), route: routes.PORTFOLIO_NOTIFICATIONS_CONFIG },
        { name: t('sidebar.portfolio.partialOperation'), route: routes.PORTFOLIO_PARTIAL_OPERATION },
        { name: t('sidebar.portfolio.supplyStatusConfig'), route: routes.PORTFOLIO_SUPPLY_STATUS_CONFIG },
        { name: t('sidebar.portfolio.lotStatusConfig'), route: routes.PORTFOLIO_LOT_STATUS_CONFIG },
        { name: t('sidebar.portfolio.invoiceStatusTypeConfig'), route: routes.PORTFOLIO_INVOICE_STATUS_TYPE_CONFIG },
        { name: t('sidebar.portfolio.homologatedTableConfig'), route: routes.PORTFOLIO_HOMOLOGATED_TABLE_DEVICES_CONFIG },
        { name: t('sidebar.portfolio.legalReturn'), route: routes.PORTFOLIO_LEGAL_RETURN },
        { name: t('sidebar.portfolio.paymentDealType'), route: routes.PORTFOLIO_PAYMENT_DEAL_TYPE_CONFIG },
        { name: t('sidebar.portfolio.currencyExchangeRateConfig'), route: routes.PORTFOLIO_CURRENCY_EXCHANGE_RATE_CONFIG },
        { name: t('sidebar.portfolio.bailAgreement'), route: routes.BAIL_AGREEMENT },
        { name: t('sidebar.portfolio.bankConfig'), route: routes.PORTFOLIO_BANK_CONFIG },
        { name: t('sidebar.portfolio.cashRegisterStatusConfig'), route: routes.PORTFOLIO_CASH_REGISTER_STATUS_CONFIG },
        { name: t('sidebar.portfolio.cashRegisterConfig'), route: routes.PORTFOLIO_CASH_REGISTER_CONFIG },
        { name: t('sidebar.portfolio.posProviderConfig'), route: routes.PORTFOLIO_POS_PROVIDER_CONFIG },
        { name: t('sidebar.portfolio.posVerifoneConfig'), route: routes.PORTFOLIO_POS_VERIFONE_CONFIG },
      ],
      icon: <Wallet />,
      isActive: asPath.includes(routes.PORTFOLIO_DASHBOARD),
    },
    {
      name: t('sidebar.billing.title'),
      subMenuItems: [
        {
          name: t('sidebar.billing.maintenance'),
          route: routes.BILLING_MAINTENANCE,
        },
        {
          name: t('sidebar.billing.batchBilling'),
          route: routes.BATCH_BILLING,
        },
        {
          name: t('sidebar.billing.individualBilling'),
          route: routes.INDIVIDUAL_BILLING,
        },
        {
          name: t('sidebar.billing.electronicBilling'),
          route: routes.ELECTRONIC_BILLING,
        },
      ],
      icon: <Paid />,
      isActive: asPath.includes(routes.BILLING_MAINTENANCE),
    },
    {
      name: t('sidebar.customerExperience.title'),
      route: routes.CUSTOMER_EXPERIENCE_DASHBOARD,
      icon: <PeopleOutline />,
      isActive: asPath.includes(routes.CUSTOMER_EXPERIENCE_DASHBOARD),
    },
  ];

  return {
    items: menuItems,
  };
};
