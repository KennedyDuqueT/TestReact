import React, { useEffect } from 'react';
import { usePaymentDealTypeConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import { PaymentDealTypeCreateDialog, PaymentDealTypeDeleteDialog, PaymentDealTypeList, PaymentDealTypeUpdateDialog } from '@/components/portfolio';
import { ActionButtons, CommonButton, WrapperForm } from '@/components';
import { useRouter } from 'next/router';
import { DialogActions } from '@/models/commons';

const PaymentDealTypeConfigPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions } = usePaymentDealTypeConfig();

  useEffect(() => {
    actions?.getAll();
  }, []);

  const entityName = t('portfolio.paymentDealTypeConfig.entityName');
  const fullEntityName = t('portfolio.paymentDealTypeConfig.fullEntityName');

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
    <MainLayout title={t('portfolio.paymentDealTypeConfig.pageTitle')}>
      <WrapperForm title={t('portfolio.paymentDealTypeConfig.tableTitle')} variant="secondary">
        <PaymentDealTypeList />

        <ActionButtons buttons={buttons} />
      </WrapperForm>

      <PaymentDealTypeCreateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <PaymentDealTypeUpdateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <PaymentDealTypeDeleteDialog entityName={entityName} fullEntityName={fullEntityName} />
    </MainLayout>
  );
};

export default PaymentDealTypeConfigPage;
