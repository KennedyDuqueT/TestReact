import { UIModels } from '@/models';
import { styled, Theme } from '@mui/material';

interface Props {
  open: boolean;
  theme: Theme;
}

export const AnimatedContainer = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }: Props) => ({
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }
  ),
  [theme.breakpoints.up('md')]: {
    marginLeft: open ? UIModels.Sizes.SIDEBAR_WIDTH : UIModels.Sizes.SIDEBAR_COLLAPSED_WIDTH,
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    padding: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    padding: '16px',
    marginRight: '10px',
  },
}));
