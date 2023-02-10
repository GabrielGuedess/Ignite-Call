import { RouterContext } from 'next/dist/shared/lib/router-context';

import { themes } from '@storybook/theming';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  darkMode: {
    dark: { ...themes.dark, appBg: '#2F2F2F' },
    light: { ...themes.normal, appBg: '#FFFFFF' },
  },
  docs: {
    theme: themes.dark,
  },
};
