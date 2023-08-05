import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';
import { Decorator } from '@storybook/react';
import { useMemo } from 'react';

const getTheme = (mode?: 'dark' | 'light') =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode,
      },
    })
  );

export const WithMuiTheme: Decorator = (storyFn, context) => {
  const { theme: themeMode } = context.globals;
  const theme = useMemo(() => getTheme(themeMode), [themeMode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {storyFn(context)}
    </ThemeProvider>
  );
};
