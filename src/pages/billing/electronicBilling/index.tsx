import { FC } from 'react';
import { MainLayout } from '@/layouts';
import ElectronicBillingTabsComponent from '@/components/billing/ElectronicBilling/ElectronicBillingTabs';

const BillingManagement: FC<void> = () => {
  return (
    <MainLayout>
      <ElectronicBillingTabsComponent />
    </MainLayout>
  );
};

export default BillingManagement;
