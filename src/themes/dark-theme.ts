import type {} from '@mui/x-data-grid/themeAugmentation';
import { PaletteOptions, createTheme } from '@mui/material';
import { getOverrides } from './config/overrides';
import { colors } from './config/colors';
import { BasicPalette } from './config/types';
import { darkPalette } from './config/dark';

const COLOR_SCHEME = 'green';

const palette: PaletteOptions = {
  ...darkPalette,
  mode: 'dark',
  primary: colors[COLOR_SCHEME].primaryDark,
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
    tableBtnEdit: '#7AC869',
    draggableListEvens: '#FFFFFF',
    draggableListOdds: '#f6f6f6',
  },
};

export const darkTheme = createTheme({
  palette: palette,
  typography: {
    fontFamily: 'Raleway, sans-serif',
  },
  // shadows: { ...getShadows(palette as BasicPalette) },
  components: { ...getOverrides(palette as BasicPalette) },
});
