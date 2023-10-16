import { FC } from 'react';
import { MainLayout } from '@/layouts';
import ManagementTabsComponent from '@/components/billing/Configuration/ManagementTabs';

const BillingMaintenance: FC<void> = () => {
  return (
    <MainLayout>
      <ManagementTabsComponent />
    </MainLayout>
  );
};

export default BillingMaintenance;
