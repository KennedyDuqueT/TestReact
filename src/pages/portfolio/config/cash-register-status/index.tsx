import React, { useEffect } from 'react';
import { useCashRegisterStatusConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import {
  CashRegisterStatusCreateDialog,
  CashRegisterStatusDeleteDialog,
  CashRegisterStatusList,
  CashRegisterStatusUpdateDialog,
} from '@/components/portfolio';
import { ActionButtons, CommonButton, WrapperForm } from '@/components';
import { useRouter } from 'next/router';
import { DialogActions } from '@/models/commons';

const CashRegisterStatusConfigPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions } = useCashRegisterStatusConfig();

  useEffect(() => {
    actions?.getAll();
  }, []);

  const entityName = t('portfolio.cashRegisterStatusConfig.entityName');
  const fullEntityName = t('portfolio.cashRegisterStatusConfig.fullEntityName');

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
    <MainLayout title={t('portfolio.cashRegisterStatusConfig.pageTitle')}>
      <WrapperForm title={t('portfolio.cashRegisterStatusConfig.tableTitle')} variant="secondary">
        <CashRegisterStatusList />

        <ActionButtons buttons={buttons} />
      </WrapperForm>

      <CashRegisterStatusCreateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <CashRegisterStatusUpdateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <CashRegisterStatusDeleteDialog entityName={entityName} fullEntityName={fullEntityName} />
    </MainLayout>
  );
};

export default CashRegisterStatusConfigPage;
