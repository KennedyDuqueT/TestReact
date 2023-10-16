import React from 'react';
import { MainLayout } from '@/layouts';
import { ProfileComponent } from '@/components/auth/Profile/Profile';
import { useTranslation } from '@/hooks';

const Profile = () => {
  const { t } = useTranslation();
  return (
    <MainLayout title={t('profile.title')}>
      <ProfileComponent />
    </MainLayout>
  );
};

export default Profile;
