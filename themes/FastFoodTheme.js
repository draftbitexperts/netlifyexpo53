import { systemWeights } from 'react-native-typography';
import palettes from './palettes';
import { createTheme, DefaultTheme } from '@draftbit/ui';
export default createTheme({
  breakpoints: {},
  palettes,
  baseTheme: DefaultTheme,
  theme: {
    name: 'FastFood Theme',
    colors: {
      background: {
        base: {
          default: palettes.Brand.Background,
          dark: palettes.Brand['Background Dark'],
        },
        brand: {
          default: palettes.Brand.Primary,
          dark: palettes.Brand.Primary,
        },
        danger: palettes.Brand.Error,
      },
      border: {
        base: {
          default: palettes.Brand.Divider,
          dark: palettes.Brand.Divider,
        },
        brand: palettes.Brand.Divider,
        danger: palettes.Brand.Error,
      },
      branding: {
        accent: {
          default: palettes.Brand.Warning,
          dark: palettes.Brand.Warning,
        },
        primary: {
          default: palettes.Brand.Primary,
          dark: palettes.Brand.Primary,
        },
        secondary: {
          default: palettes.Brand.Secondary,
          dark: palettes.Brand.Secondary,
        },
      },
      foreground: {
        base: {
          default: palettes.Brand.Light,
          dark: palettes.Brand.Light,
        },
        brand: {
          default: palettes.Brand.Light,
          dark: palettes.Brand['Light Inverse'],
        },
        danger: palettes.Brand.Light,
      },
      text: {
        danger: palettes.Brand.Error,
        light: palettes.Brand.Light,
        medium: {
          default: palettes.Brand.Medium,
          dark: palettes.Brand['Medium Inverse'],
        },
        normal: {
          default: palettes.Brand.Strong,
          dark: palettes.Brand.Strong,
        },
        strong: {
          default: palettes.Brand.Strong,
          dark: palettes.Brand['Strong Inverse'],
        },
      },
    },
    typography: {
      body1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 26,
        letterSpacing: 0,
      },
      body2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 0,
      },
      button: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.bold ?? {}),
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0,
      },
      caption: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0,
      },
      headline1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.bold ?? {}),
        fontWeight: '700',
        fontSize: 60,
        lineHeight: 71,
        letterSpacing: 0,
      },
      headline2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.bold ?? {}),
        fontWeight: '700',
        fontSize: 48,
        lineHeight: 58,
        letterSpacing: 0,
      },
      headline3: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.bold ?? {}),
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 40,
        letterSpacing: 0,
      },
      headline4: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.bold ?? {}),
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 34,
        letterSpacing: 0,
      },
      headline5: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.bold ?? {}),
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 26,
        letterSpacing: 0,
      },
      headline6: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.bold ?? {}),
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
      },
      overline: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 2,
      },
      subtitle1: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 26,
        letterSpacing: 0,
      },
      subtitle2: {
        ...(({ backgroundColor, ...o }) => o)(systemWeights.regular ?? {}),
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 0,
      },
    },
  },
});
