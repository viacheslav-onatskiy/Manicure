import { createContext, useContext } from 'react';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

const ThemeContext = createContext(theme);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
