import compose from 'compose-function';

import { withThemeProvider } from '@/app/providers/withThemeProvider';
import { withRPSSocketProvider } from '@/app/providers/withRPSSocketProvider';

export const withProviders = compose(withThemeProvider, withRPSSocketProvider);
