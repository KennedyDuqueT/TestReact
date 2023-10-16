import { FC } from 'react';
import { MainLayout } from '@/layouts';
import BatchBillingTabsComponent from '@/components/billing/BatchBilling/BatchBillingTabs';

const BatchBillingMaintenance: FC<void> = () => {
  return (
    <MainLayout>
      <BatchBillingTabsComponent />
    </MainLayout>
  );
};

export default BatchBillingMaintenance;
