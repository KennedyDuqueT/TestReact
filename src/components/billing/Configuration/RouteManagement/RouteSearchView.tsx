import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { BillingModels } from '@/models';
import { useTranslation } from '@/hooks';
import { Select, TextField, Button } from '@/components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { routeInitialValue } from '@/models/billing';
import { useRouteManagement } from '@/context/billing';

interface RouteSearchViewProps {
  onSearch: SubmitHandler<BillingModels.RouteInterface>;
  onCancel: () => void;
}

const RouteSearchViewComponent: FC<RouteSearchViewProps> = ({ onSearch, onCancel }) => {
  const { t } = useTranslation();
  const { cycles } = useRouteManagement();
  const form = useForm<BillingModels.RouteInterface>({
    defaultValues: routeInitialValue,
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  return (
    <>
      <form onSubmit={handleSubmit(onSearch)}>
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label={t('billing.maintenance.routesManagement.routeCodeTableLabel')}
              errors={errors}
              rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Select
              name="cycleId"
              label={t('billing.maintenance.routesManagement.cycleTableLabel')}
              rules={{
                required: t('formValidationsErrors.requiredErrorLabel'),
              }}
              control={control}
              options={cycles}
              errors={errors}
              keyValue="id"
              keyLabel="name"
            />
          </Grid>
        </Grid>
        <Grid container mt={4} justifyContent="flex-end">
          <Box ml={2}>
            <Button variant="contained" buttonType="cancel" onClick={onCancel}>
              {t('billing.maintenance.routesManagement.cancelButtonLabel')}
            </Button>
          </Box>
          <Box ml={2}>
            <Button variant="contained" type="submit" buttonType="save" disabled={!isValid}>
              {t('billing.maintenance.routesManagement.searchButtonLabel')}
            </Button>
          </Box>
        </Grid>
      </form>
    </>
  );
};

export default RouteSearchViewComponent;
