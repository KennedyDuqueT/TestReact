import React, { useEffect } from 'react';
import { useHomologatedTableConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import {
  HomologatedTableDeviceCreateDialog,
  HomologatedTableDeviceDeleteDialog,
  HomologatedTableDeviceList,
  HomologatedTableDeviceUpdateDialog,
} from '@/components/portfolio';
import { ActionButtons, CommonButton, WrapperForm } from '@/components';
import { useRouter } from 'next/router';
import { DialogActions } from '@/models/commons';

const HomologatedTableDevicesConfigPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions } = useHomologatedTableConfig();

  useEffect(() => {
    actions?.getAll();
  }, []);

  const entityName = t('portfolio.homologatedTableDevicesConfig.entityName');
  const fullEntityName = t('portfolio.homologatedTableDevicesConfig.fullEntityName');

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
    <MainLayout title={t('portfolio.homologatedTableDevicesConfig.pageTitle')}>
      <WrapperForm title={t('portfolio.homologatedTableDevicesConfig.tableTitle')} variant="secondary">
        <HomologatedTableDeviceList />

        <ActionButtons buttons={buttons} />
      </WrapperForm>

      <HomologatedTableDeviceCreateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <HomologatedTableDeviceUpdateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <HomologatedTableDeviceDeleteDialog entityName={entityName} fullEntityName={fullEntityName} />
    </MainLayout>
  );
};

export default HomologatedTableDevicesConfigPage;
