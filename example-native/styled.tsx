import { StyleSheet } from 'react-native';
import { createCss } from './lib';

const { styled, css, theme, ThemeProvider } = createCss({
  theme: {
    colors: {
      primary: '#301b96',
      primaryDark: '#0D0630',
      primaryLight: '#ab9cf7',
      secondary: '#8BBEB2',
      secondaryDark: '#384d48',
      secondaryLight: '#d9fff6',
      background: '#fff',
    },
    space: {
      1: 4,
      2: 8,
      3: 16,
      4: 24,
      5: 32,
      6: 40,
      7: 56,
      8: 72,
      9: 96,
    },
    sizes: {
      hairlineWidth: StyleSheet.hairlineWidth,
    },
    radii: {
      sm: 4,
      md: 8,
      lg: 24,
      full: 999,
    },
  },
  utils: {
    size: () => (value: number) => ({
      width: value,
      height: value,
    }),
    flexCenter: () => (value: 'row' | 'column' = 'row') => ({
      flexDirection: value,
      justifyContent: 'center',
      alignItems: 'center',
    }),
    absoluteFill: () => () => StyleSheet.absoluteFillObject,
  },
  media: {
    // TODO: expo-device only has `getDeviceTypeAsync` but these values need to be sync...
    phone: true,
    tablet: false,
  },
});

const darkTheme = theme({
  colors: {
    background: '#222',
  },
});

export { styled, css, theme, darkTheme, ThemeProvider };
