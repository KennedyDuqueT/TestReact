import { Theme, CSSObject } from '@mui/material/styles';

export const greenText = (theme: Theme): CSSObject => ({
  color: theme.palette.common.wrapperFormHeaderBg,
  fontWeight: '700',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: 16,
  marginLeft: 3,
  marginTop: 0.5,
  letterSpacing: '0.46px',
});
