import React, { useEffect } from 'react';
import { SupplyLotDetail } from '@/components/portfolio';
import { useSupplyLot } from '@/context';
import { MainLayout } from '@/layouts';

const SupplyLotDetailPage = () => {
  const { actions } = useSupplyLot();

  useEffect(() => {
    actions?.getSuppliesInLot();
  }, []);

  return (
    <MainLayout>
      <SupplyLotDetail />
    </MainLayout>
  );
};

export default SupplyLotDetailPage;
