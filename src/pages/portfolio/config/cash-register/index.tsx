import React, { useEffect } from 'react';
import { useCashRegisterConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import { CashRegisterCreateDialog, CashRegisterDeleteDialog, CashRegisterList, CashRegisterUpdateDialog } from '@/components/portfolio';
import { ActionButtons, CommonButton, WrapperForm } from '@/components';
import { useRouter } from 'next/router';
import { DialogActions } from '@/models/commons';

const CashRegisterConfigPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions } = useCashRegisterConfig();

  const getInitialData = async () => {
    await actions?.getAllCatalogData();
    await actions?.getAll();
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const entityName = t('portfolio.cashRegisterConfig.entityName');
  const fullEntityName = t('portfolio.cashRegisterConfig.fullEntityName');

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
    <MainLayout title={t('portfolio.cashRegisterConfig.pageTitle')}>
      <WrapperForm title={t('portfolio.cashRegisterConfig.tableTitle')} variant="secondary">
        <CashRegisterList />

        <ActionButtons buttons={buttons} />
      </WrapperForm>

      <CashRegisterCreateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <CashRegisterUpdateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <CashRegisterDeleteDialog entityName={entityName} fullEntityName={fullEntityName} />
    </MainLayout>
  );
};

export default CashRegisterConfigPage;
