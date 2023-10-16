import React, { useEffect } from 'react';
import { SupplyLotList } from '@/components/portfolio';
import { useSupplyLot } from '@/context';
import { MainLayout } from '@/layouts';
import { useTranslation } from 'react-i18next';

const SupplyLotsPage = () => {
  const { actions } = useSupplyLot();
  const { t } = useTranslation();

  useEffect(() => {
    actions?.getAllSupplyLots();
  }, []);

  return (
    <MainLayout title={t('portfolio.supplyLots.pageTitle') || undefined}>
      <SupplyLotList />
    </MainLayout>
  );
};

export default SupplyLotsPage;
