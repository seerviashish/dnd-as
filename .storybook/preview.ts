import '@fontsource/material-icons';
import '@fontsource/open-sans/300-italic.css';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400-italic.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500-italic.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600-italic.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700-italic.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800-italic.css';
import '@fontsource/open-sans/800.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';

const getTheme = (mode?: 'dark' | 'light') =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode,
      },
    })
  );

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
  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      themes: {
        light: getTheme('light'),
        dark: getTheme('dark'),
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
