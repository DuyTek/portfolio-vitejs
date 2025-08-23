import { styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Tabs from './Tabs';

// Styled Components
const AppContainer = styled('div')(({ theme }) => ({
	background: 'transparent', // Let the body gradient show through
	boxShadow: 'none', // Remove shadow for light theme
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
	padding: theme.spacing(1, 1, 0, 1),
	width: '100vw',
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(0.5, 0.5, 0, 0.5),
	},
}));

const ContentContainer = styled('div')(() => ({
	flex: 1,
	overflow: 'auto',
	WebkitOverflowScrolling: 'touch',
}));

const Inner = styled('div')(({ theme }) => ({
	padding: theme.spacing(3, 7),
	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(2, 3),
	},
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(1.5, 2),
	},
	[theme.breakpoints.down('xs')]: {
		padding: theme.spacing(1, 1.5),
	},
}));

const Outer = styled('div')(({ theme }) => ({
	WebkitBackdropFilter: 'blur(12px)',
	background: 'var(--glass-subtle)', // Liquid glass background
	backdropFilter: 'blur(12px)',
	border: '1px solid var(--glass-border-subtle)',
	borderRadius: '24px',
	boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 var(--highlight-inner)`,
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	flexShrink: 0,
	height: '100%',
	overflow: 'hidden',
	width: '100%',
	[theme.breakpoints.down('sm')]: {
		borderRadius: '16px',
		overflow: 'hidden',
		WebkitOverflowScrolling: 'touch',
	},
}));

const TabsContainer = styled('div')(({ theme }) => ({
	WebkitBackdropFilter: 'blur(16px)',
	background: 'var(--glass-primary)',
	backdropFilter: 'blur(16px)',
	border: 'none',
	borderBottom: `1px solid var(--glass-border)`,
	borderTopLeftRadius: '24px',
	borderTopRightRadius: '24px',
	position: 'sticky',
	top: 0,
	zIndex: theme.zIndex.appBar,
	[theme.breakpoints.down('sm')]: {
		borderTopLeftRadius: '16px',
		borderTopRightRadius: '16px',
	},
}));

export default function PageLayout() {
	return (
		<AppContainer>
			<Outer>
				<TabsContainer>
					<Tabs />
				</TabsContainer>
				<ContentContainer className="custom-scrollbar">
					<Inner>
						<Outlet />
					</Inner>
				</ContentContainer>
			</Outer>
		</AppContainer>
	);
}
