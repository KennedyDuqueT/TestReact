import { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Grid } from '@mui/material';
import { TextField, Select, WrapperForm, PDFViewer, CurrencyField, Button } from '@/components/ui';
import { WorkflowButtons } from '@/components/customer-experience';
import { useInvoiceInitialAmount } from '@/context';
import { useTranslation } from '@/hooks';

interface FormValues {
  nameBusinessName: string;
  contractType: string;
  supplyNumber: string;
  invoiceUnitAmount: string;
}

const InvoiceInitialAmount: FC = () => {
  const { t } = useTranslation();
  const { catalogContractTypes, actions, pdfInvoice } = useInvoiceInitialAmount();
  const [openPdf, setOpenPdf] = useState(false);

  const { control, handleSubmit, formState } = useForm<FormValues>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { nameBusinessName, contractType, supplyNumber, invoiceUnitAmount } = data;

    const response = await actions?.getUrlPdfInvoice({
      nameBusinessName,
      contractType: Number(contractType),
      supplyNumber,
      invoiceUnitAmount,
    });

    if (response?.success) {
      setOpenPdf(true);
    }
  };

  const handleClosePdf = () => setOpenPdf(false);

  const fetchCatalogs = async () => {
    await actions?.getCatalogs();
  };

  useEffect(() => {
    fetchCatalogs();
  }, [pdfInvoice]);

  return (
    <WrapperForm title={t('customerExperience.invoiceInitialAmount.title')} variant="secondary">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4} mt={2} px={4} paddingBottom={4}>
          <Grid item xs={12} md={6}>
            <TextField
              name="nameBusinessName"
              label={t('customerExperience.invoiceInitialAmount.name')}
              control={control}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              name="contractType"
              label={t('customerExperience.invoiceInitialAmount.contractType')}
              control={control}
              options={catalogContractTypes}
              errors={errors}
              keyValue="id"
              keyLabel="name"
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="supplyNumber"
              label={t('customerExperience.invoiceInitialAmount.supplyNumber')}
              control={control}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CurrencyField
              name="invoiceUnitAmount"
              label={t('customerExperience.invoiceInitialAmount.amount')}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained" color="primary" type="submit">
              {t('customerExperience.invoiceInitialAmount.btnView')}
            </Button>
          </Grid>
          <PDFViewer
            base64={pdfInvoice}
            open={openPdf}
            title={t('customerExperience.invoiceInitialAmount.modalTitle')}
            handleClose={handleClosePdf}
          />
        </Grid>
      </form>
      <WorkflowButtons />
    </WrapperForm>
  );
};

export default InvoiceInitialAmount;
