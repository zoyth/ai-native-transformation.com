// ABOUTME: Brand theme configuration for the AI Native Transformation website.
// ABOUTME: Blue (#1a74e8) palette with PP Neue Montreal typography, matching kenogami look and feel.

import { type ThemeConfig } from '@zoyth/simple-site-framework';

export const theme: ThemeConfig = {
  brand: {
    name: 'AI Native Transformation',
    colors: {
      primary: '#1a74e8',
      primaryHover: '#1560c9',
      primaryLight: '#528ff9',
      primaryDark: '#092456',
      primaryGradientStart: '#f3f7fe',
      primaryGradientEnd: '#ffffff',
      heroGradientStart: '#092456',
      heroGradientEnd: '#1a74e8',
      footerGradientStart: '#092456',
      footerGradientEnd: '#1a74e8',
    },
    fonts: {
      heading: {
        family: 'PP Neue Montreal',
        weights: [400, 700, 900],
        fallback: 'system-ui, sans-serif',
      },
      body: {
        family: 'PP Neue Montreal',
        weights: [300, 400, 500, 700],
        fallback: 'system-ui, sans-serif',
      },
    },
  },
  design: {
    borderRadius: 'rounded',
    shadows: 'subtle',
    spacing: 'comfortable',
  },
  colors: {
    slate: {
      50: '#f3f7fe',
      100: '#d3e3fd',
      200: '#a8c7fc',
      300: '#7dabfa',
      400: '#528ff9',
      500: '#1a74e8',
      600: '#1560c9',
      700: '#114ca3',
      800: '#0d387c',
      900: '#092456',
    },
  },
};
