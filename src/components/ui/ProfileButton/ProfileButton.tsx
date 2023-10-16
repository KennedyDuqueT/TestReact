import { Avatar, Typography, ButtonBase } from '@mui/material';
import { useTranslation } from '@/hooks';
import { useRouter } from 'next/router';

export const ProfileButton = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const user = 'Prueba';


  const handleClick = () => {
    router.push('/profile');
  };

  return (
    <ButtonBase onClick={handleClick}>
      <Typography mx={1} mr={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
        {t('greetings', { user })}
      </Typography>
    </ButtonBase>
  );
};
