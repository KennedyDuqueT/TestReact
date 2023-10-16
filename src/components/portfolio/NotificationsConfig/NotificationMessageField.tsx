import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { Box, Grid, List, ListItem, ListItemButton, ListItemText, ListSubheader, Typography } from '@mui/material';
import { TextArea } from '@/components/ui';
import { useNotificationConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { NotificationDynamicVar } from '@/models/portfolio';

interface Props {
  control: any;
  errors?: any;
  onChange: (message: string) => void;
}

export const NotificationMessageField: FC<Props> = ({ control, errors, onChange }) => {
  const { t } = useTranslation();
  const { dynamicVars } = useNotificationConfig();

  const value = useWatch({ control, name: 'message' });

  const appendDynamicVar = (dynamicVar: NotificationDynamicVar) => {
    const newValue = `${value} ${dynamicVar.value}`;

    onChange(newValue);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <TextArea
          name="message"
          label={t('portfolio.notificationConfig.message')}
          rules={{ required: t('formValidationsErrors.requiredErrorLabel') }}
          errors={errors}
          control={control}
          rows={10}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Box height={1} sx={{ position: 'relative', backgroundColor: 'red', maxHeight: 263 }}>
          <List sx={{ bgcolor: 'background.paper', overflow: 'auto', height: 1 }} aria-label="contacts">
            <ListSubheader>
              <Typography variant="caption" fontWeight={600}>
                Variables dinámicas:
              </Typography>
              {dynamicVars.map((dynamicVar) => (
                <ListItem disablePadding key={dynamicVar.name}>
                  <ListItemButton onClick={() => appendDynamicVar(dynamicVar)}>
                    <ListItemText primary={dynamicVar.name} primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </ListSubheader>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};
