import { FC } from 'react';
import { useRouter } from 'next/router';
import { AppBar, Box, ButtonBase, IconButton, Toolbar, Tooltip } from '@mui/material';
import { ChevronLeftOutlined, Menu, NotificationsActiveOutlined, SettingsOutlined } from '@mui/icons-material';
import { ProfileButton } from '@/components';
import { useTranslation } from '@/hooks';
import { useUI } from '@/context';
import { Logo } from './Logo';

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { sideBarIsOpen, actions } = useUI();

  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Box width={1} display="flex" alignItems="center">
          <Box px={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Logo />
          </Box>

          <IconButton color="inherit" onClick={actions?.toggleSideBar}>
            {sideBarIsOpen ? <ChevronLeftOutlined /> : <Menu />}
          </IconButton>

          <Box display="flex" alignItems="center" sx={{ position: 'absolute', right: 16 }}>
            <Tooltip title={t('notifications')} arrow>
              <ButtonBase sx={{ p: 1 }}>
                <NotificationsActiveOutlined />
              </ButtonBase>
            </Tooltip>

            <Tooltip title={t('settings')} arrow>
              <ButtonBase sx={{ p: 1 }} onClick={() => router.push('/config')}>
                <SettingsOutlined />
              </ButtonBase>
            </Tooltip>

            <Box height={40} sx={{ borderLeft: '2px solid rgba(255, 255, 255, 0.25)', mx: 1, mr: 2 }} />

            <ProfileButton />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
