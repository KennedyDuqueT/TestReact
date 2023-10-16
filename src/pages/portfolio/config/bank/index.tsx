import React, { useEffect } from 'react';
import { useBankConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import { BankCreateDialog, BankDeleteDialog, BankList, BankUpdateDialog } from '@/components/portfolio';
import { ActionButtons, CommonButton, WrapperForm } from '@/components';
import { useRouter } from 'next/router';
import { DialogActions } from '@/models/commons';

const BankConfigPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions } = useBankConfig();

  useEffect(() => {
    actions?.getAll();
  }, []);

  const entityName = t('portfolio.bankConfig.entityName');
  const fullEntityName = t('portfolio.bankConfig.fullEntityName');

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
    <MainLayout title={t('portfolio.bankConfig.pageTitle')}>
      <WrapperForm title={t('portfolio.bankConfig.tableTitle')} variant="secondary">
        <BankList />

        <ActionButtons buttons={buttons} />
      </WrapperForm>

      <BankCreateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <BankUpdateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <BankDeleteDialog entityName={entityName} fullEntityName={fullEntityName} />
    </MainLayout>
  );
};

export default BankConfigPage;
