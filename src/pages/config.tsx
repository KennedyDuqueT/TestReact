import { ChangeEvent, FC } from 'react';
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

import { useTranslation } from '@/hooks';
import { useTheme } from '@/context/theme';
import { MainLayout } from '@/layouts';

const ConfigPage: FC = () => {
  const { theme, actions } = useTheme();
  const { t, changeLanguage, language } = useTranslation();

  const onChangeTheme = (event: ChangeEvent<HTMLInputElement>) => actions?.onSelectTheme(event.target.value);
  const onSelectLanguage = (event: ChangeEvent<HTMLInputElement>) => changeLanguage(event.target.value);

  return (
    <MainLayout>
      <h1>{t('configView.title')}</h1>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>{t('theme.selectTheme')}</FormLabel>

            <RadioGroup value={theme} onChange={onChangeTheme}>
              <FormControlLabel value="light" control={<Radio />} label={t('theme.light')} />

              <FormControlLabel value="dark" control={<Radio />} label={t('theme.dark')} />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <FormControl>
            <FormLabel>{t('language.selectLanguage')}</FormLabel>

            <RadioGroup value={language} onChange={onSelectLanguage}>
              <FormControlLabel value="es" control={<Radio />} label={t('language.es')} />

              <FormControlLabel value="en" control={<Radio />} label={t('language.en')} />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default ConfigPage;
