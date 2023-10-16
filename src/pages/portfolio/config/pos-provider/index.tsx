import React, { useEffect } from 'react';
import { usePosProviderConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import { PosProviderCreateDialog, PosProviderDeleteDialog, PosProviderList, PosProviderUpdateDialog } from '@/components/portfolio';
import { ActionButtons, CommonButton, WrapperForm } from '@/components';
import { useRouter } from 'next/router';
import { DialogActions } from '@/models/commons';

const PosProviderConfigPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions } = usePosProviderConfig();

  useEffect(() => {
    actions?.getAll();
  }, []);

  const entityName = t('portfolio.posProviderConfig.entityName');
  const fullEntityName = t('portfolio.posProviderConfig.fullEntityName');

  const buttons: CommonButton[] = [
    {
      label: t('components.button.cancel'),
      type: 'cancel',
      onClick: router.back,
    },
    {
      label: t('catalog.actions.create', { entityName }),
      type: 'primary',
      onClick: () => actions?.toggleDialogAction(DialogActions.CREATE),
    },
  ];

  return (
    <MainLayout title={t('portfolio.posProviderConfig.pageTitle')}>
      <WrapperForm title={t('portfolio.posProviderConfig.tableTitle')} variant="secondary">
        <PosProviderList />

        <ActionButtons buttons={buttons} />
      </WrapperForm>

      <PosProviderCreateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <PosProviderUpdateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <PosProviderDeleteDialog entityName={entityName} fullEntityName={fullEntityName} />
    </MainLayout>
  );
};

export default PosProviderConfigPage;
