import React, { useEffect } from 'react';
import { useCurrencyExchangeRateConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { MainLayout } from '@/layouts';
import {
  CurrencyExchangeRateCreateDialog,
  CurrencyExchangeRateDeleteDialog,
  CurrencyExchangeRateList,
  CurrencyExchangeRateUpdateDialog,
} from '@/components/portfolio';
import { ActionButtons, CommonButton, WrapperForm } from '@/components';
import { useRouter } from 'next/router';
import { DialogActions } from '@/models/commons';

const CurrencyExchangeRateConfigPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions } = useCurrencyExchangeRateConfig();

  useEffect(() => {
    actions?.getAll();
  }, []);

  const entityName = t('portfolio.currencyExchangeRateConfig.entityName');
  const fullEntityName = t('portfolio.currencyExchangeRateConfig.fullEntityName');

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
    <MainLayout title={t('portfolio.currencyExchangeRateConfig.pageTitle')}>
      <WrapperForm title={t('portfolio.currencyExchangeRateConfig.tableTitle')} variant="secondary">
        <CurrencyExchangeRateList />

        <ActionButtons buttons={buttons} />
      </WrapperForm>

      <CurrencyExchangeRateCreateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <CurrencyExchangeRateUpdateDialog entityName={entityName} fullEntityName={fullEntityName} />
      <CurrencyExchangeRateDeleteDialog entityName={entityName} fullEntityName={fullEntityName} />
    </MainLayout>
  );
};

export default CurrencyExchangeRateConfigPage;
