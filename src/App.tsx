import { CssBaseline, styled } from '@mui/material';
import AppProviders from './AppProviders';

const AppContainer = styled('div')(({ theme }) => ({
	display: 'block',
	width: '100vw',
	height: '100vh',
	padding: theme.spacing(12),
}));

const Outer = styled('div')(() => ({
	background: '#fff3',
}));

function App() {
	return (
		<AppProviders>
			<CssBaseline />
			<AppContainer>
				<Outer>Welcome</Outer>
			</AppContainer>
		</AppProviders>
	);
}

export default App;
