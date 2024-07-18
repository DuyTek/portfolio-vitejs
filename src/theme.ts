import { createTheme } from '@mui/material/styles';

// Define a color palette
const palette = {
	primary: {
		main: '#0A84FF', // Vibrant blue for primary actions
		contrastText: '#ffffff', // White text on primary color
	},
	secondary: {
		main: '#30D158', // Subdued green for secondary elements
		contrastText: '#000000', // Black text on secondary color
	},
	background: {
		default: '#1E1E1E', // Dark background for the main elements
		paper: '#252526', // Slightly lighter for components like cards and sheets
	},
	text: {
		primary: '#ffffff', // Primary text color
		secondary: '#d0d0d0', // Secondary text color for less emphasis
	},
};

// Define typography
const typography = {
	fontFamily: ['"Roboto Mono"', '"Monaco"', 'monospace'].join(','), // A stack of monospaced fonts for that coding vibe
	fontSize: 14, // Base font size
	h1: {
		fontSize: '2.25rem', // Example customization for h1
	},
	// Add more customizations for other text variants as needed
};

// Create the theme with the defined palette and typography
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
