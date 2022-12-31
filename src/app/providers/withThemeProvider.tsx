import { ThemeProvider } from '@emotion/react';

import { THEME } from '@/shared/utils/theme';

export const withThemeProvider = (component: () => React.ReactNode) => () =>
  <ThemeProvider theme={THEME}>{component()}</ThemeProvider>;
