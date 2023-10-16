import React, { useEffect } from 'react';
import { useInvoiceStatusTypeConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import {
  InvoiceStatusTypeCreateDialog,
  InvoiceStatusTypeDeleteDialog,
  InvoiceStatusTypeList,
  InvoiceStatusTypeUpdateDialog,
} from '@/components/portfolio';
import { ActionButtons, CommonButton, WrapperForm } from '@/components';
import { useRouter } from 'next/router';
import { DialogActions } from '@/models/commons';

const InvoiceStatusTypeConfigPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions } = useInvoiceStatusTypeConfig();

  useEffect(() => {
    actions?.getAll();
  }, []);

  const entityName = t('portfolio.invoiceStatusTypeConfig.entityName');
  const fullEntityName = t('portfolio.invoiceStatusTypeConfig.fullEntityName');

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
    <MainLayout title={t('portfolio.invoiceStatusTypeConfig.pageTitle')}>
      <WrapperForm title={t('portfolio.invoiceStatusTypeConfig.tableTitle')} variant="secondary">
        <InvoiceStatusTypeList />

        <ActionButtons buttons={buttons} />
      </WrapperForm>

      <InvoiceStatusTypeCreateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <InvoiceStatusTypeUpdateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <InvoiceStatusTypeDeleteDialog entityName={entityName} fullEntityName={fullEntityName} />
    </MainLayout>
  );
};

export default InvoiceStatusTypeConfigPage;
