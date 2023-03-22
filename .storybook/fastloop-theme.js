// .storybook/YourTheme.js

import { create } from '@storybook/theming';
import logo from '../assets/fl-logo.png';
import palette from '../assets/fl-color-palette.json';

export default create({
  base: 'light',
  brandTitle: 'fastloop - Layout Components',
  brandUrl: 'https://fastloop.it',
  brandImage: logo,
  brandTarget: '_self',

  // colorPrimary: palette.aqua[500],
  // colorSecondary: palette.purple[500],

  // // UI
  // appBg: palette.neutral[100],
  // appBorderColor: palette.neutral[300],
  // appBorderRadius: 4,
  // gridCellSize: 8,

  // // Typography
  // fontBase: '"TG Praktikal", sans-serif',
  // fontCode: 'monospace',

  // // Text colors
  // textColor: palette.neutral[500],
  // textInverseColor: palette.neutral[100],

  // // Toolbar default and active colors
  // barTextColor: palette.neutral[500],
  // barSelectedColor: palette.purple[500],
  // // barBg: palette.neutral[100],

  // // Form colors
  // // inputBg: 'white',
  // // inputBorder: 'silver',
  // // inputBorderRadius: 4,
});
