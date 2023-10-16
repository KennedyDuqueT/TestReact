import React, { useEffect } from 'react';
import { MainLayout } from '@/layouts';
import { AccordionSectionButtons } from '@/components';
import { useTranslation } from '@/hooks';
import { useRouter } from 'next/router';
import { useWorkflow } from '@/context';

const Dashboard = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions, paperworkSection } = useWorkflow();

  const handlePaperworkSelected = async (item: any) => {
    const dataExist = await actions?.getWorkflow(item.id, item.title);

    if (dataExist) {
      router.push('/customer-experience/workflow');
    }
  };

  useEffect(() => {
    actions?.getPaperworksList();
  }, []);

  return (
    <MainLayout title={t('workflow.title')}>
      <span>{t('workflow.description')}</span>
      {paperworkSection.length > 0 ? (
        <AccordionSectionButtons data={paperworkSection} onClick={handlePaperworkSelected} />
      ) : (
        <p>{t('workflow.nullData')}</p>
      )}
    </MainLayout>
  );
};

export default Dashboard;
