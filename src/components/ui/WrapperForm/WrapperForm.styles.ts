import { Theme, CSSObject } from '@mui/material/styles';

export const wrapperStyle = (theme: Theme): CSSObject => ({
  background: theme.palette.common.wrapperFormTitle,
  boxShadow: '0px 1px 4px rgba(0, 51, 95, 0.6)',
  borderRadius: '10px',
  width: '100%',
});

export const wrapperSecondaryStyle = (theme: Theme): CSSObject => ({
  background: theme.palette.common.wrapperFormTitle,
  borderRadius: '10px',
});

export const titleStyle = (theme: Theme): CSSObject => ({
  padding: '20px',
  paddingLeft: '30px',
  backgroundColor: theme.palette.common.wrapperFormHeaderBg,
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  color: 'white',
  fontSize: '21px',
  fontWeight: '700',
  borderBottom: `5px solid ${theme.palette.common.wrapperFormHLineBg}`,
});

export const titleSecondaryStyle = (theme: Theme): CSSObject => ({
  padding: '20px',
  paddingLeft: '30px',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  color: theme.palette.common.wrapperFormTitleSecondary,
  fontSize: '21px',
  fontWeight: '700',
  borderBottom: `1px solid ${theme.palette.common.wrapperFormHLineBgSecondary}`,
  marginLeft: '20px',
  marginRight: '20px',
});

export const childrenStyle = (): CSSObject => ({
  padding: '25px',
  borderRadius: '10px',
});
