import { FC } from 'react';
import { MainLayout } from '@/layouts';
import IndividualBillingTabsComponent from '@/components/billing/IndividualBilling/IndividualBillingTabs';

const BillingManagement: FC<void> = () => {
  return (
    <MainLayout>
      <IndividualBillingTabsComponent />
    </MainLayout>
  );
};

export default BillingManagement;
