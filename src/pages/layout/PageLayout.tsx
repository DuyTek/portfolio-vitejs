import { styled } from '@mui/material';
import Tabs from '../../Tabs';
import { Outlet } from 'react-router-dom';

const AppContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	width: '100vw',
	height: '100vh',
	flexDirection: 'column',
	padding: theme.spacing(9, 9, 0, 9),
}));

const Outer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	background: theme.palette.background.paper,
	height: '100%',
	width: '100%',
	flexGrow: 1,
	flexShrink: 0,
	overflow: 'auto',
}));

export default function PageLayout() {
	return (
		<AppContainer>
			<Outer>
				<Tabs />
				<Outlet />
			</Outer>
		</AppContainer>
	);
}
