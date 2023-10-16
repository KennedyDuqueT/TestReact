import React, { useEffect } from 'react';
import { useSupplyStatusConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import { SupplyStatusCreateDialog, SupplyStatusDeleteDialog, SupplyStatusList, SupplyStatusUpdateDialog } from '@/components/portfolio';
import { ActionButtons, CommonButton, WrapperForm } from '@/components';
import { useRouter } from 'next/router';
import { DialogActions } from '@/models/commons';

const SupplyStatusConfigPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions } = useSupplyStatusConfig();

  useEffect(() => {
    actions?.getAll();
  }, []);

  const entityName = t('portfolio.supplyStatusConfig.entityName');
  const fullEntityName = t('portfolio.supplyStatusConfig.fullEntityName');

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
    <MainLayout title={t('portfolio.supplyStatusConfig.pageTitle')}>
      <WrapperForm title={t('portfolio.supplyStatusConfig.tableTitle')} variant="secondary">
        <SupplyStatusList />

        <ActionButtons buttons={buttons} />
      </WrapperForm>

      <SupplyStatusCreateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <SupplyStatusUpdateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <SupplyStatusDeleteDialog entityName={entityName} fullEntityName={fullEntityName} />
    </MainLayout>
  );
};

export default SupplyStatusConfigPage;
