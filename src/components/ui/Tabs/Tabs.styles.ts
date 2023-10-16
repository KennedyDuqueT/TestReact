import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab, { TabProps } from '@mui/material/Tab';

export const AntTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.common.tabsContainerBackground,
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0px 1px 4px 0px #00335F99',
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

export const AntTab = styled(Tab)<TabProps>(({ theme }) => ({
  textTransform: 'capitalize',
  minWidth: 0,
  borderRadius: '5px',
  padding: '1px 12px',
  marginRight: '20px',
  color: theme.palette.common.tabsColorText,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  backgroundColor: theme.palette.common.tabsColorTab,
  minHeight: '30px',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    opacity: 1,
  },
  '&.Mui-selected': {
    color: theme.palette.common.tabsColorTextSelected,
    backgroundColor: theme.palette.common.tabsColorTabSelected,
    fontWeight: theme.typography.fontWeightMedium,
    borderRadius: '5px',
  },
}));

export const childrenContainer = {
  backgroundColor: 'white',
  padding: '10px 16px',
  marginTop: '16px',
  borderRadius: '10px',
  boxShadow: '0px 1px 4px 0px #00335F99',
};

export const childrenContainerClear = {
  marginTop: '16px',
};

export const tabTitle = { alignItems: 'center', display: 'flex', columnGap: 10 };
