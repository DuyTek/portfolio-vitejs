import { createTheme } from '@mui/material/styles';

const palette = {
	primary: {
		main: '#37B7C3',
		light: '#EBF4F6',
		dark: '#088395',
		contrastText: '#071952',
	},
	secondary: {
		main: '#DEF9C4',
		light: '#9CDBA6',
		dark: '#468585',
		contrastText: '#000000',
	},
	warning: {
		main: '#FFC107',
		light: '#FFECB3',
		dark: '#FFA000',
		contrastText: '#000000',
	},
	error: {
		main: '#FF5252',
		light: '#FFEBEE',
		dark: '#FF1744',
		contrastText: '#000000',
	},
	info: {
		main: '#FFFFFF',
		light: '#F5F5F5',
		dark: '#E0E0E0',
		contrastText: '#000000',
	},
	background: {
		default: '#1E1E1E',
		paper: '#252526',
	},
	text: {
		primary: '#ffffff',
		secondary: '#d0d0d0',
	},
	grey: {
		50: '#FAFAFA',
		100: '#F5F5F5',
		200: '#EEEEEE',
		300: '#E0E0E0',
		400: '#BDBDBD',
		500: '#9E9E9E',
		600: '#757575',
		700: '#616161',
		800: '#424242',
		900: '#212121',
	},
};

const typography = {
	fontFamily: ['"Roboto Mono"', '"Monaco"', 'monospace'].join(','),
	fontSize: 14,
	h1: {
		fontSize: '2.25rem',
	},
	fontWeight: {
		regular: 400,
		medium: 500,
		bold: 700,
	},
};

const theme = createTheme({
	palette,
	typography,
	components: {
		MuiCssBaseline: {
			styleOverrides: `
			@font-face {
				font-family: 'Roboto Mono';
			}
			`,
		},
	},
});

export default theme;
