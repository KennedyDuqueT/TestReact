import { FC } from 'react';
import { Box } from '@mui/material';
import { Tabs } from '@/components';
import { useTranslation } from '@/hooks';
import IndividualBillingCreateOrEditViewComponent from './IndividualBilling/IndividualBillingCreateOrEditView';

const IndividualBillingTabsComponent: FC = () => {
  const { t } = useTranslation();

  const tabsData = [
    {
      label: t('billing.individualBilling.individualBilling.tabName'),
      content: <IndividualBillingCreateOrEditViewComponent></IndividualBillingCreateOrEditViewComponent>,
      icon: '',
    },
  ];

  return (
    <>
      <Box sx={{ my: 1 }}>
        <Tabs tabs={tabsData} />
      </Box>
    </>
  );
};

export default IndividualBillingTabsComponent;
