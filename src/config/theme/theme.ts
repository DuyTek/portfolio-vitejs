import { createTheme, ThemeOptions } from '@mui/material/styles';

// Liquid Glass Theme - Light Mode
const palette = {
	mode: 'light' as const,
	primary: {
		main: '#63b3ed', // Serene blue
		light: '#bee3f8',
		dark: '#2b77c7',
		contrastText: '#ffffff',
	},
	secondary: {
		main: '#68d391', // Soft mint
		light: '#c6f6d5',
		dark: '#2f855a',
		contrastText: '#ffffff',
	},
	warning: {
		main: '#f59e0b',
		light: '#fef3c7',
		dark: '#d97706',
		contrastText: '#000000',
	},
	error: {
		main: '#ef4444',
		light: '#fee2e2',
		dark: '#dc2626',
		contrastText: '#ffffff',
	},
	info: {
		main: '#3b82f6',
		light: '#dbeafe',
		dark: '#1d4ed8',
		contrastText: '#ffffff',
	},
	success: {
		main: '#10b981',
		light: '#d1fae5',
		dark: '#047857',
		contrastText: '#ffffff',
	},
	background: {
		default: '#f8fafc', // Light ethereal background
		paper: 'rgba(255, 255, 255, 0.25)', // Glass effect
	},
	text: {
		primary: '#1e293b', // Dark text for contrast
		secondary: '#475569',
	},
	grey: {
		50: '#f8fafc',
		100: '#f1f5f9',
		200: '#e2e8f0',
		300: '#cbd5e1',
		400: '#94a3b8',
		500: '#64748b',
		600: '#475569',
		700: '#334155',
		800: '#1e293b',
		900: '#0f172a',
	},
};

const typography = {
	fontFamily: [
		'Inter',
		'SF Pro Display',
		'-apple-system',
		'BlinkMacSystemFont',
		'Segoe UI',
		'Roboto',
		'sans-serif',
	].join(','),
	fontSize: 16, // Base 16px for better readability
	h1: {
		fontSize: 'clamp(2.5rem, 5vw, 4rem)',
		fontWeight: 700,
		lineHeight: 1.1,
		letterSpacing: '-0.025em',
	},
	h2: {
		fontSize: 'clamp(2rem, 4vw, 3rem)',
		fontWeight: 600,
		lineHeight: 1.2,
		letterSpacing: '-0.02em',
	},
	h3: {
		fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
		fontWeight: 600,
		lineHeight: 1.3,
		letterSpacing: '-0.015em',
	},
	body1: {
		fontSize: '1rem',
		fontWeight: 400,
		lineHeight: 1.7,
		letterSpacing: '0.01em',
	},
	body2: {
		fontSize: '0.875rem',
		fontWeight: 400,
		lineHeight: 1.6,
	},
};

const components: ThemeOptions['components'] = {
	MuiButton: {
		styleOverrides: {
			root: {
				textTransform: 'none',
				borderRadius: '12px',
				padding: '0.75rem 1.5rem',
				minHeight: '48px',
				fontWeight: 500,
				letterSpacing: '0.01em',
				transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
			},
			contained: ({ theme }) => ({
				background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
				color: theme.palette.primary.contrastText,
				boxShadow: `0 4px 12px rgba(99, 179, 237, 0.3), 0 2px 6px rgba(99, 179, 237, 0.2)`,
				border: 'none',
				'&:hover': {
					background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
					transform: 'translateY(-2px)',
					boxShadow: `0 8px 20px rgba(99, 179, 237, 0.4), 0 4px 12px rgba(99, 179, 237, 0.3)`,
				},
				'&:active': {
					transform: 'translateY(0)',
					boxShadow: `0 2px 8px rgba(99, 179, 237, 0.3), 0 1px 4px rgba(99, 179, 237, 0.2)`,
				},
			}),
			outlined: ({ theme }) => ({
				background: 'rgba(255, 255, 255, 0.25)',
				backdropFilter: 'blur(12px)',
				WebkitBackdropFilter: 'blur(12px)',
				border: '1px solid rgba(255, 255, 255, 0.3)',
				color: theme.palette.primary.dark,
				boxShadow: `0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.4)`,
				'&:hover': {
					background: 'rgba(255, 255, 255, 0.35)',
					borderColor: theme.palette.primary.main,
					color: theme.palette.primary.main,
					transform: 'translateY(-1px)',
					boxShadow: `0 6px 16px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.5)`,
				},
			}),
		},
	},
	MuiPaper: {
		styleOverrides: {
			root: {
				background: 'rgba(255, 255, 255, 0.25)',
				backdropFilter: 'blur(16px)',
				WebkitBackdropFilter: 'blur(16px)',
				border: '1px solid rgba(255, 255, 255, 0.3)',
				borderRadius: '16px',
				boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.4)`,
			},
		},
	},
};

const theme = createTheme({
	palette,
	typography,
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
				
				/* Liquid Glass Theme CSS Variables */
				:root {
					/* Glass Effects */
					--glass-primary: rgba(255, 255, 255, 0.25);
					--glass-strong: rgba(255, 255, 255, 0.35);
					--glass-subtle: rgba(255, 255, 255, 0.15);
					--glass-minimal: rgba(255, 255, 255, 0.08);
					
					/* Glass Borders */
					--glass-border: rgba(255, 255, 255, 0.3);
					--glass-border-strong: rgba(255, 255, 255, 0.4);
					--glass-border-subtle: rgba(255, 255, 255, 0.2);
					
					/* Highlights */
					--highlight-inner: rgba(255, 255, 255, 0.4);
					--highlight-inner-strong: rgba(255, 255, 255, 0.5);
					--highlight-inner-subtle: rgba(255, 255, 255, 0.3);
				}
				
				/* Ethereal background gradient */
				body {
					background: linear-gradient(
						135deg,
						#f8fafc 0%,
						#e2e8f0 25%,
						#f1f5f9 50%,
						#e0e7ff 75%,
						#f8fafc 100%
					) !important;
					min-height: 100vh;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
				}
				
				/* Liquid Glass utility classes */
				.liquid-glass {
					background: var(--glass-primary) !important;
					backdrop-filter: blur(16px) !important;
					-webkit-backdrop-filter: blur(16px) !important;
					border: 1px solid var(--glass-border) !important;
					border-radius: 16px !important;
					box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 var(--highlight-inner) !important;
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
				}
				
				.liquid-glass:hover {
					background: var(--glass-strong) !important;
					transform: translateY(-2px) !important;
					box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 6px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 var(--highlight-inner-strong) !important;
				}
				
				.liquid-glass--subtle {
					background: var(--glass-subtle) !important;
					border-color: var(--glass-border-subtle) !important;
					backdrop-filter: blur(12px) !important;
					-webkit-backdrop-filter: blur(12px) !important;
				}
				
				.liquid-glass--strong {
					background: var(--glass-strong) !important;
					border-color: var(--glass-border-strong) !important;
					backdrop-filter: blur(20px) !important;
					-webkit-backdrop-filter: blur(20px) !important;
				}
			`,
		},
		...components,
	},
});

export default theme;
