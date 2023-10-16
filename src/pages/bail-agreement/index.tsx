import React from 'react';
import { MainLayout } from '@/layouts';
import { BailAgreementComponent } from '@/components/portfolio/BailAgreement/BailAgreement';
import { useTranslation } from '@/hooks';

const Profile = () => {
  const { t } = useTranslation();
  return (
    <MainLayout title={t('bailAgreement.title')}>
      <BailAgreementComponent />
    </MainLayout>
  );
};

export default Profile;
