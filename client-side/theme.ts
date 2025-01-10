'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'violet',
  colors: {
    violet: [
      '#f5e9ff',
      '#e4d4ff',
      '#d1bfff',
      '#b99eff',
      '#9e7fff',
      '#845fff',
      '#6b4aff',
      '#5430d9',
      '#3b1bb3',
      '#28118c',
    ],
  },
  primaryShade: {
    light: 4, // Use shade 6 in light mode
    dark: 8, // Use shade 8 in dark mode
  },
});
