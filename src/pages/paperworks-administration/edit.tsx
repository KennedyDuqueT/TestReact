import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { TabsContainer } from '@/components/paperworks';
import { MainLayout } from '@/layouts';
import { useTranslation } from '@/hooks';
import { usePaperworks } from '@/context';

const EditPaperwork = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  const { generalActions } = usePaperworks();

  useEffect(() => {
    generalActions?.getEditData(Number(id));
  }, []);

  return (
    <MainLayout title={`${t('paperworks.update.pageTitle')} ${id}`}>
      <TabsContainer />
    </MainLayout>
  );
};

export default EditPaperwork;
