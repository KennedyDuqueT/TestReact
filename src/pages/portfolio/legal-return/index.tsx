import React from 'react';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import { ProcessedSupplyList, UploadLegalReturnFileForm } from '@/components/portfolio';
import { WrapperForm } from '@/components';
import { Box } from '@mui/material';

const LegalReturnPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout title={t('portfolio.legalReturn.pageTitle')}>
      <WrapperForm title={t('portfolio.legalReturn.selectFileSectionTitle')} variant="secondary">
        <UploadLegalReturnFileForm />
      </WrapperForm>

      {/* <SupplyStatusCreateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <SupplyStatusUpdateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <SupplyStatusDeleteDialog entityName={entityName} fullEntityName={fullEntityName} /> */}

      <Box my={2}>
        <ProcessedSupplyList />
      </Box>
    </MainLayout>
  );
};

export default LegalReturnPage;
