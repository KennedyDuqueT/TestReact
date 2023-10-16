import { GridColDef } from '@mui/x-data-grid';
import { Table } from '@/components';
import { useCurrencyExchangeRateConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { DialogActions } from '@/models/commons';

export const CurrencyExchangeRateList = () => {
  const { t } = useTranslation();
  const { items, actions } = useCurrencyExchangeRateConfig();

  const columns: GridColDef[] = [
    { field: 'company', headerName: t('portfolio.currencyExchangeRateConfig.labels.company'), width: 200 },
    { field: 'baseCurrency', headerName: t('portfolio.currencyExchangeRateConfig.labels.baseCurrency'), width: 200 },
    { field: 'rateCurrency', headerName: t('portfolio.currencyExchangeRateConfig.labels.rateCurrency'), width: 200 },
    { field: 'rate', headerName: t('portfolio.currencyExchangeRateConfig.labels.rate'), width: 150 },
  ];

  return (
    <Table
      variant="secondary"
      columns={columns}
      rows={items}
      onEdit={(currencyExchangeRateId) => {
        actions?.selectOne(currencyExchangeRateId);

        setTimeout(() => {
          actions?.toggleDialogAction(DialogActions.UPDATE);
        }, 500);
      }}
      onDelete={(currencyExchangeRateId) => {
        actions?.selectOne(currencyExchangeRateId);
        actions?.toggleDialogAction(DialogActions.DELETE);
      }}
    />
  );
};
