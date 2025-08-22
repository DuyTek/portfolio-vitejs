import { styled } from '@mui/material';
import Tabs from './Tabs';
import { Outlet } from 'react-router-dom';

const AppContainer = styled('div')(({ theme }) => ({
	boxShadow: 'none', // Remove shadow for light theme
	display: 'flex',
	width: '100vw',
	height: '100vh',
	flexDirection: 'column',
	padding: theme.spacing(1, 1, 0, 1),
	background: 'transparent', // Let the body gradient show through
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(0.5, 0.5, 0, 0.5),
	},
}));

const Outer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	background: 'var(--glass-subtle)', // Liquid glass background
	backdropFilter: 'blur(12px)',
	WebkitBackdropFilter: 'blur(12px)',
	border: '1px solid var(--glass-border-subtle)',
	borderRadius: '24px',
	boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 var(--highlight-inner)`,
	height: '100%',
	width: '100%',
	flexGrow: 1,
	flexShrink: 0,
	overflow: 'hidden',
	[theme.breakpoints.down('sm')]: {
		borderRadius: '16px',
		overflow: 'hidden',
		WebkitOverflowScrolling: 'touch',
	},
}));

const TabsContainer = styled('div')(({ theme }) => ({
	position: 'sticky',
	top: 0,
	zIndex: theme.zIndex.appBar,
	background: 'var(--glass-primary)',
	backdropFilter: 'blur(16px)',
	WebkitBackdropFilter: 'blur(16px)',
	border: 'none',
	borderBottom: `1px solid var(--glass-border)`,
	borderTopLeftRadius: '24px',
	borderTopRightRadius: '24px',
	[theme.breakpoints.down('sm')]: {
		borderTopLeftRadius: '16px',
		borderTopRightRadius: '16px',
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
