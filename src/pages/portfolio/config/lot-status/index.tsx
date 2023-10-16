import React, { useEffect } from 'react';
import { useLotStatusConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import { LotStatusCreateDialog, LotStatusDeleteDialog, LotStatusList, LotStatusUpdateDialog } from '@/components/portfolio';
import { ActionButtons, CommonButton, WrapperForm } from '@/components';
import { useRouter } from 'next/router';
import { DialogActions } from '@/models/commons';

const LotStatusConfigPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions } = useLotStatusConfig();

  useEffect(() => {
    actions?.getAll();
  }, []);

  const entityName = t('portfolio.lotStatusConfig.entityName');
  const fullEntityName = t('portfolio.lotStatusConfig.fullEntityName');

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
    <MainLayout title={t('portfolio.lotStatusConfig.pageTitle')}>
      <WrapperForm title={t('portfolio.lotStatusConfig.tableTitle')} variant="secondary">
        <LotStatusList />

        <ActionButtons buttons={buttons} />
      </WrapperForm>

      <LotStatusCreateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <LotStatusUpdateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <LotStatusDeleteDialog entityName={entityName} fullEntityName={fullEntityName} />
    </MainLayout>
  );
};

export default LotStatusConfigPage;
