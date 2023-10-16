import React from 'react';
import { Grid } from '@mui/material';
import { AddBox, Announcement, FormatListNumbered, GavelRounded, MonetizationOn, Receipt, Settings } from '@mui/icons-material';
import { DashboardMenuItem, DahboardItem } from '@/components/portfolio';
import { CommonsModels } from '@/models';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';

const PortofioDashboardPage = () => {
  const { t } = useTranslation();
  const iconStyles = { fontSize: 48, mb: 1 };

  // TODO: Get available options from auth service
  const DASHBOARD_ITEMS: DahboardItem[] = [
    {
      icon: <Announcement color="warning" sx={iconStyles} />,
      text: t('portfolio.dashboard.notices'),
      url: '/porfolio',
    },
    {
      icon: <FormatListNumbered color="secondary" sx={iconStyles} />,
      text: t('portfolio.dashboard.supplyLotsManagement'),
      url: CommonsModels.Routes.PORTFOLIO_SUPPLY_LOTS,
    },
    {
      icon: <MonetizationOn color="primary" sx={iconStyles} />,
      text: t('portfolio.dashboard.massiveDebtTransfer'),
      url: CommonsModels.Routes.PORTFOLIO_MASSIVE_DEBT_TRANSFER,
    },
    {
      icon: <MonetizationOn color="primary" sx={iconStyles} />,
      text: t('portfolio.dashboard.individualDebtTransfer'),
      url: CommonsModels.Routes.PORTFOLIO_INDIVIDUAL_DEBT_TRANSFER,
    },
    {
      icon: <AddBox color="primary" sx={iconStyles} />,
      text: t('portfolio.dashboard.createOperation'),
      url: '/porfolio',
    },
    {
      icon: <GavelRounded sx={iconStyles} />,
      text: t('portfolio.dashboard.legal'),
      url: '/porfolio',
    },
    {
      icon: <FormatListNumbered color="secondary" sx={iconStyles} />,
      text: t('portfolio.dashboard.operationManagement'),
      url: '/porfolio',
    },
    {
      icon: <Receipt color="primary" sx={iconStyles} />,
      text: t('portfolio.dashboard.paymentPlans'),
      url: '/porfolio',
    },
    {
      icon: <FormatListNumbered color="secondary" sx={iconStyles} />,
      text: t('portfolio.dashboard.creditManagement'),
      url: '/porfolio',
    },
    {
      icon: <FormatListNumbered color="secondary" sx={iconStyles} />,
      text: t('portfolio.dashboard.depositManagement'),
      url: '/porfolio',
    },
    {
      icon: <Settings sx={iconStyles} />,
      text: t('portfolio.dashboard.settings'),
      url: '/porfolio',
    },
    {
      icon: <Settings sx={iconStyles} />,
      text: t('portfolio.dashboard.otherSettings'),
      url: '/porfolio',
    },
  ];

  return (
    <MainLayout title={t('portfolio.dashboard.pageTitle')}>
      <Grid container spacing={3}>
        {DASHBOARD_ITEMS.map((item, index) => (
          <DashboardMenuItem key={`${index}-${item.text}`} {...item} />
        ))}
      </Grid>
    </MainLayout>
  );
};

export default PortofioDashboardPage;
