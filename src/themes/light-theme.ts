import { PaletteOptions, createTheme } from '@mui/material';
import { getOverrides } from './config/overrides';
import { colors } from './config/colors';
import { BasicPalette } from './config/types';
import { lightPalette } from './config/light';

const COLOR_SCHEME = 'green';

const palette: PaletteOptions = {
  ...lightPalette,
  mode: 'light',
  primary: colors[COLOR_SCHEME].primary,
  secondary: colors[COLOR_SCHEME].secondary,
  common: {
    black: '#1D1D1D',
    white: '#fff',
    tabsContainerBackground: 'white',
    tabsColorTab: '#DBDBDA',
    tabsColorText: '#868686',
    tabsColorTabSelected: '#868686',
    tabsColorTextSelected: 'white',
    wrapperFormHeaderBg: '#2A6441',
    wrapperFormHLineBg: '#7AC869',
    wrapperFormHLineBgSecondary: '#D9D9D9',
    wrapperFormTitle: 'white',
    wrapperFormTitleSecondary: '#489A6C',
    fieldBorder: '#01673F',
    fieldLabelFocused: '#3E5060',
    sideBarMenuBg: '#697479',
    sideBarMenuHoverBg: '#474f53',
    sideBarSubMenuBg: '#e4e4ec',
    sideBarSubMenuHoverBg: '#e4e4ec',
    sideBarMenuActiveBg: '#474f53',
    breadcrumbColor: '#ADAEB1',
    breadcrumbLastColor: '#51678F',
    pageTitleColor: '#4D4D4F',
    tableBtnEdit: '#7AC869',
    draggableListEvens: '#FFFFFF',
    draggableListOdds: '#f6f6f6',
  },
};

export const lightTheme = createTheme({
  palette: palette,
  typography: {
    fontFamily: 'Raleway, sans-serif',
  },
  // shadows: { ...getShadows(palette as BasicPalette) },
  components: { ...getOverrides(palette as BasicPalette) },
});
