import { Interpolation, Theme as EmotionTheme } from '@emotion/react';

export const Colors = {
  PRIMARY: '#E3B04B',
  SECONDARY: '#F1D6AB',
  BLACK: '#2B2B28',
  WHITE: '#F8F8F8',
};

export const THEME: EmotionTheme = {
  colors: Colors,
};

export type Theme = typeof THEME;

export type RPSInterpolation = Interpolation<Theme>;
