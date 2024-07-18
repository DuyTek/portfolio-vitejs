import { ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import theme from './theme';

export default function AppProviders({ children }: PropsWithChildren) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
