import { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const ThemeContext = createContext<any>(theme);

export const useTheme = () => {
  return useContext(ThemeContext);
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const Theme = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
