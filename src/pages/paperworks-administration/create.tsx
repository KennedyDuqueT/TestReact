import React from 'react';
import { TabsContainer } from '@/components/paperworks';
import { MainLayout } from '@/layouts';
import { useTranslation } from '@/hooks';

export const CreatePaperwork = () => {
  const { t } = useTranslation();

  return (
    <MainLayout title={t('paperworks.create.pageTitle')}>
      <TabsContainer />
    </MainLayout>
  );
};

export default CreatePaperwork;
