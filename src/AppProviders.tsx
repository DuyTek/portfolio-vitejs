import { CssBaseline, ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import theme from './theme';

export default function AppProviders({ children }: PropsWithChildren) {
	let node = children;
	node = <CssBaseline>{node}</CssBaseline>;
	node = <ThemeProvider theme={theme}>{node}</ThemeProvider>;

	return node;
}
