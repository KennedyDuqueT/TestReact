import React, { useEffect } from 'react';
import { usePosProviderConfig, usePosVerifoneConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import { PosVerifoneCreateDialog, PosVerifoneDeleteDialog, PosVerifoneList, PosVerifoneUpdateDialog } from '@/components/portfolio';
import { ActionButtons, CommonButton, WrapperForm } from '@/components';
import { useRouter } from 'next/router';
import { DialogActions } from '@/models/commons';

const PosVerifoneConfigPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions } = usePosVerifoneConfig();
  const { items: posProviders, actions: posProviderActions } = usePosProviderConfig();

  const getInitialData = async () => {
    await posProviderActions?.getAll();
  };

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    if (posProviders.length > 0) actions?.getAll();
  }, [posProviders]);

  const entityName = t('portfolio.posVerifoneConfig.entityName');
  const fullEntityName = t('portfolio.posVerifoneConfig.fullEntityName');

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
    <MainLayout title={t('portfolio.posVerifoneConfig.pageTitle')}>
      <WrapperForm title={t('portfolio.posVerifoneConfig.tableTitle')} variant="secondary">
        <PosVerifoneList />

        <ActionButtons buttons={buttons} />
      </WrapperForm>

      <PosVerifoneCreateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <PosVerifoneUpdateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <PosVerifoneDeleteDialog entityName={entityName} fullEntityName={fullEntityName} />
    </MainLayout>
  );
};

export default PosVerifoneConfigPage;
