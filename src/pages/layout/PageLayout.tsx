import { styled } from '@mui/material';
import Tabs from './Tabs';
import { Outlet } from 'react-router-dom';

const AppContainer = styled('div')(({ theme }) => ({
	boxShadow: theme.shadows[20],
	display: 'flex',
	width: '100vw',
	height: '100vh',
	flexDirection: 'column',
	padding: theme.spacing(1, 1, 0, 1),
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(0.5, 0.5, 0, 0.5),
	},
}));

const Outer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	background: 'transparent',
	boxShadow: theme.shadows[5],
	height: '100%',
	width: '100%',
	flexGrow: 1,
	flexShrink: 0,
	overflow: 'hidden', // Changed to hidden to prevent outer scroll
	[theme.breakpoints.down('sm')]: {
		overflow: 'hidden',
		WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
	},
}));

const TabsContainer = styled('div')(({ theme }) => ({
	position: 'sticky',
	top: 0,
	zIndex: theme.zIndex.appBar,
	backgroundColor: theme.palette.background.default,
	borderBottom: `1px solid ${theme.palette.grey[800]}`,
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
