import { styled } from '@mui/material';
import AppProviders from './AppProviders';
import Tabs from './Tabs';

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

function App() {
	return (
		<AppProviders>
			<AppContainer>
				<Outer>
					<Tabs />
				</Outer>
			</AppContainer>
		</AppProviders>
	);
}

export default App;
