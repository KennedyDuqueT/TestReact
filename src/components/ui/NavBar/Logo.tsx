import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTheme } from '@/context';
import { ButtonBase } from '@mui/material';
import { BrothersLogo } from '@/assets/index';

export const Logo = () => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <ButtonBase onClick={() => router.push('/')}>
      <Image src={theme === 'light' ? BrothersLogo : BrothersLogo} alt="App logo" />
    </ButtonBase>
  );
};
