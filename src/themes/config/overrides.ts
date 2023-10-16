import type {} from '@mui/x-data-grid/themeAugmentation';
import { Components, Theme } from '@mui/material';
import { BasicPalette } from './types';

export const getOverrides = (palette: BasicPalette): Components<Omit<Theme, 'components'>> => {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.common.fieldBorder,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: palette.common.fieldLabelFocused,
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          '& .main-app-sidebar': {
            backdropFilter: `blur(${palette.mode === 'dark' ? 20 : 12}px)`,
            background: 'transparent',
            backgroundColor: '#adaeb1',
            boxShadow: `${palette.mode === 'dark' ? 'rgba(19, 20, 22, 0.5)' : 'rgba(145, 158, 171, 0.34)'} -40px 40px 80px -8px`,
            backgroundImage: 'url(/sidebar-bg.png)',
            backgroundPosition: 'right 300px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRight: 'none',
          },
        },
        paper: {},
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          top: 0,
          position: 'fixed',
          background: 'linear-gradient(to bottom, #085446, #1c6951, #327e59, #4b945f, #67a964)',
          backdropFilter: 'blur(6px)',
          borderBottom: `7px solid #67A964`,
          zIndex: 1,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
          '& .MuiTableCell-root': {
            borderLeft: '1px solid rgba(224, 224, 224, 1)',
          },
        },
        columnHeaderTitle: {
          fontSize: '16px',
        },
        cell: {
          borderBottom: 'none',
          paddingLeft: '20px',
        },
        row: {
          '&:nth-of-type(odd)': {
            backgroundColor: 'white',
          },
          '&:nth-of-type(even)': {
            backgroundColor: '#F6F6F6',
          },
        },
      },
    },
  };
};
