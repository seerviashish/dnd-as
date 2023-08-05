import type { Preview } from '@storybook/react';
import { WithMuiTheme } from '../src/theme/index';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
  },
  decorators: [WithMuiTheme],
  globalTypes: {
    theme: {
      name: 'Theme',
      title: 'Theme',
      description: 'Theme for your components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        dynamicTitle: true,
        items: [
          { value: 'light', left: '🌞', title: 'Light mode' },
          { value: 'dark', left: '🌑', title: 'Dark mode' },
        ],
      },
    },
  },
};

export default preview;
