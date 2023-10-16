import { FC } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { Box, Grid } from '@mui/material';
import { Button, TextField } from '@/components';
import { useTranslation } from '@/hooks';

export interface Field {
  visible: boolean;
  required?: boolean;
}

export interface SearchFields {
  client?: Field;
  supply?: Field;
}

export interface SearchFormValues {
  client: string;
  supply: string;
}

interface Props {
  onSubmit: SubmitHandler<SearchFormValues>;
  onCancel: () => void;
  fields?: SearchFields;
}

const defaultSearchFields: SearchFields = {
  client: {
    visible: true,
    required: false,
  },
  supply: {
    visible: true,
    required: false,
  },
};

export const SearchByClientOrSupplyForm: FC<Props> = ({ onSubmit, onCancel, fields = defaultSearchFields }) => {
  const { t } = useTranslation();

  const form = useForm<SearchFormValues>({
    defaultValues: { client: '', supply: '' },
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const client = useWatch({ control, name: 'client' });
  const supply = useWatch({ control, name: 'supply' });

  const atLeastOneValue = client.length > 0 || supply.length > 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} mt={1}>
        {fields.client?.visible && (
          <Grid item xs={12}>
            <TextField
              name="client"
              label={t('portfolio.common.searchModal.clientLabel')}
              rules={fields.client?.required ? { required: t('formValidationsErrors.requiredErrorLabel') } : undefined}
              control={control}
              errors={errors}
            />
          </Grid>
        )}

        {fields.supply?.visible && (
          <Grid item xs={12}>
            <TextField
              name="supply"
              label={t('portfolio.common.searchModal.supplyLabel')}
              rules={fields.supply?.required ? { required: t('formValidationsErrors.requiredErrorLabel') } : undefined}
              control={control}
              errors={errors}
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" buttonType="cancel" onClick={onCancel}>
              {t('portfolio.debtTransferIndividual.buttons.cancel')}
            </Button>

            <Box sx={{ mr: 2 }} />

            <Button variant="contained" type="submit" buttonType="save" disabled={!isValid || !atLeastOneValue}>
              {t('portfolio.debtTransferIndividual.buttons.search')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
